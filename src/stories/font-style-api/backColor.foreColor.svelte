
<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doBackColor () {

  if (noteInstance) {
    noteInstance.summernote('backColor', 'yellow')
  }

}

function doForeColor () {

  if (noteInstance) {
    noteInstance.summernote('foreColor', 'red')
  }

}    


</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>backColor, foreColor</h1>
        <p>Set the Background or Foreground color.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('backColor', 'yellow')  
          note.summernote('foreColor', 'red')  
        }} />                
      `}</pre>
        <button on:click={doBackColor}>backColor yellow </button>
        <button on:click={doForeColor}>foreColor red </button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
      