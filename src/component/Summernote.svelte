<script>
import { onMount, onDestroy } from 'svelte';
import jQuery from 'jquery';

export let id; 
export let value; 

onMount(() => {

    const {id, value, opt =  {}, ...props} = $$props
    const {
        initInvoke,
        onInit,
        onBlur,
        onBlurCodeview,
        onChange,
        onEnter,
        onFocus,
        onImageUpload,
        onKeydown,
        onKeyup,
        onMousedown,
        onMouseup,
        onPaste,        
        ...initProps
    } = props;    


    const callbacks = {
        onInit: (context) => {
            if (onInit) onInit(context);
            if (initInvoke) {
                initInvoke((...args) => {
                    return context.note.summernote(...args);
                })
            }
        },
        onBlur,
        onBlurCodeview,
        onChange,
        onEnter,
        onFocus,
        onImageUpload,
        onKeydown,
        onKeyup,
        onMousedown,
        onMouseup,
        onPaste,              
    }    

    const dialogsInBody = typeof props.dialogsInBody === 'undefined' ? true : props.dialogsInBody;

    jQuery(`#${id}`).summernote({
        ...initProps, callbacks, ...opt, dialogsInBody
    });
})

onDestroy(() => {
    jQuery(`#${id}`).summernote('destroy');
})

</script>

<div class="svelte-summernote">
    <div {id} class="svelte-summernote-container">{value || ''}</div>
</div>