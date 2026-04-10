/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Quiz from './components/Quiz';
import { subjects } from './data/studyData';
import { BookOpen, Clock, Star, TrendingUp, CheckCircle, Volume2, VolumeX } from 'lucide-react';

export default function App() {
  const [activeSubjectId, setActiveSubjectId] = useState(subjects[0].id);
  const [activeTopicId, setActiveTopicId] = useState(subjects[0].topics[0].id);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const activeSubject = subjects.find(s => s.id === activeSubjectId) || subjects[0];
  const activeTopic = activeSubject.topics.find(t => t.id === activeTopicId) || activeSubject.topics[0];

  const handleSelect = (subjectId: string, topicId: string) => {
    stopSpeaking();
    setActiveSubjectId(subjectId);
    setActiveTopicId(topicId);
    setIsQuizMode(false);
  };

  const stopSpeaking = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  const toggleSpeech = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      // Clean markdown for better speech
      const cleanText = activeTopic.content
        .replace(/#+\s/g, '') // Remove headers
        .replace(/\*\*/g, '') // Remove bold
        .replace(/\*/g, '') // Remove italics
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links
        .replace(/`([^`]+)`/g, '$1'); // Remove code blocks

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'pt-BR';
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-[calc(100vh-64px)]">
        <Sidebar 
          activeSubjectId={activeSubjectId}
          activeTopicId={activeTopicId}
          onSelect={handleSelect}
          onQuizMode={() => {
            stopSpeaking();
            setIsQuizMode(true);
          }}
          isQuizMode={isQuizMode}
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
          <AnimatePresence mode="wait">
            {isQuizMode ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Quiz />
              </motion.div>
            ) : (
              <motion.div
                key={`${activeSubjectId}-${activeTopicId}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
                        {activeSubject.title}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <Clock className="w-3 h-3" />
                        15 min de leitura
                      </span>
                    </div>
                    
                    <button
                      onClick={toggleSpeech}
                      className={clsx(
                        "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all",
                        isSpeaking 
                          ? "bg-red-100 text-red-600 hover:bg-red-200" 
                          : "bg-slate-900 text-white hover:bg-slate-800"
                      )}
                    >
                      {isSpeaking ? (
                        <>
                          <VolumeX className="w-4 h-4" />
                          Parar Áudio
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4" />
                          Ouvir Explicação
                        </>
                      )}
                    </button>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                    {activeTopic.title}
                  </h1>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                      <div className="bg-amber-100 p-2 rounded-xl">
                        <Star className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Relevância</p>
                        <p className="text-sm font-bold text-slate-900">Essencial</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                      <div className="bg-emerald-100 p-2 rounded-xl">
                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Dificuldade</p>
                        <p className="text-sm font-bold text-slate-900">Média</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                      <div className="bg-blue-100 p-2 rounded-xl">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</p>
                        <p className="text-sm font-bold text-slate-900">Em Estudo</p>
                      </div>
                    </div>
                  </div>
                </div>

                <article className="prose prose-slate prose-lg max-w-none 
                  prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
                  prose-h1:text-4xl prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-slate-200
                  prose-p:text-slate-600 prose-p:leading-relaxed
                  prose-li:text-slate-600
                  prose-strong:text-slate-900 prose-strong:font-bold
                  prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:rounded
                  bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100
                ">
                  <ReactMarkdown>{activeTopic.content}</ReactMarkdown>
                </article>

                {activeTopic.fixationQuestions && activeTopic.fixationQuestions.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-emerald-500" />
                      Questões de Fixação
                    </h3>
                    <div className="space-y-6">
                      {activeTopic.fixationQuestions.map((q, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                          <p className="font-bold text-slate-800 mb-4">{q.question}</p>
                          <div className="space-y-2">
                            {q.options.map((opt, optIdx) => (
                              <div key={optIdx} className="p-3 rounded-xl border border-slate-100 text-sm text-slate-600">
                                {opt}
                              </div>
                            ))}
                          </div>
                          <details className="mt-4 group">
                            <summary className="text-sm font-bold text-blue-600 cursor-pointer list-none flex items-center gap-2">
                              Ver Gabarito Comentado
                            </summary>
                            <div className="mt-4 p-4 bg-blue-50 rounded-xl text-sm text-blue-900 border border-blue-100">
                              <p className="font-bold mb-1">Resposta: {q.options[q.answer]}</p>
                              <p>{q.explanation}</p>
                            </div>
                          </details>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-12 flex items-center justify-between p-8 bg-slate-900 rounded-[2rem] text-white overflow-hidden relative group">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2">Pronto para o Simulado?</h3>
                    <p className="text-slate-400 text-sm mb-6 max-w-md">
                      Teste seus conhecimentos com questões inéditas geradas por IA sobre {activeSubject.title}.
                    </p>
                    <button 
                      onClick={() => {
                        stopSpeaking();
                        setIsQuizMode(true);
                      }}
                      className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all"
                    >
                      Iniciar Simulado Dinâmico
                    </button>
                  </div>
                  <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}



