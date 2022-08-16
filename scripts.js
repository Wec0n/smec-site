window.onload = function () {
    const sub = document.querySelectorAll('.lista-item');
    sub.forEach((item) => {
        item.querySelector('.item-link').addEventListener('click', () => {
            if (item.querySelector('.item-submenu') != (null || undefined)) {
                if ((item.querySelector('.item-submenu').style.maxHeight != '250px')) {
                    item.querySelector('.item-submenu').style.maxHeight = '250px';
                } else {
                    item.querySelector('.item-submenu').style.maxHeight = '0px';
                }
            }

            sub.forEach((outro) => {
                if (outro.querySelector('.item-submenu') != (null || undefined)) {
                    if (item != outro) {
                        outro.querySelector('.item-submenu').style.maxHeight = '0px';
                    }
                }
            })
        })
    })
}