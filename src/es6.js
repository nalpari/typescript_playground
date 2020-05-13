export default function render1(name) {
    let result = `
        <div>Hi~ ${name}</div>
    `;

    return result;
};

export function render2(name) {
    let result = `
        <div>Hi~ ${name}</div>
    `;

    return result;
}

export function render3(name) {
    let result = `
        <div>Hi~ ${name}</div>
    `;

    return result;
}

import render1 from './Render';
import {render2, render3} from './Render';

import $ from 'jquery';