import insertParagraph from './insertParagraph.svelte';

export const InsertParagraphCommand = () => {
  return {
    Component: insertParagraph,
  }
}

InsertParagraphCommand.story = {
  name: 'insertParagraph',
}              