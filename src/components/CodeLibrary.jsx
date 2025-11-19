import { useState } from 'react'

const initialSnippets = [
  { title: 'AI Blog Formatter', lang: 'JavaScript', desc: 'Format AI-generated drafts into publish-ready Markdown using heuristics + regex.', code: `export function formatAiDraft(input){\n  const title = input.match(/^# .+/m)?.[0] || '# Untitled'\n  const cleaned = input\n    .replace(/\n{3,}/g,'\n\n')\n    .replace(/\*(.+)\*/g,'**$1**')\n  return [title, '', cleaned].join('\n')\n}` },
  { title: 'n8n Auto-Publish Webhook', lang: 'n8n', desc: 'Webhook to receive content, validate, and trigger CMS publish with queue fallback.', code: `POST /webhook\n{\n  \'token\': \'$SECRET\',\n  \'payload\': {...}\n}` },
  { title: 'Python Keyword Extractor', lang: 'Python', desc: 'Simple noun-phrase extraction with fallback for environments without NLP libs.', code: `import re\n\ndef extract_keywords(text: str, k: int = 8):\n    words = re.findall(r"[A-Za-z]{4,}", text.lower())\n    freq = {}\n    for w in words: freq[w] = freq.get(w,0)+1\n    return sorted(freq, key=freq.get, reverse=True)[:k]` },
  { title: 'Replit Micro-App Starter', lang: 'JS', desc: 'Single-file starter with router + state pattern.', code: `const state = {};\nfunction render(){ document.getElementById('app').innerHTML = 'Hello' }\nwindow.addEventListener('hashchange', render); render();` },
  { title: 'Prompt Engineering Blocks', lang: 'Prompt', desc: 'Reusable blocks: role, constraints, format, eval.', code: `Role: Senior {domain}\nConstraints: ...\nFormat: JSON schema ...\nEval: self-checklist ...` },
  { title: 'API boilerplates', lang: 'Python/JS', desc: 'FastAPI + fetch patterns for quick starts.', code: `# FastAPI\nfrom fastapi import FastAPI\napp = FastAPI()\n@app.get('/health')\nasync def health(): return {'ok': True}\n\n// fetch\nasync function api(path){ const r = await fetch(base+path); return r.json() }` },
  { title: 'Agentic workflow template', lang: 'Orchestrator', desc: 'Plan/act/reflect loop with tools map.', code: `state = {goal, memory: []}\nwhile(!done){ plan(); act(); reflect(); }` }
]

function Card({ s }){
  const [open, setOpen] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(s.code)
    alert('Copied!')
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs text-blue-300">{s.lang}</div>
          <h3 className="text-white font-semibold">{s.title}</h3>
          <p className="text-sm text-blue-100/90 mt-1">{s.desc}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={copy} className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-400">Copy</button>
          <button onClick={()=>setOpen(!open)} className="px-3 py-1.5 rounded-md bg-white/10 text-white text-sm hover:bg-white/20">{open?'Hide':'View'}</button>
        </div>
      </div>
      {open && (
        <pre className="mt-3 text-xs bg-slate-950/80 rounded-lg p-3 overflow-auto text-blue-100"><code>{s.code}</code></pre>
      )}
    </div>
  )
}

export default function CodeLibrary(){
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950" id="code">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Free Code Snippets</h2>
          <a href="/code" className="text-blue-300 hover:text-white text-sm">Browse all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialSnippets.map((s)=> (<Card key={s.title} s={s} />))}
        </div>
      </div>
    </section>
  )
}
