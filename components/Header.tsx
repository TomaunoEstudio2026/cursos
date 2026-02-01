
import React from 'react';

const Header: React.FC = () => {
  // Logo ID: 1EFWhAi8I9zhStIst2GLh1E2A6RyJZODS
  const logoUrl = `https://lh3.googleusercontent.com/d/1EFWhAi8I9zhStIst2GLh1E2A6RyJZODS`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-accent bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <a href="/index.html" className="flex items-center hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-extrabold tracking-tighter uppercase">
                toma<span className="text-primary">uno</span>
                <span className="text-white ml-2 font-light tracking-widest">Model's</span>
              </h1>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center gap-10">
            <a href="/index.html" className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-[0.2em]">Home</a>
            <a href="/cursos.html" className="text-xs font-bold text-primary transition-colors uppercase tracking-[0.2em] border-b-2 border-primary pb-1">Cursos</a>
            <a href="/modelos.html" className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-[0.2em]">Modelos</a>
            <a href="/staff.html" className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-[0.2em]">Staff</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input 
                className="bg-surface-dark border-border-accent rounded-full py-2 pl-10 pr-4 text-xs focus:ring-primary focus:border-primary w-48 transition-all outline-none" 
                placeholder="Buscar curso..." 
                type="text"
              />
              <span className="material-symbols-outlined absolute left-3 top-2 text-slate-500 text-lg">search</span>
            </div>
            <button className="p-2 hover:bg-surface-dark rounded-full transition-colors relative">
              <span className="material-symbols-outlined text-white">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
            </button>
            <div className="size-10 rounded-full border-2 border-primary overflow-hidden cursor-pointer hover:scale-105 transition-transform bg-white">
              <img 
                className="w-full h-full object-contain p-1" 
                src={logoUrl} 
                alt="Logo Tomauno" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40?text=T';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
