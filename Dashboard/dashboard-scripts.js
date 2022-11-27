window.onload = () => { // O CÓDIGO SÓ VAI EXECUTAR QUANDO TODA A PÁGINA FOR CARREGADA.
    (() => {
        const sub = document.querySelectorAll('.lista-item'); // SELECIONA TODOS OS "LI" QUE CONTENHAM A CLASSE ".lista-item".
        sub.forEach((item) => { // PERCORRE TODOS OS "LI" QUE CONTENHAM A CLASSE ".lista-item".
            item.addEventListener('click', () => { // AO CLICAR EM UM "LI", EXECUTA OS SEGUINTES CÓDIGOS:
                // SE O ITEM CLICADO CONTÉM OPACIDADE, ESTA É REMOVIDA, POIS O ITEM CLICADO É O FOCO .
                if (item.classList.contains('menu-opacidade')) {
                    item.classList.remove('menu-opacidade');
                }
                // VERIFICA SE UM ELEMENTO ESTÁ ABERTO. SE ESTÁ, FECHA-O.
                if (item.querySelector('.item-submenu') != (null || undefined)) { // A VERIFICAÇÃO DE O FILHO DO ITEM SER NULO OU UNDEFINED É PELO FATO DE ALGUNS "LI" NÃO TEREM OUTRAS LISTAS COMO FILHAS, OU SEJA, SÃO ELEMENTOS SEM SUBMENU.
                    if ((item.querySelector('.item-submenu').style.maxHeight != '250px')) {
                        item.querySelector('.item-submenu').style.maxHeight = '250px';
                    } else {
                        item.querySelector('.item-submenu').style.maxHeight = '0px';
                    }
                }
    
                sub.forEach((outro) => { // SELECIONA OS ITENS QUE NÃO O QUE FOI CLICADO
                    // ADICIONA OPACIDADE AOS ITENS DO MENU QUE NÃO SÃO O FOCO
                    if (item != outro) {
                        outro.classList.add('menu-opacidade');
                    }
                    if (item.querySelector('.item-submenu') != (null || undefined)) { // MESMA EXPLICAÇÃO ACIMA
                        if (item.querySelector('.item-submenu').style.maxHeight != '250px') {
                            outro.classList.remove('menu-opacidade');
                        }
                    } else {
                        outro.classList.remove('menu-opacidade');
                    }
    
                    // ESCONDE O MENU QUE NÃO É O FOCO
                    if ((outro.querySelector('.item-submenu') != (null || undefined)) && (item != outro)) {
                        outro.querySelector('.item-submenu').style.maxHeight = '0px';
                    }
                });
            });
        });
    })();

    // FUNÇÃO QUE FAZ A REQUISIÇÃO ASSÍNCRONA DO ARQUIVO (SÓ FUNCIONA, POR ENQUANTO, PARA O USUÁRIO).
    // FALTA IMPLEMENTAR PARA OS OUTROS SETORES (PEGAR A PARTE ANTERIOR COM O NOME DO MENU PAI).
    (() => {
        const clicado = document.querySelectorAll(".subitem-link").forEach((elemento) => {
            elemento.addEventListener('click', () => {
                const final = elemento.innerHTML.toLowerCase();
                const arquivoNome = 'tela-trabalho-usuario-' + final + '.html';
                const caminhoTelaTrabalho = fetch(arquivoNome);
                caminhoTelaTrabalho.then(r => r.text()).then(body => {
                    const conteudo = document.querySelector('.tela-trabalho');
                    conteudo.innerHTML = body;
                });
            })
        })
    })();

    // (() => {
    //     let btn = null;
    //     document.querySelectorAll('a').forEach((itemDoMenu) => {
    //         if (itemDoMenu.innerHTML == 'Cadastro') {
    //             btn = itemDoMenu;
    //         }
    //     });
    //     btn.addEventListener('click', () => {
    //         const caminhoTelaTrabalho = fetch('tela-trabalho-usuario-cadastro.html');
    //         caminhoTelaTrabalho.then(r => r.text()).then(body => {
    //             const conteudo = document.querySelector('.tela-trabalho');
    //             conteudo.innerHTML = body;
    //         });
    //     });
    // })();

    // (() => {
    //     let btn = null;
    //     document.querySelectorAll('a').forEach((itemDoMenu) => {
    //         if (itemDoMenu.innerHTML == 'Listar') {
    //             btn = itemDoMenu;
    //         }
    //     });
    //     btn.addEventListener('click', () => {
    //         const caminhoTelaTrabalho = fetch('tela-trabalho-usuario-cadastro.html');
    //         caminhoTelaTrabalho.then(r => r.text()).then(body => {
    //             const conteudo = document.querySelector('.tela-trabalho');
    //             conteudo.innerHTML = body;
    //         });
    //     });
    // })();

    //REALIZAÇÃO DE TESTES
}