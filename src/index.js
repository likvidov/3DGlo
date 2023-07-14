import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validator from './modules/validator';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';

timer('14 jule 2023');
menu();
modal();
validator();
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots');
calc();