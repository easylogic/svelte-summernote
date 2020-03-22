<script>
import SvelteSummernoteLite, { createSummernoteButton } from 'src/summernote/SvelteSummernoteLite.svelte'
import MyButton from './MyButton.svelte';

</script>

<style>
.container {
  padding: 20px 40px;
}
</style>

<div class="container">
      <h1>Define Svelte Button</h1>

      <pre>{`

<script>
  // MyButton.svelte 
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
      
      `}</pre>

      <pre>{`
        import SvelteSummernoteLite, { createSummernoteButton } from 'src/summernote/SvelteSummernoteLite';
        import MyButton from './MyButton.svelte';

        <SvelteSummernoteLite id="sample" 
            toolbar={[
              ['group', ['hello']]
            ]}
            buttons={{
              hello: createSummernoteButton({
                element: MyButton,
                props: {
                  text: 'sample'
                },
                container: 'body',
                tooltip: 'yellow'
              })
            }}  
          />
      `}</pre>

<SvelteSummernoteLite id="sample" 
  toolbar={[
    ['group', ['hello']]
  ]}
  buttons={{
    hello: createSummernoteButton({
      element: MyButton,
      props: {
        text: 'sample'
      },
      container: 'body',
      tooltip: 'yellow'
    })
  }}  
/>

</div>