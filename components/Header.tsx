
import { BookOpen, GraduationCap } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">Guia INSS</h1>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Técnico do Seguro Social</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-4">
              <span className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer transition-colors">Materiais</span>
              <span className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer transition-colors">Simulados</span>
              <span className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer transition-colors">Cronograma</span>
            </nav>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Começar Estudo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
