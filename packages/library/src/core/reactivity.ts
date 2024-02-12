import { h, patch } from 'snabbdom';
import { Button } from '../components/Button';
import { H1 } from '../components/H1';
let state = 0;

export const updateState = (newState: number) => {
  state = newState;
  render();
};

const render = () => {
  const vnode = h('div', [
    H1({ value: state }),
    Button({ label: 'Add', onClick: () => updateState(state + 1) }),
  ]);

  patch(document.body, vnode);
};

export const reactivityMount = () => {
  console.log('Component mounted');
  render();
};