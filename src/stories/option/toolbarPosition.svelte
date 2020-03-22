<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1> Toolbar Position - top, bottom</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample2" toolbarPosition="bottom" />
      `}</pre>
        <SvelteSummernoteLite id="sample2" toolbarPosition="bottom" />
  </div>           