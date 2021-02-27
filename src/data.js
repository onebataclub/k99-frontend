import chicken from './images/game/chicken.png'
import keno from './images/game/keno.png'
import live_casino from './images/game/live_casino.png'
import poker from './images/game/poker.png'
import slot from './images/game/slot.png'
import sport from './images/game/sport.png'


import aba from './images/bank/aba.jpg'
import ac from './images/bank/ac.jpg'
import pipay from './images/bank/pipay.png'
import truemoney from './images/bank/truemoney.png'
import wing from './images/bank/wing.png'


import {
    setTranslations,
    setDefaultLanguage,
    setLanguageCookie,
    setLanguage,
    translate,
  } from 'react-switch-lang';
const bank = [
    {
        id:1,
        name:'aba',
        img: { aba }.aba,

    },
    {
        id:1,
        name:'ac',
        img: { ac }.ac,

    },
    {
        id:1,
        name:'pipay',
        img: { pipay }.pipay,

    },
    {
        id:1,
        name:'truemoney',
        img: { truemoney }.truemoney,

    },
    {
        id:1,
        name:'wing',
        img: { wing }.wing,

    }
]

const menu = [
    {
        id: 1,
        slug: '',
        name: 'ទំព័រដើម',
    },
    {
        id: 2,
        slug: 'sport',
        name: 'កីឡា',
    },
    {
        id: 3,
        slug: 'casino',
        name: 'កាស៊ីណូ',
    },
    {
        id: 4,
        slug: 'slot',
        name: 'ស្លត',
    },
    {
        id: 5,
        slug: 'loto',
        name: 'ឡូតូ',
    },
];


const game = [
    {
        id: 1,
        slug:'chicken',
        name: 'ប្រជល់មាន់',
        img: { chicken }.chicken,
    },
    {
        id: 2,
        slug: 'keno',
        name: 'គីណូ',
        img: { keno }.keno,
    },
    {
        id: 3,
        slug: 'live_casino',
        name: 'កាស៊ីណូផ្សាយផ្ទាល់',
        img: { live_casino }.live_casino,
    },
    {
        id: 4,
        slug: 'slot',
        name: 'ស្លត',
        img: { slot }.slot,
    },
    {
        id: 5,
        slug: 'sport',
        name: 'កីឡា',
        img: { sport }.sport,
    },
    {
        id: 6,
        slug: 'chicken',
        name: 'ជូកឺ',
        img: { chicken }.chicken,
    }
];
export { game, menu, bank };