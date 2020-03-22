  import formatHeader from './formatHeader.svelte';

  export const FormatHeaderCommand = () => {
    return {
      Component: formatHeader,
    }
  }
  
  FormatHeaderCommand.story = {
    name: 'formatH1~H6',
  }        