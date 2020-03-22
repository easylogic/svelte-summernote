<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>TabDisable</h1>
        <p>You can disable TAB/Shift+Tab intereaction with the tabDisable option. This will allow tabbing through fields in Forms.</p>
      <pre>{`
  <SvelteSummernoteLite id="sample" tabDisable={false}/>
      `}</pre>
  <SvelteSummernoteLite id="sample" tabDisable={false}/>
  </div>     