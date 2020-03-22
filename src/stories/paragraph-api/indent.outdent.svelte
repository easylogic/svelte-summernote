<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doIndent () {

  if (noteInstance) {
    noteInstance.summernote('indent')
  }

}

function doOutdent () {

  if (noteInstance) {
    noteInstance.summernote('outdent')
  }

}    

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>indent, outdent</h1>
        <p>Indent or Outdent on current paragraph.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('indent')  
          note.summernote('outdent')  
        }} />                
      `}</pre>
        <button on:click={doIndent}>indent </button>
        <button on:click={doOutdent}>outdent</button>      
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          noteInstance = note;
        }} />        
  </div>               
                        