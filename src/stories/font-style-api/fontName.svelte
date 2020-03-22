<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doFontName () {
  if (noteInstance) {
    noteInstance.summernote('fontName', 'Arial')
  }

}


</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>fontName</h1>
        <p>Set font family.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('fontName', 'Arial');
        }} />                
      `}</pre>
        <button on:click={doFontName}>fontName Arial</button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
         