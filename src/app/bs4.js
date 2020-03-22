import BS4 from './bs4.svelte';

const app = new BS4({
	target: document.getElementById('app'),
});

window.app = app;

export default app;