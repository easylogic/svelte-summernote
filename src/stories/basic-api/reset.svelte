<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doReset () {

  if (noteInstance) {
    noteInstance.summernote('reset')
  }

}

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>isEmpty</h1>
        <p>Returns whether editor content is empty or not.
            The editing area needs {`<p><br></p>`} for focus, even if the editor content is empty. 
            So Summernote supports this method for helping to check if editor content is empty.
        </p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
          note.summernote('reset')
        }} />      
      `}</pre>
        <button on:click={doReset}>reset </button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
      