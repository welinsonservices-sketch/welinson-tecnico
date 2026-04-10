
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, RefreshCcw, ChevronRight, Loader2, BrainCircuit } from 'lucide-react';
import { generateQuizQuestions, type Question } from '../services/quizService';
import { subjects } from '../data/studyData';

export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('Seguridade Social');

  const startQuiz = async () => {
    setLoading(true);
    const newQuestions = await generateQuizQuestions(selectedSubject, 5);
    setQuestions(newQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setLoading(false);
  };

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
        <p className="text-slate-600 font-medium animate-pulse">Gerando questões inéditas com IA...</p>
      </div>
    );
  }

  if (questions.length === 0 || showResult) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 text-center border border-slate-100"
      >
        {!showResult ? (
          <>
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BrainCircuit className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Simulado Dinâmico</h2>
            <p className="text-slate-500 mb-8">Escolha uma disciplina para gerar questões exclusivas.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {subjects.map(s => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSubject(s.title)}
                  className={`p-4 rounded-2xl border-2 transition-all text-sm font-bold ${
                    selectedSubject === s.title 
                    ? "border-blue-600 bg-blue-50 text-blue-700" 
                    : "border-slate-100 hover:border-slate-200 text-slate-600"
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>

            <button
              onClick={startQuiz}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            >
              Gerar Simulado
            </button>
          </>
        ) : (
          <>
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Simulado Concluído!</h2>
            <p className="text-slate-500 mb-8">Você acertou {score} de {questions.length} questões.</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-2xl">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Precisão</p>
                <p className="text-2xl font-bold text-slate-900">{(score / questions.length) * 100}%</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Disciplina</p>
                <p className="text-sm font-bold text-slate-900 truncate">{selectedSubject}</p>
              </div>
            </div>

            <button
              onClick={() => { setQuestions([]); setShowResult(false); }}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            >
              <RefreshCcw className="w-5 h-5" />
              Novo Simulado
            </button>
          </>
        )}
      </motion.div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Simulado: {selectedSubject}</h2>
          <p className="text-slate-500">Questões inéditas geradas por IA</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Questão</p>
          <p className="text-lg font-bold text-blue-600">{currentQuestion + 1} / {questions.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="h-2 bg-slate-100 w-full">
          <motion.div 
            className="h-full bg-blue-600"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
        
        <div className="p-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-8 leading-relaxed">
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isCorrect = index === question.answer;
              const isSelected = selectedOption === index;
              
              let variant = "default";
              if (isAnswered) {
                if (isCorrect) variant = "correct";
                else if (isSelected) variant = "wrong";
                else variant = "dimmed";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                    variant === "default" ? "border-slate-100 hover:border-blue-200 hover:bg-blue-50/30" :
                    variant === "correct" ? "border-emerald-500 bg-emerald-50 text-emerald-900" :
                    variant === "wrong" ? "border-rose-500 bg-rose-50 text-rose-900" :
                    "border-slate-50 opacity-50"
                  }`}
                >
                  <span className="font-medium">{option}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600" />}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 pt-8 border-t border-slate-100"
              >
                <div className="bg-blue-50 p-6 rounded-2xl mb-6 border border-blue-100">
                  <h4 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-2">Explicação:</h4>
                  <p className="text-blue-900 text-sm leading-relaxed">{question.explanation}</p>
                </div>
                <button
                  onClick={nextQuestion}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  {currentQuestion + 1 === questions.length ? 'Ver Resultado' : 'Próxima Questão'}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

