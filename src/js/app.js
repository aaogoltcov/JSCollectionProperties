'use strict'

import orderByProps from './sort'

const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
}

console.log(orderByProps(obj, ["name", "level"]))

const newObj = {
    name: 'мечник',
    health: 10,
    level: 2,
    defence: 40,
    attack: 80,
}

console.log(orderByProps(newObj, ["name", "level"]))



