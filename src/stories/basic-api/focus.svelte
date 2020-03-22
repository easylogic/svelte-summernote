<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doFocus () {

  if (noteInstance) {
    noteInstance.summernote('focus');
  }

}

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>Focus</h1>
        <p>Sets focus in current summernote</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note }: SummernoteCallbackInitProps ) => {
          note.summernote('focus')
        }} />      
      `}</pre>
        <button on:click={doFocus}>focus to summernote</button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
   