export function SystemArsenal() {
    // Struttura dati architetturale
    const arsenalData = [
      {
        layer: "Frontend Layer",
        skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Shadcn UI"],
      },
      {
        layer: "Cloud Infra (AWS)",
        skills: ["AWS Lambda", "EC2 | S3", "DynamoDB", "EKS (Kubernetes)", "Terraform", "SQS/SNS", "VPC Design"],
      },
      {
        layer: "Security Ops",
        skills: ["IAM Policies", "AWS WAF", "Security Hub", "GuardDuty", "Secrets Manager", "OAuth 2.0/OIDC"],
      },
    ]
  
    return (
      <section className="w-full py-16 border-b border-slate-800/50">
        
        <div className="flex items-center gap-3 mb-8">
          <span className="text-terminal font-mono text-xl animate-pulse">{`>`}</span>
          <h2 className="text-2xl font-mono font-bold uppercase tracking-widest text-slate-200">
            System Arsenal
          </h2>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-800/80 rounded-sm overflow-hidden bg-[#060A16]/50">
          
          {arsenalData.map((col, index) => (
            <div 
              key={index} 
              className="flex flex-col border-b md:border-b-0 md:border-r border-slate-800/80 last:border-r-0 p-6 md:p-8"
            >
              <h3 className="font-mono text-sm text-slate-500 mb-6 uppercase tracking-widest border-b border-slate-800/50 pb-2">
                {col.layer}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {col.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="font-mono text-xs md:text-sm text-terminal bg-terminal/5 border border-terminal/20 px-2 py-1 rounded-sm hover:bg-terminal/20 hover:border-terminal/60 hover:shadow-[0_0_10px_rgba(0,230,118,0.2)] transition-all duration-300 cursor-default"
                  >
                    [{skill}]
                  </span>
                ))}
              </div>
            </div>
          ))}
  
        </div>
      </section>
    )
  }