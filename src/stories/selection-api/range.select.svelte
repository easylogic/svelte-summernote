<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 

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
  rng.select()
`}</pre>
  <SvelteSummernoteLite id="sample" 
      onInit={({ note } ) => {
        noteInstance = note; 
      }}

      onChange={() => {
        noteInstance.summernote('getLastRange').select()
      }}
  />
  </div>               
                                    