<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 

function doPasteHTML() {
  console.log(noteInstance.summernote('getLastRange').pasteHTML('<div>summernote</div>'))
}
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1 >pasteHTML(markup)</h1>
        <div>insert html at current cursor</div>
        <pre>{`
          const nodes = rng.pasteHTML('<div>summernote</div>')
        `}
        </pre>        
  
        <button on:click={doPasteHTML}>pasteHTML</button>
  <SvelteSummernoteLite id="sample" 
      onInit={({ note } ) => {
        noteInstance = note; 
      }}
  />
  </div>               
                                          