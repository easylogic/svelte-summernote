<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1 >onEnter</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" 
          onEnter={(e) => {
            console.log('Enter/Return key pressed, shift is ', e.shiftKey);
          }}
        />
      `}</pre>
        <SvelteSummernoteLite id="sample" 
          onEnter={(e) => {
            console.log('Enter/Return key pressed, shift is ', e.shiftKey);
          }}
        />
  </div>               
         