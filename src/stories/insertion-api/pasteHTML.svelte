<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doPasteHTML () {

  if (noteInstance) {
    const htmlValue = '<span style="font-size:30px">Hello, world for 30px</span>'
    noteInstance.summernote('pasteHTML', htmlValue)
  }

}


</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>pasteHTML</h1>
        <p>Paste HTML string.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>')
        }} />                
      `}</pre>
        <button on:click={doPasteHTML}>pasteHTML {`<span style="font-size:30px">Hello, world for 30px</span>`} </button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
                              