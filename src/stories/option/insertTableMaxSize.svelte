<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>insertTableMaxSize: {`{ row: 1, col: 20 }`}</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" insertTableMaxSize={{row: 2, col: 20}} />
      `}</pre>
        <SvelteSummernoteLite id="sample" insertTableMaxSize={{row: 2, col: 20}} />
  </div>       