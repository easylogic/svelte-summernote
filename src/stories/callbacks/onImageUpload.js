  import onImageUpload from './onImageUpload.svelte';

  export const OnImageUploadCallback = () => {
      return {
        Component: onImageUpload,
      }
    }
    
    OnImageUploadCallback.story = {
    name: 'onImageUpload',
  }       