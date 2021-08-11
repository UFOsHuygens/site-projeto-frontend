window.onload=function() {
    document.getElementsByTagName("h1")[0].innerHTML = 'kmdskmdksmdk';
    document.getElementById('titulo2').style.color="red";
    document.querySelectorAll("p")[1].style.fontWeight="bold";
    document.querySelector('ul li.orange').style.color="orange";

    // variaveis div c1 //

    var mensagem, p1, div1, status;
    let total;
    total = parseInt("120");
    status = false;
    mensagem = "Declarando Variáveis";
    p1 = document.querySelector('div.c1 p');
    div1 = document.querySelector("div.c1 div");

    p1.innerHTML = mensagem;
    div1.innerHTML = `<span>A variável total é do tipo ${typeof(total)}</span>`;
    div1.innerHTML += `<span>A variável mensagem é do tipo ${typeof(mensagem)}</span>`;
    div1.innerHTML += `<span>A variável status é do tipo ${typeof(status)}</span>`;
    div1.innerHTML += `<span>A variável div1 é do tipo ${typeof(div1)}</span>`;

    // variaveis div c2 //

    var p2, n1, n2, div2, operation, res, resultado;
    p2 = document.querySelector("div.c2 p");
    div2 = document.querySelector("div.c2 div");
    resultado = document.querySelector("#resultado");
    n1 = 0;
    n2 = 0;
    p2.innerHTML = `Event Click`;
    div2.innerHTML = `<span>Calculadora</span>`;
    operation = "somar";

    // Switch Case //

    function calculadora(op, n1, n2) {
        switch (op) {
            case "somar":
                res = parseInt(n1) + parseInt(n2);
                break;
            case "dividir":
                res = parseInt(n1) / parseInt(n2);
                break;
            case "subtrair":
                res = parseInt(n1) - parseInt(n2);
                break;
            case "multiplicar":
                res = parseInt(n1) * parseInt(n2);
                break;
        }
    }
    //
    var campo1, campo2;
    campo1 = document.querySelector("input[name=n1]");
    campo2 = document.querySelector("input[name=n2]");
    document.querySelector("#btn1").onclick = function() {
        calculadora("somar", campo1.value, campo2.value);
        resultado.innerHTML = `${res} <br />`;
        div2.style.color = "black";
        div2.innerHTML = `<span> A soma de ${campo1.value} mais ${campo2.value} é ${res} </span>`;
        if (campo1.value == 0 || campo2.value == 0) {
            div2.style.color = "red";
            div2.innerHTML = `Nenhum valor inserido!`;
        }
    }
    document.querySelector("#btn2").onclick = function() {
        calculadora("subtrair", campo1.value, campo2.value);
        resultado.innerHTML = `${res} <br />`;
        div2.style.color = "black";
        div2.innerHTML = `<span> A soma de ${campo1.value} menor ${campo2.value} é ${res} </span>`;
        if (campo1.value == 0 || campo2.value == 0) {
            div2.style.color = "red";
            div2.innerHTML = `Nenhum valor inserido!`;
        }
    }
    document.querySelector("#btn3").onclick = function() {
        calculadora("dividir", campo1.value, campo2.value);
        resultado.innerHTML = `${res.toFixed(2)} <br />`;
        div2.style.color = "black";
        div2.innerHTML = `<span> A soma de ${campo1.value} dividido ${campo2.value} é ${res} </span>`;
        if (campo1.value == 0 || campo2.value == 0) {
            div2.style.color = "red";
            div2.innerHTML = `Nenhum valor inserido!`;
        }
    }
    document.querySelector("#btn4").onclick = function() {
        calculadora("multiplicar", campo1.value, campo2.value);
        resultado.innerHTML = `${res} <br />`;
        div2.style.color = "black";
        div2.innerHTML = `<span> A soma de ${campo1.value} vezes ${campo2.value} é ${res} </span>`;
        if (campo1.value == 0 || campo2.value == 0) {
            div2.style.color = "red";
            div2.innerHTML = `Nenhum valor inserido!`;
        }
    }

    // Sorteando Backgrounds //

    var sorteiaBackground, headerBg;
    sorteiaBackground = parseInt(Math.random() * 6);
    headerBg = document.querySelector('header');


    switch (sorteiaBackground) {
        case 1:
            headerBg.style.backgroundImage = "url('imagens/planoDeFundo/plano1.jpg')";
            break;
        case 2:
            headerBg.style.backgroundImage = "url('imagens/planoDeFundo/plano2.jpg')";
            break;
        case 3:
            headerBg.style.backgroundImage = "url('imagens/planoDeFundo/plano3.jpg')";
            break;
        case 4:
            headerBg.style.backgroundImage = "url('imagens/planoDeFundo/plano4.jpg')";
            break;
        case 5:
            headerBg.style.backgroundImage = "url('imagens/planoDeFundo/plano5.jpg')";
            break;
        case 6:
            headerBg.style.backgroundImage = "url('imagens/planoDeFundo/plano6.jpg')";
            break;
    }

    // GALERIA DE FOTOS //
    var galeria, tituloGaleria;
    galeria = document.querySelector('#galeria');
    tituloGaleria = document.querySelector("div.c3 p")

    // FUNCTION GALERIA //
    function galeriaFotos(categoria, quantidade, tipo) {
        tituloGaleria.textContent = categoria;
        for (var i = 1; i < (quantidade + 1); i++) {
        imagem = new Image();
        var url;
        i < 10 ? url = `imagens/galeriaPref/${tipo}0${i}.jpg` : url = `imagens/galeriaPref/${tipo}${i}.jpg`;
        imagem.src = url;
        imagem.style.width = '33%';
        galeria.appendChild(imagem);
        }
    }
 //   galeriaFotos("Flores", 9, "Flowers");
    // Controle de botões
    var btAnimais, btFlores, btNatureza;
    var btArray;
    btAnimais = document.querySelectorAll("#animais");
    btFlores = document.querySelectorAll("#flores");
    btNatureza = document.querySelectorAll("#natureza");
    btArray = [
        [btAnimais, "Animais", 12, "animals"], // 0
        [btFlores, "Flores", 11, "flowers"],   // 1
        [btNatureza, "Natureza", 20, "nature"] // 2
        // 0   1   2   3
    ]

    btArray.forEach(function(obj, index) {
        obj[0].onclick=function() {
            galeria.textContent = "";
        }
        galeriaFotos(obj[1], obj[2], obj[3])
    });

    //LOCALSTORAGE

    localStorage.dataDeHoje = "25/05/2021";
    var cnome, cemail, btconf;
    cnome = document.querySelector("input[name=nome]");
    cemail = document.querySelector("input[name=email]");
    btconf = document.querySelector("#btConfirma");

  //  btconf.onclick = function() {
  //      localStorage.setItem("nome", cnome.value);
  //      localStorage.setItem("email", cemail.value);
  //  }

    if (localStorage.nome) {
        document.querySelector("#bemvindo").textContent = "Olá " + localStorage.getItem("nome")
    }

    //// CANVAS HTML5

    var c1, ctx, img1;
    c1 = document.querySelector("canvas");
    ctx = c1.getContext("2d");
    img1 = new Image();
    img1.src = "imagens/misc/success.png";
    console.log(img1)

    img1.onload = function() {
        ctx.drawImage(img1, 10, 10, 237, 261);
        ctx.drawImage(img1, 100, 100, 237, 261);
        ctx.fillStyle = "rgba(0, 0, 255, 0.5)"

        // arc (x, y, raio, angulo inicial, angulo final)
        ctx.beginPath();
        ctx.arc(270, 200, 50, 0, Math.PI*2);
        ctx.fill();
       // ctx.stroke();
        //
        var grad = ctx.createLinearGradient(0, 0, -20, 200, 0) // x y, largura, altura
        grad.addColorStop(0, "red");
        grad.addColorStop(1, "khaki");
      //  grad.addColorStop(1, "lightBlue");
        //
        ctx.fillStyle = grad;
        ctx.lineWidth = "8";
        // rect (x, y, largura, altura)
        ctx.fillRect(400, 100, 150, 250);
        ctx.strokeRect(400, 100, 150, 250);
        ctx.fillStyle = "brown";
        ctx.font = "18px Georgia";
        ctx.fillText("Canvas with JS", 408, 160)
    }
};