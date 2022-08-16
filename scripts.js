window.onload = () => {
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

// function _0x184b(_0x5829fc, _0x121697) { const _0x4e2223 = _0x4e22(); return _0x184b = function (_0x184b44, _0xdf8c09) { _0x184b44 = _0x184b44 - 0xd8; let _0x2a3dae = _0x4e2223[_0x184b44]; return _0x2a3dae; }, _0x184b(_0x5829fc, _0x121697); } (function (_0xe33205, _0x2157af) { const _0x52c767 = _0x184b, _0x2e36e4 = _0xe33205(); while (!![]) { try { const _0x3850d8 = parseInt(_0x52c767(0xe4)) / 0x1 * (parseInt(_0x52c767(0xda)) / 0x2) + -parseInt(_0x52c767(0xe1)) / 0x3 + -parseInt(_0x52c767(0xe2)) / 0x4 * (-parseInt(_0x52c767(0xd9)) / 0x5) + parseInt(_0x52c767(0xe8)) / 0x6 * (parseInt(_0x52c767(0xea)) / 0x7) + parseInt(_0x52c767(0xec)) / 0x8 * (parseInt(_0x52c767(0xe5)) / 0x9) + -parseInt(_0x52c767(0xe3)) / 0xa + -parseInt(_0x52c767(0xd8)) / 0xb; if (_0x3850d8 === _0x2157af) break; else _0x2e36e4['push'](_0x2e36e4['shift']()); } catch (_0x487ead) { _0x2e36e4['push'](_0x2e36e4['shift']()); } } }(_0x4e22, 0xb5f92), window['onload'] = function () { const _0x510cd3 = _0x184b, _0x48ec5c = document[_0x510cd3(0xdf)]('.lista-item'); _0x48ec5c[_0x510cd3(0xe6)](_0x11a674 => { const _0x4df701 = _0x510cd3; _0x11a674[_0x4df701(0xdd)](_0x4df701(0xde))[_0x4df701(0xe7)](_0x4df701(0xeb), () => { const _0x3671c1 = _0x4df701; _0x11a674[_0x3671c1(0xdd)]('.item-submenu') != (null || undefined) && (_0x11a674[_0x3671c1(0xdd)](_0x3671c1(0xdb))['style'][_0x3671c1(0xe0)] != '250px' ? _0x11a674['querySelector'](_0x3671c1(0xdb))[_0x3671c1(0xdc)][_0x3671c1(0xe0)] = _0x3671c1(0xe9) : _0x11a674[_0x3671c1(0xdd)](_0x3671c1(0xdb))['style']['maxHeight'] = _0x3671c1(0xed)), _0x48ec5c[_0x3671c1(0xe6)](_0x59add3 => { const _0x59cb22 = _0x3671c1; _0x59add3[_0x59cb22(0xdd)]('.item-submenu') != (null || undefined) && (_0x11a674 != _0x59add3 && (_0x59add3['querySelector'](_0x59cb22(0xdb))[_0x59cb22(0xdc)][_0x59cb22(0xe0)] = _0x59cb22(0xed))); }); }); }); }); function _0x4e22() { const _0x1ff276 = ['style', 'querySelector', '.item-link', 'querySelectorAll', 'maxHeight', '967755QFothZ', '644nbKHMl', '1842970AdhccO', '157413vxnTba', '11916kVvHEd', 'forEach', 'addEventListener', '90102LJktos', '250px', '273uGrAHX', 'click', '7648OlnCnH', '0px', '29001885ivYpyO', '19275jdGHoF', '18IttvtB', '.item-submenu']; _0x4e22 = function () { return _0x1ff276; }; return _0x4e22(); }