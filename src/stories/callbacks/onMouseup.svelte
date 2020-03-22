<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1 >onMouseup</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" 
          onMouseup={(e) => {
            console.log('mouseup event is fired', e);
          }}
        />
      `}</pre>
        <SvelteSummernoteLite id="sample" 
          onMouseup={(e) => {
            console.log('mouseup event is fired', e);
          }}
        />
  </div>               
               