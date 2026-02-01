
import React, { useState } from 'react';

interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: React.ReactNode;
  duration: string;
  date: string;
  image: string;
  isPopular?: boolean;
  active?: boolean;
}

const CoursesPage: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const driveImageUrl = `https://lh3.googleusercontent.com/d/1Za8YozirGOYmgC5zR7hs_r2vvcUQBzXe`;

  const courses: Course[] = [
    {
      id: '1',
      title: 'CURSO DE MODELAJE',
      category: '5ta EDICIÓN',
      description: 'Domina la pasarela con elegancia y actitud. Técnicas de caminata, Fotografía publicitaria, Asesoría de Imagen, Automaquillje, Nutrición y Expresión corporal',
      longDescription: (
        <div className="space-y-8 text-white/80">
          <div className="bg-primary/10 border border-primary/20 p-6 rounded-2xl">
            <h4 className="text-xl font-black text-white mb-2 tracking-tighter uppercase italic">✨ CURSO DE MODELAJE & FOTOGRAFÍA PUBLICITARIA</h4>
            <p className="text-sm text-primary font-bold uppercase tracking-widest mb-4">5ta EDICIÓN</p>
            <p className="text-base leading-relaxed italic">
              🚀 ¡Una nueva experiencia pensada para vos que querés dar tus primeros pasos en el mundo del modelaje profesional! Con cada edición crecemos y mejoramos. ¡Esta 5ta edición viene con todo! 🤩
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="flex items-center gap-2 text-white font-black uppercase text-xs tracking-[0.2em]">
                <span className="material-symbols-outlined text-primary">👠</span> ¿A quién está dirigido?
              </h5>
              <p className="text-sm leading-relaxed pl-7">A personas amateurs o principiantes que quieren empezar desde cero. No necesitás experiencia previa, ¡solo ganas de aprender!</p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 pl-1">
                  <span className="material-symbols-outlined text-primary">calendar_today</span>
                  <p className="text-sm"><span className="font-bold text-white uppercase text-[10px] block opacity-50">Inicio</span> 7 de marzo</p>
                </div>
                <div className="flex items-center gap-3 pl-1">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <p className="text-sm"><span className="font-bold text-white uppercase text-[10px] block opacity-50">Días</span> Sábados de 9 a 12 hs</p>
                </div>
                <div className="flex items-center gap-3 pl-1">
                  <span className="material-symbols-outlined text-primary">hourglass_empty</span>
                  <p className="text-sm"><span className="font-bold text-white uppercase text-[10px] block opacity-50">Duración</span> 4 meses</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
              <h5 className="flex items-center gap-2 text-white font-black uppercase text-xs tracking-[0.2em]">
                <span className="material-symbols-outlined text-primary">payments</span> Inversión
              </h5>
              <div className="space-y-2">
                <p className="text-sm flex justify-between"><span>Inscripción:</span> <span className="font-bold text-white">$40.000</span></p>
                <p className="text-sm flex justify-between"><span>Cuotas (Mar a Jun):</span> <span className="font-bold text-white">$50.000</span></p>
                <p className="text-[10px] text-white/40 italic">* Abonando antes del 10 de cada mes (luego $60.000)</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="flex items-center gap-2 text-white font-black uppercase text-xs tracking-[0.2em]">
              <span className="material-symbols-outlined text-primary">library_books</span> ¿Qué vas a aprender?
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm pl-7">
              <div className="flex items-center gap-2">✔ Pasarela profesional</div>
              <div className="flex items-center gap-2">✔ Fotografía publicitaria</div>
              <div className="flex items-center gap-2">✔ Automaquillaje y SkinCare</div>
              <div className="flex items-center gap-2">✔ Nutrición y bienestar</div>
              <div className="flex items-center gap-2">✔ Estilismo y Asesoría</div>
              <div className="flex items-center gap-2">✔ Expresión escénica</div>
              <div className="flex items-center gap-2 text-primary font-bold col-span-full">🆕 NUEVA: Marketing para modelos (Redes e imagen)</div>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="flex items-center gap-2 text-white font-black uppercase text-xs tracking-[0.2em]">
              <span className="material-symbols-outlined text-primary">inventory_2</span> Incluye
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pl-7 text-center">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="material-symbols-outlined text-primary mb-1">photo_library</span>
                <p className="text-[10px] font-bold uppercase">Polaroids</p>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="material-symbols-outlined text-primary mb-1">badge</span>
                <p className="text-[10px] font-bold uppercase">Digital Book</p>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="material-symbols-outlined text-primary mb-1">picture_as_pdf</span>
                <p className="text-[10px] font-bold uppercase">Apuntes PDF</p>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="material-symbols-outlined text-primary mb-1">workspace_premium</span>
                <p className="text-[10px] font-bold uppercase">Certificado</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 space-y-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <p className="text-sm"><strong>Estudio TOMAUNO:</strong> Pedro Méndez 2069 (B° Palomar, Posadas)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">forum</span>
              <p className="text-sm leading-relaxed italic">"Tomauno se mueve con vos, camina a tu lado y te impulsa a hacer realidad tus sueños. <strong>TE ESPERAMOS!</strong>"</p>
            </div>
          </div>
        </div>
      ),
      duration: '4 Meses',
      date: '07 de Marzo',
      image: driveImageUrl,
      isPopular: true,
      active: true
    },
    {
      id: '2',
      title: 'Foto Pose',
      category: 'Próximamente',
      description: 'Técnicas de expresión frente a cámara. Aprende a encontrar tus mejores ángulos y conectar con el lente.',
      longDescription: null,
      duration: '4 Semanas',
      date: 'TBD',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
      active: false
    },
    {
      id: '3',
      title: 'Automaquillaje',
      category: 'Próximamente',
      description: 'Realza tu belleza para cada ocasión. Desde looks naturales hasta estilos editoriales de alto impacto.',
      longDescription: null,
      duration: '2 Semanas',
      date: 'TBD',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop',
      active: false
    }
  ];

  const handleMoreDetails = (course: Course) => {
    setSelectedCourse(course);
    setShowDetails(true);
  };

  const handleInscribirme = () => {
    window.location.href = 'altacursos.html';
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 border-l-4 border-primary pl-6">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-black uppercase tracking-tight mb-4">Cursos y <span className="text-primary">Talleres</span></h2>
          <p className="text-slate-400 text-lg leading-relaxed">Domina la escena y proyecta tu esencia con nuestra formación de élite. Programas diseñados para el mercado internacional.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className={`group relative flex flex-col bg-surface-dark rounded-xl overflow-hidden border transition-all duration-500 ${
              course.active ? 'border-border-accent hover:border-primary/50' : 'border-white/5 opacity-60 grayscale'
            }`}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src={course.image} 
                alt={course.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
              {course.isPopular && course.active && (
                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">Inscripciones Abiertas</div>
              )}
              {!course.active && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                   <span className="text-white text-xs font-black uppercase tracking-[0.3em] border border-white/40 px-4 py-2">Próximamente</span>
                </div>
              )}
              <div className="absolute bottom-4 left-4">
                <p className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-1">{course.category}</p>
                <h4 className="text-2xl font-extrabold uppercase tracking-tighter">{course.title}</h4>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-slate-400 text-sm leading-relaxed min-h-[4.5rem]">{course.description}</p>
              
              <div className="grid grid-cols-1 gap-3 pt-2">
                <button 
                  disabled={!course.active}
                  onClick={handleInscribirme}
                  className={`w-full py-3 px-4 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
                    course.active 
                    ? 'bg-primary text-white hover:bg-red-700 shadow-lg shadow-primary/10' 
                    : 'bg-white/5 text-white/30 cursor-not-allowed'
                  }`}
                >
                  Inscribirme Ahora
                </button>
                <button 
                  disabled={!course.active}
                  onClick={() => handleMoreDetails(course)}
                  className={`w-full py-3 px-4 rounded-lg bg-transparent border text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
                    course.active
                    ? 'border-white/20 text-white hover:bg-white/5'
                    : 'border-white/5 text-white/10 cursor-not-allowed'
                  }`}
                >
                  MAS DETALLES
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showDetails && selectedCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background-dark/95 backdrop-blur-md">
          <div className="glass-effect w-full max-w-2xl rounded-3xl border border-primary/30 shadow-2xl relative animate-in zoom-in duration-300 max-h-[90vh] flex flex-col">
            
            <div className="p-10 pb-4 flex justify-between items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] w-fit mb-4">
                  Detalles Completos del Programa
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">{selectedCourse.title}</h3>
              </div>
              <button 
                onClick={() => setShowDetails(false)} 
                className="text-white/40 hover:text-white transition-colors p-2 -mr-4"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-10 py-6 custom-scrollbar">
              {selectedCourse.longDescription}
            </div>

            <div className="p-10 pt-4">
              <button 
                onClick={handleInscribirme}
                className="w-full bg-primary text-white py-5 rounded-xl text-xs font-black uppercase tracking-[0.3em] hover:bg-red-700 transition-all shadow-xl shadow-primary/20"
              >
                Comenzar Inscripción
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CoursesPage;
