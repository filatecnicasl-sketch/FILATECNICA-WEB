import { useEffect, useRef, useState } from 'react'
import grapesjs, { Editor } from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import './index.css'
import { customBlocks } from './blocks'
import { TopBar } from './components/TopBar'
import { initEditorPlugins } from './plugins'

function App() {
  const editorRef = useRef<Editor | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [saved, setSaved] = useState(false)
  const [mode, setMode] = useState<'edit' | 'preview'>('edit')

  useEffect(() => {
    if (!containerRef.current || editorRef.current) return

    const editor = grapesjs.init({
      container: containerRef.current,
      height: '100%',
      width: 'auto',
      storageManager: {
        type: 'local',
        autosave: true,
        autoload: true,
        stepsBeforeSave: 3,
        options: {
          local: { key: 'filatecnica-page' }
        }
      },
      deviceManager: {
        devices: [
          { name: 'Desktop', width: '' },
          { name: 'Tablet', width: '768px', widthMedia: '992px' },
          { name: 'Mobile', width: '375px', widthMedia: '480px' },
        ]
      },
      panels: {
        defaults: [
          {
            id: 'panel-devices',
            el: '#panel-devices',
            buttons: [
              { id: 'device-desktop', label: '<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>', command: 'set-device-desktop', active: true, togglable: false },
              { id: 'device-tablet',  label: '<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>', command: 'set-device-tablet', togglable: false },
              { id: 'device-mobile',  label: '<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>', command: 'set-device-mobile', togglable: false },
            ]
          },
          {
            id: 'views',
            buttons: [
              { id: 'open-blocks',  label: '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>', command: 'open-blocks',  togglable: false, active: true },
              { id: 'open-layers', label: '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>', command: 'open-layers', togglable: false },
              { id: 'open-styles', label: '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>', command: 'open-sm',    togglable: false },
              { id: 'open-traits', label: '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>', command: 'open-tm',    togglable: false },
            ]
          }
        ]
      },
      blockManager: {
        appendTo: '#blocks',
        blocks: customBlocks,
      },
      styleManager: {
        appendTo: '#styles-container',
        sectors: [
          { name: 'Dimension',   open: false, properties: ['width','min-width','height','max-height','margin','padding'] },
          { name: 'Typography',  open: false, properties: ['font-family','font-size','font-weight','letter-spacing','color','line-height','text-align','text-decoration','text-shadow'] },
          { name: 'Background',  open: false, properties: ['background-color','background'] },
          { name: 'Border',      open: false, properties: ['border-radius','border'] },
          { name: 'Extra',       open: false, properties: ['opacity','cursor'] },
          { name: 'Flex',        open: false, properties: ['display','flex-direction','flex-wrap','justify-content','align-items','align-content','order','flex-basis','flex-grow','flex-shrink','align-self'] },
        ]
      },
      layerManager:  { appendTo: '#layers-container' },
      traitManager:  { appendTo: '#traits-container' },
      canvasCss: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; margin: 0; }
      `,
    })

    initEditorPlugins(editor)

    // Load saved page or use default template
    const saved = localStorage.getItem('filatecnica-page')
    if (!saved) {
      fetch('/template.html')
        .then(r => r.text())
        .then(html => editor.setComponents(html))
        .catch(() => {
          editor.setComponents('<div style="padding:40px;text-align:center;font-family:Inter,sans-serif"><h1 style="color:#1e3a5f">Bienvenido al Editor</h1><p style="color:#64748b;margin-top:12px">Arrastra bloques desde el panel izquierdo para construir tu página</p></div>')
        })
    }

    editorRef.current = editor
    return () => { editor.destroy(); editorRef.current = null }
  }, [])

  const handleSave = () => {
    editorRef.current?.store()
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const handleExport = () => {
    const editor = editorRef.current
    if (!editor) return
    const html = editor.getHtml()
    const css  = editor.getCss()
    const full = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>Filatecnica</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
  <style>${css}</style>
</head>
<body>${html}</body>
</html>`
    const blob = new Blob([full], { type: 'text/html' })
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'filatecnica.html'; a.click()
  }

  const handleUndo  = () => editorRef.current?.UndoManager.undo()
  const handleRedo  = () => editorRef.current?.UndoManager.redo()
  const handleClear = () => { if (confirm('Limpiar toda la página?')) editorRef.current?.setComponents('') }

  const handlePreview = () => {
    const editor = editorRef.current
    if (!editor) return
    if (mode === 'edit') {
      editor.runCommand('preview')
      setMode('preview')
    } else {
      editor.stopCommand('preview')
      setMode('edit')
    }
  }

  return (
    <div className="flex flex-col h-screen bg-slate-900 overflow-hidden">
      <TopBar
        onSave={handleSave}
        onExport={handleExport}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onClear={handleClear}
        onPreview={handlePreview}
        mode={mode}
        saved={saved}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Left panel - Blocks */}
        <div className={`w-64 bg-slate-800 border-r border-slate-700 flex flex-col overflow-hidden transition-all ${mode === 'preview' ? 'hidden' : ''}`}>
          <div className="px-4 py-3 border-b border-slate-700">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Bloques</p>
          </div>
          <div id="blocks" className="flex-1 overflow-y-auto p-2" />
        </div>

        {/* Center - Canvas */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Device bar */}
          {mode === 'edit' && (
            <div className="flex items-center justify-center gap-2 py-2 bg-slate-800 border-b border-slate-700">
              <div id="panel-devices" className="flex gap-1" />
            </div>
          )}
          <div ref={containerRef} className="flex-1 overflow-hidden" />
        </div>

        {/* Right panel - Properties */}
        <div className={`w-72 bg-slate-800 border-l border-slate-700 flex flex-col overflow-hidden transition-all ${mode === 'preview' ? 'hidden' : ''}`}>
          {/* Tabs */}
          <div className="flex border-b border-slate-700">
            {[
              { id: 'tab-styles', label: 'Estilos' },
              { id: 'tab-traits', label: 'Propiedades' },
              { id: 'tab-layers', label: 'Capas' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  document.querySelectorAll('.right-tab-content').forEach(el => (el as HTMLElement).style.display = 'none')
                  const el = document.getElementById(tab.id)
                  if (el) el.style.display = 'flex'
                }}
                className="flex-1 py-2.5 text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-700 transition border-r border-slate-700 last:border-r-0"
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div id="tab-styles" className="right-tab-content flex-1 flex-col overflow-y-auto" style={{ display: 'flex' }}>
            <div id="styles-container" className="flex-1" />
          </div>
          <div id="tab-traits" className="right-tab-content flex-1 flex-col overflow-y-auto" style={{ display: 'none' }}>
            <div id="traits-container" className="flex-1" />
          </div>
          <div id="tab-layers" className="right-tab-content flex-1 flex-col overflow-y-auto" style={{ display: 'none' }}>
            <div id="layers-container" className="flex-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
