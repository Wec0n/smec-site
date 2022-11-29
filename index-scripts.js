window.onload = () => {
    (() => {
        const resumoNoticias = document.querySelectorAll('section a p').forEach((item) => {
            const tamanhoDescricao = item.innerHTML.length;
    
            if (tamanhoDescricao > 205) {
                let descricaoFormatada = item.innerHTML.substring(0, 205);
                item.innerHTML = descricaoFormatada.concat('(...)');
            }  
        })
    })();
}