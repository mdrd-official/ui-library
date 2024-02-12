import { h } from 'snabbdom';

export const H1 = (props: { value: number }) => {
  return h('h1', {}, `Count: ${props.value}`);
};