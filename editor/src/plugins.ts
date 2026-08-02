import type { Editor } from 'grapesjs'

export function initEditorPlugins(editor: Editor) {
  // Device commands
  editor.Commands.add('set-device-desktop', { run: (e) => e.setDevice('Desktop') })
  editor.Commands.add('set-device-tablet',  { run: (e) => e.setDevice('Tablet')  })
  editor.Commands.add('set-device-mobile',  { run: (e) => e.setDevice('Mobile')  })

  // Keyboard shortcuts
  editor.Keymaps.add('save',  'ctrl+s', () => editor.store())
  editor.Keymaps.add('undo',  'ctrl+z', () => editor.UndoManager.undo())
  editor.Keymaps.add('redo',  'ctrl+y', () => editor.UndoManager.redo())

  // Auto-save feedback
  editor.on('storage:store', () => {
    console.log('[Filatecnica Editor] Guardado automaticamente')
  })
}
