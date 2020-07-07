const settings = (function(){

    const isDisabled = (attribute) => {

        const extras = document.getElementById('extra_settings');
        
        if (extras.getAttribute(`data-disable-${attribute}`) == '0' || extras.getAttribute(`data-disable-${attribute}`) == null) {
            return false;
        }

        return true;
    }

    return {
        isDisabled
    }
})();

export default settings;