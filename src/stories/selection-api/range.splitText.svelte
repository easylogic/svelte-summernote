<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 

  function doSplitText() {
    console.log(noteInstance.summernote('getLastRange').splitText())
  }

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
  <h1 >select()</h1>
  <p>select update visible range</p>
  <pre>{`
        const textRng = rng.splitText()
`}</pre>
        <button on:click={doSplitText}>splitText</button>
  <SvelteSummernoteLite id="sample" 
      onInit={({ note } ) => {
        noteInstance = note; 
      }}
  />
  </div>               
                                       