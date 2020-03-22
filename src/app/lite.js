import Lite from './lite.svelte';

const app = new Lite({
	target: document.getElementById('app'),
});

window.app = app;

export default app;