import { TerminalSquare, Activity, GitBranch } from "lucide-react"

export function CaseStudies() {
  // Database dei progetti (Simulazione Log di Sistema)
  const projects = [
    {
      id: "SYS-01",
      title: "CLOUD-NATIVE PORTFOLIO INFRASTRUCTURE",
      status: "ACTIVE",
      architecture: ["[Next.js]", "->", "[OpenNext]", "->", "[AWS Lambda]", "->", "[CloudFront]"],
      description: "Progettazione e deploy di un'infrastruttura serverless edge-optimized. Migrazione dell'ambiente di sviluppo locale su subsystem POSIX (WSL2) per bypassare le limitazioni di I/O di Windows e garantire una pipeline di CI/CD nativa.",
      metrics: ["Latency: < 50ms", "Environment: WSL2/Linux", "IaC: SST"],
    },
    {
      id: "SEC-02",
      title: "FINTECH SECURITY ARCHITECTURE AUDIT",
      status: "IN PROGRESS",
      architecture: ["[Client]", "->", "[AWS WAF]", "->", "[API Gateway]", "->", "[Cognito]"],
      description: "Analisi delle vulnerabilità e implementazione di policy IAM zero-trust. Isolamento dei microservizi tramite VPC private e rotazione automatizzata dei segreti tramite AWS Secrets Manager.",
      metrics: ["Compliance: SOC 2 Target", "Auth: OAuth 2.0 / JWT", "Encryption: AES-256"],
    }
  ]

  return (
    <section id="projects" className="w-full py-16 border-b border-slate-800/50">
      
      
      <div className="flex items-center gap-3 mb-8">
        <TerminalSquare className="w-6 h-6 text-terminal" />
        <h2 className="text-2xl font-mono font-bold uppercase tracking-widest text-slate-200">
          Engineering Case Studies
        </h2>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative flex flex-col p-6 md:p-8 bg-[#060A16]/60 border border-slate-800 hover:border-terminal/50 transition-all duration-300 rounded-sm overflow-hidden"
          >
            {/* Effetto Scanline (decorativo per il feel "terminale") */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminal/5 to-transparent opacity-0 group-hover:opacity-100 transform -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite] pointer-events-none"></div>

            {/* Header Card: ID e Status */}
            <div className="flex justify-between items-start mb-6 border-b border-slate-800/50 pb-4">
              <span className="font-mono text-xs text-slate-500 tracking-wider">
                REPORT ID: {project.id}
              </span>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${project.status === 'ACTIVE' ? 'bg-terminal animate-pulse' : 'bg-amber-500'}`}></span>
                <span className="font-mono text-xs tracking-widest text-slate-400">
                  {project.status}
                </span>
              </div>
            </div>

        
            <h3 className="text-xl font-bold font-mono text-slate-100 mb-4 tracking-wide">
              {project.title}
            </h3>
            
           
            <div className="flex flex-wrap items-center gap-2 mb-6 p-4 bg-void border border-slate-800/80 rounded-sm">
              <GitBranch className="w-4 h-4 text-slate-500 mr-2" />
              {project.architecture.map((node, i) => (
                <span 
                  key={i} 
                  className={`font-mono text-xs md:text-sm ${node === '->' ? 'text-slate-600' : 'text-terminal'}`}
                >
                  {node}
                </span>
              ))}
            </div>

         
            <p className="font-mono text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
              <span className="text-slate-600 select-none">{`> `}</span>
              {project.description}
            </p>

           
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800/50">
              {project.metrics.map((metric, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-slate-600" />
                  <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}