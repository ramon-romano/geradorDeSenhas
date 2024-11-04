document.getElementById('button').addEventListener('click', () => {
    const comprimento = parseInt(document.getElementById('comprimento').value); 
    if (comprimento < 1 || comprimento > 100 || isNaN(comprimento)) {
        alert('Por favor, insira um comprimento entre 1 e 100.'); 
        return;
    }
    
    const senhaGerada = geradorSenhas(comprimento);
    document.getElementById('senha').textContent = senhaGerada; 

    document.getElementById('copyButton').style.display = 'inline';
});

document.getElementById('copyButton').addEventListener('click', () => {
    const senha = document.getElementById('senha').textContent; 
    navigator.clipboard.writeText(senha).then(() => {
        alert('Senha copiada para a área de transferência!');
    }).catch(err => {
        alert('Falha ao copiar a senha: ', err);
    });
});

function geradorSenhas(comp) {
    let senha = '';
    let caracteresEspeciais = "!@#$%^&*()";

    for (let i = 0; i < comp; i++) {
        let tipo = Math.floor(Math.random() * 4); 

        if (tipo === 0) {
            senha += String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
        } else if (tipo === 1) {
            senha += String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
        } else if (tipo === 2) {
            senha += Math.floor(Math.random() * 10); 
        } else {
            senha += caracteresEspeciais[Math.floor(Math.random() * caracteresEspeciais.length)]; 
        }
    }

    return senha;
}
