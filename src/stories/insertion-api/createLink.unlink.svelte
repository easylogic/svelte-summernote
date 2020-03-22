<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doCreateLink () {

  if (noteInstance) {
    noteInstance.summernote('createLink', {
      text: "This is the Summernote's Official Site",
      url: 'http://summernote.org',
      isNewWindow: true
    })
  }

}

function doUnlink () {

  if (noteInstance) {
    noteInstance.summernote('unlink')
  }

}   
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>createLink, unlink</h1>
        <p>Create link and unlink.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('createLink', {
            text: "This is the Summernote's Official Site",
            url: 'http://summernote.org',
            isNewWindow: true
          });
          
          note.summernote('unlink')  
        }} />                
      `}</pre>
        <button on:click={doCreateLink}>createLink https://summernote.org </button>
        <button on:click={doUnlink}>unlink</button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
                     