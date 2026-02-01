
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border-accent bg-surface-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-extrabold tracking-tighter uppercase">
            toma<span className="text-primary">uno</span>
            <span className="text-white ml-2 font-light">Model's</span>
          </h2>
        </div>
        <p className="text-slate-500 text-[10px] font-bold tracking-widest uppercase italic">© 2026 Tomauno Models. Todos los derechos reservados.</p>
        <div className="flex gap-8">
          <a 
            href="https://instagram.com/tomaunomodels" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors uppercase text-[10px] font-black tracking-widest"
          >
            <span className="material-symbols-outlined text-lg">camera</span>
            @tomaunomodels
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
