<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>Disable Spellchecking</h1>
        <p>You can disable Spellchecking in the Editing area with the spellCheck option.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" spellCheck={true} />
      `}</pre>
        <SvelteSummernoteLite id="sample" spellCheck={true} />
  </div>               
      