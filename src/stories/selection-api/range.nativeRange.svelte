<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 

function doNativeRange() {
  console.log(noteInstance.summernote('getLastRange').nativeRange())
}
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
  <h1 >nativeRange()</h1>
  <p>return native range instance at browser</p>

  <h2>refer to Range</h2>
  <p><a target="_range" href="https://developer.mozilla.org/en-US/docs/Web/API/Range">https://developer.mozilla.org/en-US/docs/Web/API/Range</a></p>

  <pre>{`
      const range = $note.summernote('getLastRange').nativeRange();
  `}
  </pre>        

  <button on:click={doNativeRange}>nativeRange</button>
  <SvelteSummernoteLite id="sample" 
      onInit={({ note } ) => {
        noteInstance = note; 
      }}
  />
  </div>               
                                          