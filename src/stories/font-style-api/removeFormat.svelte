<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doRemoveFormat () {
  if (noteInstance) {
    noteInstance.summernote('removeFormat')
  }
}
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>removeFormat</h1>
        <p>Clean a style.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('removeFormat');
        }} />                
      `}</pre>
        <button on:click={doRemoveFormat}>removeFormat</button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
                  