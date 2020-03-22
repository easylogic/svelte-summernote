<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
  function doLineHeight () {
    if (noteInstance) {
      noteInstance.summernote('lineHeight', 1.2)
    }

  }

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>LineHeight</h1>
        <p>Set line height.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('lineHeight', 1.2);
        }} />                
      `}</pre>
        <button on:click={doLineHeight}>LineHeight 1.2</button>
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          noteInstance = note;
        }} />        
  </div>               
                          
   