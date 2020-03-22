<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>Shortcuts</h1>
        <p>You can disable custom shortcuts with the shortcuts option.</p>
      <pre>{`
  <SvelteSummernoteLite id="sample" shortcuts={false} />
      `}</pre>
  <SvelteSummernoteLite id="sample" shortcuts={false} />
  </div>         