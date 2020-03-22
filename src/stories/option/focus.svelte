<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>focus</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" focus={true} />
      `}</pre>
        <SvelteSummernoteLite id="sample" focus={true} />
  </div>    
  