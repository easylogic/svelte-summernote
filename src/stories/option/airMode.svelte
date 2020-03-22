<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>AirMode</h1>
        <p>
          Air-mode give an interface without the Toolbar. To reveal popover Toolbar, select a text where you want to modify. Simply turn on airMode and just focus on text.
        </p>
      <pre>{`
  <SvelteSummernoteLite id="sample" airMode={true} />    
      `}</pre>
  <SvelteSummernoteLite id="sample" airMode={true} placeholder="write text" />    
  </div>    