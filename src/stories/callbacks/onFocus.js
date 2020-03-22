  import onFocus from './onFocus.svelte';

  export const OnFocusCallback = () => {
      return {
        Component: onFocus,
      }
    }
    
    OnFocusCallback.story = {
    name: 'onFocus',
  }     