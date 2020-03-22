  import createLink from './createLink.unlink.svelte';

  export const CreateLinkCommand = () => {
    return {
      Component: createLink,
    }
  }
  
  CreateLinkCommand.story = {
    name: 'createLink, unlink',
  }        