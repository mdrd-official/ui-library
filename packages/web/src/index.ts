import { h, patch } from 'snabbdom';
import { mount } from '../../library/src/index';
import { Template } from '../../library/src/index';


const vnode = h('div', [Template(0, {})]);

patch(document.body, vnode);