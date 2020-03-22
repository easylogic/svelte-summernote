  import rangeDeleteContents from './range.deleteContents.svelte';

  export const RangeDeleteContentsCommand = () => {
    return {
      Component: rangeDeleteContents,
    }
  }
  
  RangeDeleteContentsCommand.story = {
    name: 'range.deleteContents()',
  }                  