<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doDisable () {

  if (noteInstance) {
    noteInstance.summernote('disable');
  }

}


</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>disable</h1>
        <p>If you want to disable editor again, call API with disable.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
          note.summernote('disable');
        }} />
      `}</pre>
        <button on:click={doDisable}>disable summernote</button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>             