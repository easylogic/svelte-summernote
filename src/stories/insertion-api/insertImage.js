  import insertImage from './insertImage.svelte';

  export const InsertImageCommand = () => {
    return {
      Component: insertImage,
    }
  }
  
  InsertImageCommand.story = {
    name: 'insertImage',
  }          