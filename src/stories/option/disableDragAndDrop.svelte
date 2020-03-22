<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>disableDragAndDrop</h1>
        <p>You can disable drag and drop with the disableDragAndDrop option.</p>
      <pre>{`
  <SvelteSummernoteLite id="sample" disableDragAndDrop={true} />
      `}</pre>
  <SvelteSummernoteLite id="sample" disableDragAndDrop={true} />

  </div>    
    