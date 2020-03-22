<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>lineHeights</h1>
        <p>You can override the default list and specify a custom one.</p>
      <pre>{`
  <SvelteSummernoteLite id="sample" 
    lineHeights={['0.2', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.4', '1.5', '2.0', '3.0']}
    toolbar={[
      ['f', ['fontsize', 'fontsizeunit']]
    ]} />
      `}</pre>
  <SvelteSummernoteLite id="sample" 
    lineHeights={['0.2', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.4', '1.5', '2.0', '3.0']}
    toolbar={[
      ['f', ['fontsize', 'fontsizeunit']]
    ]} />
  </div>     