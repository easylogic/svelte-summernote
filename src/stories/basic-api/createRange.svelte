<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doCreateRange () {

  if (noteInstance) {
    const range = noteInstance.summernote('createRange');
    console.log(range);
  }

}

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>createRange</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
          note.summernote('codeview.toggle');
        }} />
      `}</pre>
        <button on:click={doCreateRange}>create range</button>      
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>          