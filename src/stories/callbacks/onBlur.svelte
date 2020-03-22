
<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1 >onBlur</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" 
          onBlur={(e) => {
              console.log('Editable area loses focus', e);
          }}
        />
      `}</pre>
        <SvelteSummernoteLite id="sample" 
          onBlur={(e) => {
              console.log('Editable area loses focus', e);
          }}
        />
  </div>               
         