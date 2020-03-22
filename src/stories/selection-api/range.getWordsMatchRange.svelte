<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 

function doGetWordsMatchRange() {
  const rng = noteInstance.summernote('getLastRange').getWordsMatchRange(/@[a-z ]+/i)
  if (rng) {
    console.log(rng.toString())
  } else {
    console.log('text could not found')
  }
}
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
  <h1 >getWordsMatchRange(regex)</h1>
  <p>returns range for words before cursor that match with a Regex</p>
  <pre>{`
      // range : 'hi @Peter Pan'
      const rng = $note.summernote('getLastRange');

      const newRng = rng.getWordsMatchRange(/@[a-z ]+/i)
      if (newRnage) {
        console.log(newRng.toString())  // '@Peter Pan' 
      }
      
  `}
  </pre>        

  <button on:click={doGetWordsMatchRange}>getWordsMatchRange</button>
  <SvelteSummernoteLite id="sample" 
      onInit={({ note } ) => {
        noteInstance = note; 
      }}
  />
  </div>               
                                          
   