import { h } from 'snabbdom';
import { mount, unmount } from './lifecycle';
import { Button, H1 } from '../components';
import { updateState } from './reactivity';

export const Template = (state: number, props: any) => {
  mount();

  const vnode = h('div', [
    H1({ value: state }),
    Button({ label: 'Add', onClick: () => updateState(state + 1) }),
  ]);

  return vnode;
};