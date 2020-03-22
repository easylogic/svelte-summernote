<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 

function doDeleteContents() {
  console.log(noteInstance.summernote('getLastRange').deleteContents())
}
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
    <h1 >deleteContents()</h1>
    <p>delete contents on range</p>
    <pre>{`
      const newRng = rng.deleteContents()
    `}
    </pre>        

    <button on:click={doDeleteContents}>deleteContents</button>
  <SvelteSummernoteLite id="sample" 
      onInit={({ note } ) => {
        noteInstance = note; 
      }}
  />
  </div>               
                                       