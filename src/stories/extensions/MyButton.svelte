<script>
  import { onMount, onDestroy } from 'svelte';
  export let text; 
  export let context;

  function handleChangeValue (_, content) {
    text = content
  }

  onMount(() => {
    context.$note.on('summernote.change', handleChangeValue) 
  })

  onDestroy(() => {
      context.$note.off('summernote.change', handleChangeValue) 
  })
</script>

<span>{text}</span>