<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>styleTags</h1>
        <p>You can set your own selection of styles with the styleTags option.</p>
        <p>The tags can be specified just by tag name (as with p or pre or h1-h6 above). It is also possible to customize the style in more detail by providing an object looking like:</p>
<pre>{`

string 

or 

{
    tag : 'tag name ',
    title : 'dropdown item title',
    style : 'dropdown item style',
    className : 'applyed element class name and dropdown item className',
    value : 'Value to apply when clicked'
}
`}
</pre>

      <pre>{`
  <SvelteSummernoteLite id="sample" styleTags={[ 'p', 'h1', 'h2' ]} />
      `}</pre>
  <SvelteSummernoteLite id="sample" styleTags={[ 'p', 'h1', 'h2' ]} />
  </div>