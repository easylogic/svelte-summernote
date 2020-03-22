import insertText from './insertText.svelte';

export const InsertTextCommand = () => {
  return {
    Component: insertText,
  }
}

InsertTextCommand.story = {
  name: 'insertText',
}            