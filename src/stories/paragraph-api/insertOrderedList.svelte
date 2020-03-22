<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doInsertOrderedList () {
    if (noteInstance) {
      noteInstance.summernote('insertOrderedList') 
    }
}

function doInsertUnorderedList () {
  if (noteInstance) {
    noteInstance.summernote('insertUnorderedList') 
  }
}    


</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>insertOrderedList, insertUnorderedList</h1>
        <p>Toggle ordered list or unordered list</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('insertOrderedList');
          note.summernote('insertUnorderedList');
        }} />                
      `}</pre>
        <button on:click={doInsertOrderedList}>insertOrderedList</button>
        <button on:click={doInsertUnorderedList}>insertUnorderedList</button>
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          noteInstance = note;
        }} />        
  </div>               
                        