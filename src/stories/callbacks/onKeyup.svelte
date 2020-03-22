<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1 >onKeyup</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" 
          onKeyup={(e) => {
            console.log('Key is released:', e.keyCode);
          }}
        />
      `}</pre>
        <SvelteSummernoteLite id="sample" 
          onKeyup={(e) => {
            console.log('Key is released:', e.keyCode);
          }}
        />
  </div>               
               