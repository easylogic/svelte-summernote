<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1 >onBlurCodeview</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" 
            onBlurCodeview={() => {
              console.log('Codeview area loses focus');
            }}
        />
      `}</pre>
        <SvelteSummernoteLite id="sample" 
            onBlurCodeview={() => {
              console.log('Codeview area loses focus');
            }}
        />
  </div>               
            