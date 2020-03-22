<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1 >onInit({` { note }`})</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({note}) => {
          console.log('summernote is launched', note);
        }}/>
      `}</pre>
        <SvelteSummernoteLite id="sample" onInit={({note}) => {
          console.log('summernote is launched', note);
        }}/>
  </div>               
         