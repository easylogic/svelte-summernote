<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>fontNames</h1>
        <p>You can define fontNames items with the fontNames option.</p>
      <pre>{`
  <SvelteSummernoteLite id="sample" fontNames={['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New']}/>
      `}</pre>
  <SvelteSummernoteLite id="sample" fontNames={['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New']}/>
  </div>  