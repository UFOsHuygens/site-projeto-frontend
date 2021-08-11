$().ready(function(){
    $("#lista li").addClass("estilo1");
    $("#lista li").eq(0).css({"color": "green"});

    // Indentificando um valor de texto da lista
    if ($("#lista li").eq(6).html("Cavaquinho")) {
    //    alert("ok")
    }

    // Consumindo a coleção HTML
    $("#lista li").each(function(){
        console.log($(this).text());
        if ($(this).text() == "Violino") {

            // Se verdade aplica o estilo
            $(this).css({
                "cursos": "pointer",
                "text-decoration": "underline"
            })

            // Click para website
            $(this).click(function(){
                window.open(`https://www.submarino.com.br/busca/${$(this).text()}`);
            })
        }
    })

    $("#img p").css({
        "cursos": "pointer",
        "text-decoration": "underline"
    });
    $("#img1 img").hide();
    // Mostra/Oculta a Imagem
    $("#img1 p").click(function(){
        $("#img1 img").eq(0).fadeToggle(2000, function(){
            $("#img1 img").eq(1).fadeToggle();
        });
    })

    // Animação JQUERY //

    var animaP = $("#anima p");
    animaP.addClass("noCap");
    var animaImg = $("#anima img");
    animaImg.eq(1).css({"left": "-40%", "top": "25%"});
    animaP.eq(1).css({"left":"5%", "bottom": "-20%"});
    animaP.eq(0).animate({
        left: "10%",
        top: "10%",
        fontSize: "300%"
    }, "slow", function(){
        animaImg.eq(1).animate({
            left: "15%",
        }, 2500, function(){
            animaP.eq(1).animate({
                bottom: "20%",
                fontSize: "150%"
            }, function(){
                animaImg.eq(0).animate({
                    left: "70%",
                    top: "30%"
                }, 1500);
            });
        });
    });



})

// eq : element query