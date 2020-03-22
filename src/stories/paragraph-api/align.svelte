<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doAlign (command) {
  return () => {
    if (noteInstance) {
      noteInstance.summernote(command) 
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
        <h1>justify left, right and more</h1>
        <p>Set the alignment of a Paragraph.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('justifyLeft');
          note.summernote('justifyRight');
          note.summernote('justifyCenter');
          note.summernote('justifyFull');
        }} />                
      `}</pre>
        <button on:click={doAlign('justifyLeft')}>left</button>
        <button on:click={doAlign('justifyRight')}>right</button>
        <button on:click={doAlign('justifyCenter')}>center</button>
        <button on:click={doAlign('justifyFull')}>full</button>
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          noteInstance = note;
        }} />        
  </div>               
                        