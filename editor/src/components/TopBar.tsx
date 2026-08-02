interface TopBarProps {
  onSave: () => void
  onExport: () => void
  onUndo: () => void
  onRedo: () => void
  onClear: () => void
  onPreview: () => void
  mode: 'edit' | 'preview'
  saved: boolean
}

export function TopBar({ onSave, onExport, onUndo, onRedo, onClear, onPreview, mode, saved }: TopBarProps) {
  return (
    <header className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-700 z-50 flex-shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
          </svg>
        </div>
        <div>
          <span className="text-white font-bold text-sm">Filat<span className="text-blue-400">ecnica</span></span>
          <span className="text-slate-500 text-xs ml-2">Editor Web</span>
        </div>
      </div>

      {/* Center actions */}
      <div className="flex items-center gap-1">
        <button onClick={onUndo} title="Deshacer"
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
          </svg>
        </button>
        <button onClick={onRedo} title="Rehacer"
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10H11a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6"/>
          </svg>
        </button>
        <div className="w-px h-5 bg-slate-700 mx-1" />
        <button onClick={onClear} title="Limpiar página"
          className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-700 rounded-lg transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
        </button>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        <button onClick={onPreview}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
            mode === 'preview'
              ? 'bg-blue-600 text-white'
              : 'text-slate-300 hover:text-white bg-slate-700 hover:bg-slate-600'
          }`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
          </svg>
          {mode === 'preview' ? 'Editar' : 'Vista previa'}
        </button>

        <button onClick={onSave}
          className="flex items-center gap-2 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg text-sm font-medium transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
          </svg>
          {saved ? '¡Guardado!' : 'Guardar'}
        </button>

        <button onClick={onExport}
          className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition shadow-lg shadow-blue-900/30">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
          Exportar HTML
        </button>
      </div>
    </header>
  )
}
