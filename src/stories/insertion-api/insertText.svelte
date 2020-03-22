<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doInsertText () {

  if (noteInstance) {
    noteInstance.summernote('insertText', 'Hello, World')
  }

}

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
 <h1>insertNode</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('insertText','Hello, World')
        }} />                
      `}</pre>
        <button on:click={doInsertText}>insertText Hello, World </button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
                           