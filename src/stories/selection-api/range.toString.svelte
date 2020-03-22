<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 

function doToString() {
  console.log(noteInstance.summernote('getLastRange').toString())
}

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
  <h1 >toString()</h1>
  <p>returns text in range</p>
  <pre>{`
    const text = rng.toString()
  `}
  </pre>        

  <button on:click={doToString}>toString</button>
  <SvelteSummernoteLite id="sample" 
      onInit={({ note } ) => {
        noteInstance = note; 
      }}
  />
  </div>               
                                       