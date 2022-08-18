window.onload = () => {
    const sub = document.querySelectorAll('.lista-item');
    sub.forEach((item) => {
        item.querySelector('.item-link').addEventListener('click', () => {
            if (item.classList.contains('teste')) {
                item.classList.remove('teste');
            }
            if (item.querySelector('.item-submenu') != (null || undefined)) {
                if ((item.querySelector('.item-submenu').style.maxHeight != '250px')) {
                    item.querySelector('.item-submenu').style.maxHeight = '250px';
                } else {
                    item.querySelector('.item-submenu').style.maxHeight = '0px';
                }
            }

            sub.forEach((outro) => {
                if (item != outro) {
                    outro.classList.add('teste');
                }
                if (item.querySelector('.item-submenu') != (null || undefined)) {
                    if (item.querySelector('.item-submenu').style.maxHeight != '250px') {
                        outro.classList.remove('teste');
                    }
                } else {
                    outro.classList.remove('teste');
                }
                if ((outro.querySelector('.item-submenu') != (null || undefined)) && (item != outro)) {
                    outro.querySelector('.item-submenu').style.maxHeight = '0px';
                }
            })
        })
    })
}