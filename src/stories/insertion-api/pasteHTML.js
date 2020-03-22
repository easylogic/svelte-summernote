  import pasteHTML from './pasteHTML.svelte';

  export const PasteHTMLCommand = () => {
    return {
      Component: pasteHTML,
    }
  }
  
  PasteHTMLCommand.story = {
    name: 'pasteHTML',
  }            