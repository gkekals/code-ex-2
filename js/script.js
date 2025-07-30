const navItems = document.querySelectorAll('.nav-list li');
const tabContents = document.querySelectorAll('.content_list li');

let i = 0;

activateTab(i);

function activateTab(q) {
    navItems[q].classList.add('on');
    tabContents[q].classList.add('active');
}

function clearTabs() {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('on');
        tabContents[i].classList.remove('active');
    }
}

navItems.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        clearTabs();
        activateTab(idx);
    });
});
