
const ITEM = '[data-showflex="container"]',
    STATECLASS = 'show';

function showAllItems() {
    document.querySelectorAll(ITEM).forEach((item) => item.classList.add(STATECLASS));
}
function hideAllItems() {
    document.querySelectorAll(ITEM).forEach((item) => item.classList.remove(STATECLASS));
}

