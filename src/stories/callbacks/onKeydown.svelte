<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1 >onKeydown</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" 
            onKeydown={(e) => {
              console.log('Key is downed:', e.keyCode);
            }}
        />
      `}</pre>
        <SvelteSummernoteLite id="sample" 
            onKeydown={(e) => {
              console.log('Key is downed:', e.keyCode);
            }}
        />
  </div>               
               