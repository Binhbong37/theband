const btn = document.querySelector('.menu_icon');
const headerClick = document.getElementById('header');
const menuItems = document.querySelectorAll('.list .list_items a[href*="#"]');

// get btn ticket
const btnBuy = document.querySelectorAll('.js-buy-ticket');
const modalOut = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close');
const modalContainer = document.querySelector('.modal_container');

const heightHeader = headerClick.clientHeight;
btn.addEventListener('click', () => {
    const isCloseHeader = headerClick.clientHeight === heightHeader;
    if (isCloseHeader) {
        return (headerClick.style.height = 'auto');
    }
    headerClick.style.height = null;
});

for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    const isNextE =
        menuItem.nextElementSibling &&
        menuItem.nextElementSibling.classList.contains('sub_nav');

    menuItem.onclick = function (e) {
        if (!isNextE) {
            headerClick.style.height = null;
        } else {
            e.preventDefault();
        }
    };
}

// buy Tickets

btnBuy.forEach((btn) => {
    btn.onclick = function (e) {
        e.preventDefault();
        modalOut.classList.add('open');
    };
});

closeModal.onclick = function () {
    modalOut.classList.remove('open');
};

modalOut.onclick = function () {
    modalOut.classList.remove('open');
};

modalContainer.onclick = function (e) {
    e.stopPropagation();
};
