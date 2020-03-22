  import fontStyleAdvanced from './fontStyleAdvanced.svelte';

  export const FontStyleAdvancedCommand = () => {
    return {
      Component: fontStyleAdvanced,
    }
  }
  
  FontStyleAdvancedCommand.story = {
    name: 'superscript,subscript',
  }            