<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>toolbar</h1>
        <a href="?path=/docs/api-feature-list--page"> &gt;&gt; Feature List</a>        
      <pre>{`
        <SvelteSummernoteLite id="sample2" toolbar={[
            ['group',['fontsize', 'color']]
        ]} />
      `}</pre>
        <SvelteSummernoteLite id="sample2" toolbar={[
            ['group',['fontsize', 'color']]
        ]} />
  </div>       