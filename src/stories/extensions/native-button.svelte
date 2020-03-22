<script>
import SvelteSummernoteLite, { createSummernoteButton } from 'src/summernote/SvelteSummernoteLite.svelte'

</script>

<style>
.container {
  padding: 20px 40px;
}
</style>

<div class="container">
      <h1>Define Native Button</h1>
      <pre>{`
        import SvelteSummernoteLite, { createSummernoteButton } from 'src/summernote/SvelteSummernoteLite';
        
        <SvelteSummernoteLite id="sample" 
            toolbar={[
              ['group', ['default']]
            ]}
            buttons={{
              default: createSummernoteButton({
                title: 'default button',
                onClick: (context) => {
                  context.invoke('insertText', 'default');
                }
              })
            }}  
          />
      `}</pre>

  <SvelteSummernoteLite id="sample" 
      toolbar={[
        ['group', ['default']]
      ]}
      buttons={{
        default: createSummernoteButton({
          title: 'default button',
          onClick: (context) => {
            context.invoke('insertText', 'default');
          }
        })
      }}  
    />

</div>  