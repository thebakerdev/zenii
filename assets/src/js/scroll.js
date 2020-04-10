import SmoothScroll from 'smooth-scroll';

import sal from 'sal.js';

import eventbus from './eventbus';

const scroll = (function(){

    const nav_menu_button = document.getElementById('nav_menu_button');

    const nav_menu = document.getElementById('nav_menu');

    const init = () => {

        // initialize smooth scrolling
        const scroll = new SmoothScroll('a[href*="#"]', {
            speed: 800,
            speedAsDuration: true,
            easing: 'easeOutQuart'
        });

        document.addEventListener('scrollStart', () => eventbus.fire('menu_click'), false);

        // initialize sal.js
        sal();
    }

    return {
        init
    }

})();

export default scroll;