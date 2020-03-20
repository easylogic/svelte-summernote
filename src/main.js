import Lite from './app/lite.svelte';

const app = new Lite({
	target: document.body,
});

window.app = app;

export default app;