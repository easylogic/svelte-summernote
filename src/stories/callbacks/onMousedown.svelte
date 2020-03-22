<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1 >onMousedown</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" 
            onMousedown={(e: any) => {
              console.log('mousedown event is fired', e );
            }}
        />
      `}</pre>
        <SvelteSummernoteLite id="sample" 
            onMousedown={(e) => {
              console.log('mousedown event is fired', e );
            }}
        />
  </div>               
               