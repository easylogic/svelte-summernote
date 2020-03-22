<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 

function doGetClientRects() {
  console.log(noteInstance.summernote('getLastRange').getClientRects())
}
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
  <h1 >getClientRects(): DOMRectList</h1>
  <p>returns a list of DOMRect objects representing the area of the screen occupied by the range.</p>

  <h2>refer to Range.getClientRects()</h2>
  <p>https://developer.mozilla.org/en-US/docs/Web/API/Range/getClientRects</p>

  <pre>{`
      const rect = $note.summernote('getLastRange').getClientRects();
  `}
  </pre>        

  <button on:click={doGetClientRects}>getClientRects</button>
  <SvelteSummernoteLite id="sample" 
      onInit={({ note } ) => {
        noteInstance = note; 
      }}
  />
  </div>               
                                       