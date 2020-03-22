<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doFormatPara () {
    if (noteInstance) {
      noteInstance.summernote('formatPara') 
    }
}

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>formatPara</h1>
        <p>change to paragraph</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('formatPara');
        }} />                
      `}</pre>
        <button on:click={doFormatPara}>formatPara</button>
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          noteInstance = note;
        }} />        
  </div>               
                        