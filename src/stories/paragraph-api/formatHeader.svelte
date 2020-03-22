<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doFormatHeader (header) {

  return () => {
    if (noteInstance) {
      noteInstance.summernote('format' + header) 
    }
  }

}

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>formatH1 ~ formatH6</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('formatH1');
          note.summernote('formatH2');
          note.summernote('formatH3');
          note.summernote('formatH4');
          note.summernote('formatH5');
          note.summernote('formatH6');
        }} />                
      `}</pre>
        <button on:click={doFormatHeader('H1')}>formatH1</button>
        <button on:click={doFormatHeader('H2')}>formatH2</button>
        <button on:click={doFormatHeader('H3')}>formatH3</button>
        <button on:click={doFormatHeader('H4')}>formatH4</button>
        <button on:click={doFormatHeader('H5')}>formatH5</button>
        <button on:click={doFormatHeader('H6')}>formatH6</button>
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          noteInstance = note;
        }} />        
  </div>               
                     