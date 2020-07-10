const settings = (function(){

    const isDisabled = (attribute) => {

        const extras = document.getElementById('extra_settings');
        
        if (extras.getAttribute(`data-disable-${attribute}`) == '1') {
            return true;
        }

        return false;
    }

    return {
        isDisabled
    }
})();

export default settings;