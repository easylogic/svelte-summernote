import onPaste from './onPaste.svelte';

export const OnPasteCallback = () => {
    return {
      Component: onPaste,
    }
  }
  
OnPasteCallback.story = {
  name: 'onPaste',
}     