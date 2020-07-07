import navigation from './navigation';

import scroll from './scroll';

import scrollAnimation from './scrollAnimation';

import carousel from './carousel';

import validation from './validation';

(function() {

    const scripts = [
        navigation,
        scroll,
        scrollAnimation,
        carousel,
        validation
    ];
    
    scripts.forEach(script => script.init());
})();