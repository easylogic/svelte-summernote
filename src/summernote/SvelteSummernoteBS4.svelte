<script  context="module">
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'summernote/dist/summernote-bs4';
import 'summernote/dist/summernote-bs4.css';

import Summernote from '../component/Summernote';

export function createSummernoteButton (opt = {}) {
    return (context) => {
        let buttonProps = {
            container: opt.container || 'body',
            tooltip: opt.tooltip || 'sample',
        }

        if (opt.title && !opt.element ) {
            buttonProps.contents = opt.title;
            buttonProps.click = () => {
                if (opt && opt.onClick) {
                    opt.onClick(context);
                }
            }
            return context.ui.button(buttonProps).render();
        } else {
            const button = context.ui.button(buttonProps)
            const el = button.render();   // return button as jquery object
    
            if (opt.element) {
                const props = {context, ...opt.props};
                const SvelteComponent = opt.element;
                
                new SvelteComponent({
                    target: el[0],
                    props,
                });
            }
    
        
            return el;
        }
    }
}


</script>

<Summernote {...$$props} />