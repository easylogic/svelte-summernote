  import isEmpty from './isEmpty.svelte';

  export const IsEmptyCommand = () => {
    return {
      Component: isEmpty,
    }
  }
  
  IsEmptyCommand.story = {
    name: 'isEmpty',
  }    