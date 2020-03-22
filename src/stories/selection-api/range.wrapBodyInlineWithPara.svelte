<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 

function doWrapBodyInlineWithPara() {
  console.log(noteInstance.summernote('getLastRange').wrapBodyInlineWithPara())
}
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
    <h1 >wrapBodyInlineWithPara()</h1>
    <p>wrap inline nodes which children of body with paragraph</p>
    <pre>{`
      const newRng = rng.WrapBodyInlineWithPara()
    `}
    </pre>        

    <button on:click={doWrapBodyInlineWithPara}>wrapBodyInlineWithPara</button>
  <SvelteSummernoteLite id="sample" 
      onInit={({ note } ) => {
        noteInstance = note; 
      }}
  />
  </div>               
                                          