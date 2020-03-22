<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>No Toolbar</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample2" toolbar={false} />
      `}</pre>
        <SvelteSummernoteLite id="sample2" toolbar={false} />
  </div>       