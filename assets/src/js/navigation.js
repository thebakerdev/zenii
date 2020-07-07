const navigation = (function() {

    const nav_menu_button = document.getElementById('nav_menu_button');

    const nav_menu = document.getElementById('nav_menu');

    const nav_menu_items = document.querySelectorAll('.nav__menu li a');

    const closeMenu = () => {
        
        if (nav_menu_button.classList.contains('nav__menu-button--active')) {
            nav_menu_button.classList.remove('nav__menu-button--active');
            nav_menu.classList.remove('nav__menu--active');
            document.body.classList.remove('disable-scroll');
        }
    }

    const init = () => {
    
        nav_menu_button.addEventListener('click', () => {
            nav_menu.classList.toggle('nav__menu--active');
            nav_menu_button.classList.toggle('nav__menu-button--active');
            document.body.classList.toggle('disable-scroll');
        });


        nav_menu_items.forEach(menu_item => {
            menu_item.addEventListener('click', () => {
                closeMenu();
            });
        });
    }

    return {
        init
    }
})();

export default navigation;