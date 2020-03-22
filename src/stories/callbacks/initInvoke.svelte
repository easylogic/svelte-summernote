<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1 >initInvoke</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" initInvoke={invoke => invoke('insertText', 'aaaa')} />
      `}</pre>
        <SvelteSummernoteLite id="sample" initInvoke={invoke => invoke('insertText', 'aaaa')} />
  </div>               
            