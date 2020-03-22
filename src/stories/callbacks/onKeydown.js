  import onKeydown from './onKeydown.svelte';

  export const OnKeydownCallback = () => {
      return {
        Component: onKeydown,
      }
    }
    
    OnKeydownCallback.story = {
    name: 'onKeydown',
  }     