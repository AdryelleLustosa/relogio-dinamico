    
    
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    var resultado = document.getElementById("resultado")
    var relogio = document.getElementById("relogioFoto")
    var tudo = document.querySelector("body")
    
    //agora.getHours()
    
  
if (hora >= 5 && hora <12) {
    tudo.style.backgroundColor = "#cfc129";
    relogio.style.backgroundImage = "url('/imagens/Manhã.jpg')"
    relogio.style.backgroundSize = "cover";
    resultado.innerHTML = `Agora são ${hora}:${minuto} da manhã`

        } else if (hora >= 12 && hora <18) {

            tudo.style.backgroundColor = "#c98e26";
            relogio.style.backgroundImage = "url('/imagens/tarde.webp')"
            relogio.style.backgroundSize = "cover";
            resultado.innerHTML = `Agora são ${hora}:${minuto} da tarde`
            
       
        }
        else if (hora >= 18 && hora < 24) { 
            tudo.style.backgroundColor = "#414535";
            relogio.style.backgroundImage = "url('/imagens/noite.webp')"
            relogio.style.backgroundSize = "cover";
            resultado.innerHTML = `Agora são ${hora}:${minuto} da noite`

        } else if (hora >=1 && hora <=4) {
            tudo.style.backgroundColor = "#414535";
            relogio.style.backgroundImage = "url('/imagens/noite.webp')"
            relogio.style.backgroundSize = "cover";
            resultado.innerHTML = `Agora são ${hora}:${minuto} da madrugada`
        }