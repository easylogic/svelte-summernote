<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>blockquoteBreakingLevel</h1>
        <p>
        You can set blockquote breaking level with blockquoteBreakingLevel option.</p>

        <p>Each configurable breaking level means:</p>

        <p>0 - No break, the new paragraph remains inside the quote.</p>
        <p>1 - Break the first blockquote in the ancestors list.</p>
        <p>2 - Break all blockquotes, so that the new paragraph is not quoted. (default)</p>
      <pre>{`
  <SvelteSummernoteLite id="sample" blockquoteBreakingLevel={2} />    
      `}</pre>
  <SvelteSummernoteLite id="sample" blockquoteBreakingLevel={2} />    
  </div>    
    