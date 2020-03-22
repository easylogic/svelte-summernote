 <script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>fontSizeUnits</h1>
        <p>You can set the available font size units with the fontSizeUnits option.</p>
      <pre>{`
  <SvelteSummernoteLite id="sample" fontSizeUnits={['px', 'pt']} toolbar={[
      ['f', ['fontsize', 'fontsizeunit']]
    ]} />
      `}</pre>
  <SvelteSummernoteLite id="sample" fontSizeUnits={['px', 'pt']} toolbar={[
      ['f', ['fontsize', 'fontsizeunit']]
    ]} />
  </div>   