function geradorSenhas(comp) {
    let senha = '';
    let caracteresEspeciais = "!@#$%^&*()";
  
    for (let i = 0; i < comp; i++) {
      let tipo = Math.floor(Math.random() * 3); 
  
      if (tipo === 0) {
        senha += String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
      } else if (tipo === 1) {
        senha += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      } else if (tipo === 2) {
        senha += Math.floor(Math.random() * 10); 
      } else {
        senha += caracteresEspeciais[Math.floor(Math.random() * caracteresEspeciais.length)]
      }
    }
  
    return senha;
  }
  
  console.log(geradorSenhas(15)); 
  