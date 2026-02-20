import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Terminal, Shield, Github, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 flex flex-col items-center text-center space-y-8">
      
      {/* Etichette di Contesto */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1 text-sm">
          <Terminal className="w-3.5 h-3.5" /> Software Engineering
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1.5 px-3 py-1 text-sm">
          <Shield className="w-3.5 h-3.5" /> Cybersecurity Focus
        </Badge>
      </div>
      
      {/* Titolo Principale */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">
        Costruisco sistemi solidi. <br className="hidden sm:inline" />
        Studio come difenderli.
      </h1>
      
      {/* Bio / Dichiarazione d'intenti */}
      <p className="max-w-[600px] text-lg text-slate-600 dark:text-slate-400 mx-auto leading-relaxed">
        Il mio percorso verso l'architettura del software e la sicurezza informatica. 
        Costruisco in pubblico, documento i problemi architetturali che incontro e condivido le soluzioni. 
        Nessuna scorciatoia, solo ingegneria.
      </p>

      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
        <Button size="lg" className="gap-2 font-semibold">
          Esplora l'Infrastruttura <ArrowRight className="w-4 h-4" />
        </Button>
        <Button size="lg" variant="outline" className="gap-2 font-semibold">
          <Github className="w-4 h-4" /> Visualizza il Codice
        </Button>
      </div>

    </section>
  )
}