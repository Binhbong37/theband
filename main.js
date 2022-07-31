const btn = document.querySelector('.menu_icon');
const headerClick = document.getElementById('header');
const menuItems = document.querySelectorAll('.list .list_items a[href*="#"]');

const heightHeader = headerClick.clientHeight;
btn.addEventListener('click', () => {
    const isCloseHeader = headerClick.clientHeight === heightHeader;
    if (isCloseHeader) {
        return (headerClick.style.height = 'auto');
    }
    headerClick.style.height = null;
});

// menuItems.forEach((item) => {
//     item.onclick = function () {
//         console.log(item);
//     };
// });

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
