import Lite from './introduce/Lite.svelte';
import BS4 from './introduce/Bootstrap4.svelte';

export default { title: 'introduce' }

export const withLite = () => ({
  Component: Lite
});

withLite.story = {
  name: 'Lite'
}


export const withBS4 = () => ({
  Component: BS4
});

withBS4.story = {
  name: 'Bootstrap4'
}