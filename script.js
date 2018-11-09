
window.addEventListener('DOMContentLoaded', function () {

    //variables
    var d = new Date();
    var currentDate = d.getDate();
    var items = document.querySelectorAll('.item');


    //handler
    function clickHandler(event) {
        if (this.dataset.open === 'false') {
            this.dataset.open = 'true';
            this.classList.add('open');
        } else {
            this.dataset.open = 'false';
            this.classList.remove('open');
        }
    }

    //attach click events
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', clickHandler);
    }
});
