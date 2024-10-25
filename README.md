# Gerador de Senhas Aleatórias em JavaScript

Este projeto contém uma função em JavaScript que gera senhas aleatórias de um comprimento especificado. As senhas geradas incluem letras maiúsculas, letras minúsculas, números e, ocasionalmente, caracteres especiais.

## Como funciona

A função `geradorSenhas(comp)` recebe um argumento `comp` que determina o comprimento da senha a ser gerada. A cada iteração, a função escolhe aleatoriamente entre:
1. Letras maiúsculas (A-Z)
2. Letras minúsculas (a-z)
3. Dígitos numéricos (0-9)

Além disso, há uma chance de adicionar um caractere especial a partir de uma lista definida (`!@#$%^&*()`), aumentando a segurança da senha gerada.

### Exemplo

```javascript
function geradorSenhas(comp) {
    let senha = '';
    let caracteresEspeciais = "!@#$%^&*()";
  
    for (let i = 0; i < comp; i++) {
        let tipo = Math.floor(Math.random() * 3);
  
        if (tipo === 0) {
            senha += String.fromCharCode(Math.floor(Math.random() * 26) + 65); // A-Z
        } else if (tipo === 1) {
            senha += String.fromCharCode(Math.floor(Math.random() * 26) + 97); // a-z
        } else if (tipo === 2) {
            senha += Math.floor(Math.random() * 10); // 0-9
        } else {
            senha += caracteresEspeciais[Math.floor(Math.random() * caracteresEspeciais.length)];
        }
    }
  
    return senha;
}

console.log(geradorSenhas(15)); // Exemplo de saída: "A1b2C3d4E5f6G7h8"
