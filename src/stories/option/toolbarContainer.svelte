<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>toolbarContainer</h1>
      <pre>{`
          <SvelteSummernoteLite id="sample2" toolbarContainer="#other-container" />
      `}</pre>
      <SvelteSummernoteLite id="sample2" toolbarContainer="#other-container" />
      <div id="other-container"></div>          
  </div>         