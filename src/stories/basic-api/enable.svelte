<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doEnable () {

  if (noteInstance) {
    noteInstance.summernote('enable');
  }

}
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>Enable</h1>
        <p>If you want to enable editor again, call API with enable.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
          note.summernote('enable');
        }} />
      `}</pre>
        <button on:click={doEnable}>Enable summernote</button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
   