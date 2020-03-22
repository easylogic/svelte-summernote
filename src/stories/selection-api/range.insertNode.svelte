<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 

function doInsertNode() {
  console.log(noteInstance.summernote('getLastRange').insertNode(document.createElement('div')))
}
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1 >insertNode(node)</h1>
        <p>insert node at current cursor</p>
        <pre>{`
          const newRng = rng.insertNode(document.createElement('div'))
        `}
        </pre>        
  
        <button on:click={doInsertNode}>insertNode</button>
  <SvelteSummernoteLite id="sample" 
      onInit={({ note } ) => {
        noteInstance = note; 
      }}
  />
  </div>               
                                          