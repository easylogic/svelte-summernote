<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 


function doRangeCollapseTrue() {
  noteInstance.summernote('getLastRange').collapse(true);
}

function doRangeCollapseFalse() {
  noteInstance.summernote('getLastRange').collapse();
}    


</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1 >collapse(isCollapseToStart: boolean = false)</h1>
        <p>select update visible range</p>
        <pre>{`
        const newRng = rng.collapse(true);   // to start rng  

        or 
        
        const newRng = rng.collapse();  // to end rng 
        `}
        </pre>        
        <button on:click={doRangeCollapseTrue}>range.collapse(true)</button>
        <button on:click={doRangeCollapseFalse}>range.collapse()</button>
  <SvelteSummernoteLite id="sample" 
      onInit={({ note } ) => {
        noteInstance = note; 
      }}

      onChange={() => {
        noteInstance.summernote('getLastRange').select()
      }}
  />
  </div>               
                                    