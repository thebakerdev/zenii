import sal from 'sal.js';

import settings from './settings';

const scrollAnimation = (function() {

    const createOverrideStyle = () => {
        
        let style = document.createElement('style');

        style.innerHTML = `
            [data-sal|='fade'] {
                opacity: 1;
            }
    
            [data-sal|='slide'],
            [data-sal|='zoom'] {
                opacity: 1;
                transform: none;
            }
    
            [data-sal|='flip'] {
                transform: none;
            }
        `;

        document.head.appendChild(style);
    }

    const init = () => {

        if (!settings.isDisabled('scroll-animation')) {
            // initialize sal.js
            sal();
        } else {
            createOverrideStyle();
        }
    }

    return {
        init
    }
})();

export default scrollAnimation;