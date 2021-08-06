const tipBtns = document.querySelectorAll('.amountBtn');


for (let tipBtn of tipBtns) {
    tipBtn.addEventListener('click', function (event) {
        this.classList.toggle('amtBtnClicked');
    });
}


