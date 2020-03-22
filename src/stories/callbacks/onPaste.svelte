<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
      <h1 >onPaste</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" 
          onPaste={(e: any) => {
            console.log('Called event paste', e);
          }}
        />
      `}</pre>
        <SvelteSummernoteLite id="sample" 
          onPaste={(e) => {
            console.log('Called event paste', e);
          }}
        />
  </div>               
               