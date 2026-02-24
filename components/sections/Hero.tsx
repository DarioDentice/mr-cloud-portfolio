import Image from "next/image"

export function Hero() {
  return (
    <section className="w-full min-h-[85vh] flex flex-col justify-center border-b border-slate-800/50 pb-16 pt-8">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-24 space-y-4 md:space-y-0">
        
        {/* Placeholder Logo / Nome */}
        <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-md border border-terminal/30 flex items-center justify-center bg-terminal/10 shadow-[0_0_15px_rgba(0,230,118,0.15)] overflow-hidden">
          <Image 
            src="/images/logoD.png"
            alt="Logo Ingegneristico"
            width={32} 
            height={32}
            className="object-contain p-0.5"
            />
        </div>
          <span className="font-mono text-sm tracking-widest text-slate-100 font-semibold uppercase">
            Dario Dentice
          </span>
        </div>

        {/* Trigger Command Palette */}
        <button className="flex items-center gap-3 bg-[#0a0f1c] border border-slate-800 hover:border-terminal/50 transition-colors px-4 py-2.5 w-full md:w-[400px] rounded-sm group cursor-text">
          <span className="text-terminal font-mono text-sm group-hover:animate-pulse">{`>`}</span>
          <span className="font-mono text-sm text-slate-500 group-hover:text-slate-400">Type a command or press Ctrl+K</span>
        </button>
      </div>

      {/* Contenuto Principale */}
      <div className="flex flex-col space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600">Robust Systems.</span>
          <br />
          Defending <span className="text-terminal">Architectures.</span>
        </h1>

        <div className="max-w-3xl space-y-6 mt-4">
          <p className="font-mono text-sm md:text-base text-slate-400 leading-relaxed">
            Obiettivo: Software Architect & Cybersecurity Expert. 
            Costruisco infrastrutture Cloud-Native in pubblico. 
            Nessuna scorciatoia, studio i sistemi distribuiti affrontando i problemi alla radice e documentando ciò che imparo.
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 font-mono text-sm mt-8 border-t border-slate-800/50 pt-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terminal animate-pulse"></span>
              <span className="text-slate-500">Status: Apprendimento & Sviluppo.</span>
            </div>
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Contact:</span>
              <a href="mailto:hello@example.com" className="text-slate-300 hover:text-terminal transition-colors flex items-center group">
                <span className="text-terminal mr-1 opacity-0 group-hover:opacity-100 transition-opacity">{`>`}</span> 
                dentice.ing@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}