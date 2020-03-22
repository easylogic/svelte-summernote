<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1 >onFocus</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" 
          onFocus={() => {
            console.log('Editable area is focused');
          }}
        />
      `}</pre>
        <SvelteSummernoteLite id="sample" 
          onFocus={() => {
            console.log('Editable area is focused');
          }}
        />
  </div>               
            