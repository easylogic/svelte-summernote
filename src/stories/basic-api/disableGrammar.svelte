<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>Disable Grammarly Browser Addon</h1>
        <p>You can disable the Grammarly Browser Addon (currently researching other Grammar Addons for their disabling options) by using the disableGrammar option.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" disableGrammar={false} />
      `}</pre>
        <SvelteSummernoteLite id="sample" disableGrammar={false} />
  </div>                