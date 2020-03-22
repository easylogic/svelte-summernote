import undoRedo from './undo.redo.svelte';

export const UndoRedoCommand = () => {
  return {
    Component: undoRedo,
  }
}

UndoRedoCommand.story = {
  name: 'undo,redo',
}        