<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doSuperScript () {
  if (noteInstance) {
    noteInstance.summernote('superscript')
  }

}

function doSubScript () {
  if (noteInstance) {
    noteInstance.summernote('subscript')
  }

}

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>superscript,subscript</h1>
        <p>Set superscript or subscript.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('superscript');
          note.summernote('subscript');
        }} />                
      `}</pre>
        <button on:click={doSuperScript}>superscript</button>
        <button on:click={doSubScript}>subscript </button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
         