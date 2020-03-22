<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doFullScreen () {
  if (noteInstance) {
    noteInstance.summernote('fullscreen.toggle');
  }
}

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>FullScreen.toggle</h1>
        <p>You can toggle editable/codable view by API.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('fullscreen.toggle');
        }} />      
      `}</pre>
        <button on:click={doFullScreen}>Fullscreen </button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
   