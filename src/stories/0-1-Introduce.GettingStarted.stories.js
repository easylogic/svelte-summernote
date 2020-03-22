import GettingStarted from './introduce/GettingStarted.svelte';

export default { title: 'introduce' }

export const withGettingStarted = () => ({
  Component: GettingStarted
});

withGettingStarted.story = {
  name: 'Getting Started'
}