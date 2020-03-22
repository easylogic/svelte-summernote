<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doInsertParagraph () {
    if (noteInstance) {
      noteInstance.summernote('insertParagraph') 
    }
}

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>insertParagraph</h1>
        <p>Insert a paragraph</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('insertParagraph');
        }} />                
      `}</pre>
        <button on:click={doInsertParagraph}>insertParagraph</button>
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          noteInstance = note;
        }} />        
  </div>               
                        