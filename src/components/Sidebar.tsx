

import { 
  Book, 
  FileText, 
  HelpCircle, 
  Info, 
  LayoutDashboard, 
  Lightbulb, 
  Languages, 
  Scale, 
  Gavel, 
  Building, 
  Monitor, 
  Calculator,
  ShieldCheck,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { subjects, type Subject } from '../data/studyData';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  activeSubjectId: string;
  activeTopicId: string;
  onSelect: (subjectId: string, topicId: string) => void;
  onQuizMode: () => void;
  isQuizMode: boolean;
}

export default function Sidebar({ activeSubjectId, activeTopicId, onSelect, onQuizMode, isQuizMode }: SidebarProps) {
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({
    [activeSubjectId]: true
  });

  const toggleSubject = (id: string) => {
    setExpandedSubjects(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4" />;
      case 'Languages': return <Languages className="w-4 h-4" />;
      case 'Scale': return <Scale className="w-4 h-4" />;
      case 'Gavel': return <Gavel className="w-4 h-4" />;
      case 'Building': return <Building className="w-4 h-4" />;
      case 'Monitor': return <Monitor className="w-4 h-4" />;
      case 'Calculator': return <Calculator className="w-4 h-4" />;
      default: return <Book className="w-4 h-4" />;
    }
  };

  return (
    <aside className="w-full md:w-72 bg-white border-r border-slate-200 h-full overflow-y-auto p-4 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Disciplinas</p>
        
        <button
          onClick={onQuizMode}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold transition-all group mb-4",
            isQuizMode
              ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
              : "bg-slate-900 text-white hover:bg-slate-800"
          )}
        >
          <HelpCircle className="w-4 h-4" />
          Simulado Dinâmico IA
        </button>

        {subjects.map((subject) => (
          <div key={subject.id} className="mb-1">
            <button
              onClick={() => toggleSubject(subject.id)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold transition-all group",
                activeSubjectId === subject.id && !isQuizMode
                  ? "text-blue-700 bg-blue-50/50"
                  : "text-slate-600 hover:bg-slate-50"
              )}
            >
              <div className="flex items-center gap-3">
                <span className={cn(
                  "transition-colors",
                  activeSubjectId === subject.id && !isQuizMode ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
                )}>
                  {getIcon(subject.icon)}
                </span>
                {subject.title}
              </div>
              {expandedSubjects[subject.id] ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </button>

            {expandedSubjects[subject.id] && (
              <div className="ml-9 mt-1 flex flex-col gap-1 border-l border-slate-100">
                {subject.topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => onSelect(subject.id, topic.id)}
                    className={cn(
                      "text-left px-3 py-1.5 text-xs font-medium rounded-md transition-all",
                      activeTopicId === topic.id && activeSubjectId === subject.id && !isQuizMode
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                    )}
                  >
                    {topic.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-slate-100">
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <h4 className="text-[10px] font-bold text-blue-800 uppercase tracking-widest mb-2">Dica do Dia</h4>
          <p className="text-xs text-blue-900 leading-relaxed">
            "A constância é o segredo do sucesso. Estude Seguridade Social todos os dias!"
          </p>
        </div>
      </div>
    </aside>
  );
}

