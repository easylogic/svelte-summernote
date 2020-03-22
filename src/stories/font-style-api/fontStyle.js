import fontStyle from './fontStyle.svelte';

export const FontStyleCommand = () => {
  return {
    Component: fontStyle,
  }
}

FontStyleCommand.story = {
  name: 'italic,bold,underline,strikethrough',
}    