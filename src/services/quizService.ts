
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface Question {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export async function generateQuizQuestions(subject: string, count: number = 5): Promise<Question[]> {
  const prompt = `Gere ${count} questões de múltipla escolha para o concurso do INSS sobre o tema: ${subject}. 
  As questões devem ser de nível técnico do seguro social.
  Inclua a Lei 8.213/91, Decreto 3.048/99 e IN 128/2022 se o tema for Seguridade Social.
  Cada questão deve ter 4 opções e apenas uma correta.
  Forneça uma explicação detalhada para a resposta correta.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING } 
              },
              answer: { 
                type: Type.INTEGER,
                description: "Índice da resposta correta (0-3)"
              },
              explanation: { type: Type.STRING }
            },
            required: ["question", "options", "answer", "explanation"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating questions:", error);
    return [];
  }
}
