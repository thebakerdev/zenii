import sal from 'sal.js';

import settings from './settings';

const scrollAnimation = (function() {

    const init = () => {

        if (!settings.isDisabled('scroll-animation')) {
            // initialize sal.js
            sal();
        }
    }

    return {
        init
    }
})();

export default scrollAnimation;