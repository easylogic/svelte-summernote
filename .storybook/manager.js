import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
    theme: create({
        base: 'light',
        brandTitle: 'Svelte Summernote',
        brandUrl: 'https://svelte-summernote.easylogic.studio'
    })
})