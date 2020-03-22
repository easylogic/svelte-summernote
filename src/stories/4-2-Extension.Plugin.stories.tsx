import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite';
import { withKnobs } from "@storybook/addon-knobs";

export { CustomPlugin } from './extensions/plugin';
export { InitializePlugin } from './extensions/plugin-initialize';
export { DestoryPlugin } from './extensions/plugin-destroy';
export { EventPlugin } from './extensions/plugin-event';
export { CommandPlugin } from './extensions/plugin-command';
export { ButtonPlugin } from './extensions/plugin-button';

export default {
  title: 'Extension/Plugin',
  component: SvelteSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};
