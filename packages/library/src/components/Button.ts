import { h } from 'snabbdom';

export const Button = (props: { label: string; onClick: () => void }) => {
  return h('button', { on: { click: props.onClick } }, props.label);
};