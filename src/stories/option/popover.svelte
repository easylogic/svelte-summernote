<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>Popover</h1>
        <a href="?path=/docs/api-feature-list--page"> &gt;&gt; Feature List</a>

  <pre>{`
  // default default 
  popover: {
    image: [
      ['image', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
      ['float', ['floatLeft', 'floatRight', 'floatNone']],
      ['remove', ['removeMedia']]
    ],
    link: [
      ['link', ['linkDialogShow', 'unlink']]
    ],
    table: [
      ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
      ['delete', ['deleteRow', 'deleteCol', 'deleteTable']],
    ],
    air: [
      ['color', ['color']],
      ['font', ['bold', 'underline', 'clear']],
      ['para', ['ul', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture']]
    ]
  }
           
  `}</pre>

      <pre>{`
        <SvelteSummernoteLite id="sample2" popover={{
          air: [
            ['color', ['color']],
            ['font', ['bold', 'underline', 'clear']]
          ]
        }} />

      `}</pre>
      <SvelteSummernoteLite id="sample2" popover={{
        air: [
          ['color', ['color']],
          ['font', ['bold', 'underline', 'clear']]
        ]
      }} />

  </div>            