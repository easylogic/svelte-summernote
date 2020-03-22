<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doUndo () {
  if (noteInstance) {
    noteInstance.summernote('undo');
  }
}

function doRedo () {
  if (noteInstance) {
    noteInstance.summernote('redo');
  }
}

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>Focus</h1>
        <p>Sets focus in current summernote</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('undo')  
          note.summernote('redo')  
        }} />         
      `}</pre>
        <button on:click={doUndo}>undo </button>
        <button on:click={doRedo}>redo </button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
      