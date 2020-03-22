<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doFontSize () {
  if (noteInstance) {
    noteInstance.summernote('fontSize', 30)
  }
}
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>fontSize</h1>
        <p>Set font size.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('fontSize', 30);
        }} />                
      `}</pre>
        <button on:click={doFontSize}>fontSize 30px</button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
            