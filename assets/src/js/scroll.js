import SmoothScroll from 'smooth-scroll';

import settings from './settings';

const scroll = (function(){

    const init = () => {

        if (!settings.isDisabled('smooth-scrolling')) {
            // initialize smooth scrolling
            const scroll = new SmoothScroll('a[href*="#"]', {
                speed: 800,
                speedAsDuration: true,
                easing: 'easeOutQuart'
            });
        }
    }

    return {
        init
    }

})();

export default scroll;