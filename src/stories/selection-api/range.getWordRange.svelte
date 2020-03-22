<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 

function doGetWordRange() {
  console.log('before cursor', noteInstance.summernote('getLastRange').getWordRange().toString())
  console.log('after cursor', noteInstance.summernote('getLastRange').getWordRange(true).toString())
}
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
  <h1 >getWordRange(findAfter: boolean = false)</h1>
  <p>returns range for word before(or after) cursor</p>
  <pre>{`
    const newRng = rng.getWordRange();   // before cursor 

    // or 
    
    const newRng = rng.getWordRange(true);   // after cursor 
  `}
  </pre>        

  <button on:click={doGetWordRange}>getWordRange</button>
  <SvelteSummernoteLite id="sample" 
      onInit={({ note } ) => {
        noteInstance = note; 
      }}
  />
  </div>               
                                          