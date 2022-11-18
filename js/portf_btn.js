const btnContainer = document.querySelector('.btn');
// console.log(btnContainer);

btnContainer.addEventListener('click', onBtnClick);

function onBtnClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }
    const currentActiveBtn = document.querySelector('.current-button');
    console.log(currentActiveBtn)

    if (currentActiveBtn) {
        currentActiveBtn.classList.remove('current-button');
    }
//.................... Ще один метод if......................
    // currentActiveBtn?.classList.remove('current-button');

    const nextActiveBtn = evt.target;
    nextActiveBtn.classList.add('current-button');
    }

