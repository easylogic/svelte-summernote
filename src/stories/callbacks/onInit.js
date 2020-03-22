  import onInit from './onInit.svelte';

  export const OnInitCallback = () => {
      return {
        Component: onInit,
      }
    }
    
    OnInitCallback.story = {
    name: 'onInit',
  }  