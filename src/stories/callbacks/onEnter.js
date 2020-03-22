  import onEnter from './onEnter.svelte';

  export const OnEnterCallback = () => {
      return {
        Component: onEnter,
      }
    }
    
    OnEnterCallback.story = {
    name: 'onEnter',
  }    