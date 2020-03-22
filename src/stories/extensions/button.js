  import button from './button.svelte';

  export const ButtonExtension = () => {
      return {
        Component: button,
      }
    }
    
  ButtonExtension.story = {
    name: 'default button',
  }    
       