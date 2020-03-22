import Lite from './introduce/Lite.svelte';

export default { title: 'introduce' }

export const withLite = () => ({
  Component: Lite
});

withLite.story = {
  name: 'Lite'
}