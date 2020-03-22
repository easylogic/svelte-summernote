<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>dialogsInBody</h1>
        <p>Dialogs can be placed in body, not within Summernote. If you’re using Summernote within a modal dialog, please set this option as true.</p>

      <pre>{`
  <SvelteSummernoteLite id="sample" dialogsInBody={true} />
      `}</pre>
  <SvelteSummernoteLite id="sample" dialogsInBody={true} />
  </div>    
    