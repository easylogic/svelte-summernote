<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doItalic () {
  if (noteInstance) {
    noteInstance.summernote('italic')
  }

}

function doBold () {
  if (noteInstance) {
    noteInstance.summernote('bold')
  }

}

function doUnderline () {
  if (noteInstance) {
    noteInstance.summernote('underline')
  }

}

function doStrikeThrough () {
  if (noteInstance) {
    noteInstance.summernote('strikethrough')
  }

}    


</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>bold, italic, underline, strikethrough</h1>
        <p>Set font style.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('bold');
          note.summernote('italic');
          note.summernote('underline');
          note.summernote('strikethrough');
        }} />                
      `}</pre>
        <button on:click={doBold}>bold</button>
        <button on:click={doItalic}>italic </button>
        <button on:click={doUnderline}>underline </button>
        <button on:click={doStrikeThrough}>strikethrough</button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
      