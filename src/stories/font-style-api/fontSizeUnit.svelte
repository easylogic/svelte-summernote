<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doFontSizeUnit () {
  if (noteInstance) {
    noteInstance.summernote('fontSizeUnit', 'pt')
  }
}
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>fontSizeUnit</h1>
        <p>Set font size unit. - defaults to px</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('fontSizeUnit', 'pt');
        }} />                
      `}</pre>
        <button on:click={doFontSizeUnit}>fontSizeUnit pt</button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
               