"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Github, Home, ShieldCheck, Terminal } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // Funzione di navigazione
  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "absolute top-10 right-10 flex items-center gap-3 bg-void/50 border border-slate-800 hover:border-terminal/50 transition-colors px-4 py-2.5 w-[250px] rounded-sm group cursor-text font-mono text-sm",
        )}
      >
        <span className="text-terminal font-mono text-sm group-hover:animate-pulse">{`>`}</span>
        <span className="font-mono text-sm text-slate-500 group-hover:text-slate-400">Ctrl+K for command</span>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>

        <div className="border border-terminal/20 rounded-sm bg-void">
        <CommandInput 
            placeholder="Type a command or search..." 
            className="font-mono text-slate-200"
        />
        <CommandList className="font-mono border-t border-slate-800">
          <CommandEmpty className="font-mono text-slate-600 text-sm p-4">No results found.</CommandEmpty>
          
          <CommandGroup heading="System Navigation">
            <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
              <Home className="mr-2 h-4 w-4 text-terminal" />
              <span>[ROOT] Return to Home</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/#projects"))}>
              <Terminal className="mr-2 h-4 w-4 text-terminal" />
              <span>[LOGS] View Project Logs</span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator className="bg-slate-800"/>
          
          <CommandGroup heading="External Credentials">
            <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/tuo-username", "_blank"))}>
              <Github className="mr-2 h-4 w-4 text-slate-400" />
              <span>[GIT] View Repository</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.open("mailto:hello@example.com", "_blank"))}>
              <ShieldCheck className="mr-2 h-4 w-4 text-slate-400" />
              <span>[SEC] Verify Security Audit</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
        </div>
      </CommandDialog>
    </>
  )
}