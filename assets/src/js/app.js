import navigation from './navigation';

import scroll from './scroll';

import carousel from './carousel';

import validation from './validation';

(function() {

    const scripts = [
        navigation,
        scroll,
        carousel,
        validation
    ];
    
    scripts.forEach(script => script.init());
})();