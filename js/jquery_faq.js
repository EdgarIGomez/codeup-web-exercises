$("a").click(function(){
    $("dd").toggleClass("invisible")
})

$("dt").click(function(){
    $(this).toggleClass("highlight")
})

$("#bg-yellow").click(function(){
    $("ul").each(function (){
        $(this).children().last().toggleClass("highlight")
    })
    })

$("h3").click(function(){
    $(this).next().children().toggleClass("makeBold")
})

$("li").click(function(){
    $(this).parent().children().first().toggleClass("fontBlue")
})

$("#buttonOne").click(function(){
    if($("#first").hasClass("vanGogh")){
        if($("#second").hasClass("oilPainting")){
            $(this).parent().children().first().toggleClass("vanGogh")
            $(this).parent().children().first().toggleClass("oilPainting")
            $(this).parent().next().children().first().toggleClass("oilPainting")
            $(this).parent().next().children().first().toggleClass("vanGogh")
        } else {
            $(this).parent().children().first().toggleClass("vanGogh")
            $(this).parent().children().first().toggleClass("skyBear")
            $(this).parent().next().children().first().toggleClass("skyBear")
            $(this).parent().next().children().first().toggleClass("vanGogh")
        }

    }else if($("#first").hasClass("oilPainting")) {
        if($("#second").hasClass("vanGogh")){
            $(this).parent().children().first().toggleClass("oilPainting")
            $(this).parent().children().first().toggleClass("vanGogh")
            $(this).parent().next().children().first().toggleClass("vanGogh")
            $(this).parent().next().children().first().toggleClass("oilPainting")
        } else {
            $(this).parent().children().first().toggleClass("oilPainting")
            $(this).parent().children().first().toggleClass("skyBear")
            $(this).parent().next().children().first().toggleClass("skyBear")
            $(this).parent().next().children().first().toggleClass("oilPainting")
        }
    }else {
        if($("#second").hasClass("vanGogh")){
            $(this).parent().children().first().toggleClass("skyBear")
            $(this).parent().children().first().toggleClass("vanGogh")
            $(this).parent().next().children().first().toggleClass("vanGogh")
            $(this).parent().next().children().first().toggleClass("skyBear")
        }else{
            $(this).parent().children().first().toggleClass("skyBear")
            $(this).parent().children().first().toggleClass("oilPainting")
            $(this).parent().next().children().first().toggleClass("oilPainting")
            $(this).parent().next().children().first().toggleClass("skyBear")
        }
    }
});

$("#buttonThree").click(function(){
    if($("#third").hasClass("vanGogh")){
        if($("#second").hasClass("oilPainting")){
            $(this).parent().children().first().toggleClass("vanGogh")
            $(this).parent().children().first().toggleClass("oilPainting")
            $(this).parent().prev().children().first().toggleClass("oilPainting")
            $(this).parent().prev().children().first().toggleClass("vanGogh")
        } else {
            $(this).parent().children().first().toggleClass("vanGogh")
            $(this).parent().children().first().toggleClass("skyBear")
            $(this).parent().prev().children().first().toggleClass("skyBear")
            $(this).parent().prev().children().first().toggleClass("vanGogh")
        }

    }else if($("#third").hasClass("oilPainting")) {
        if($("#second").hasClass("vanGogh")){
            $(this).parent().children().first().toggleClass("oilPainting")
            $(this).parent().children().first().toggleClass("vanGogh")
            $(this).parent().prev().children().first().toggleClass("vanGogh")
            $(this).parent().prev().children().first().toggleClass("oilPainting")
        } else {
            $(this).parent().children().first().toggleClass("oilPainting")
            $(this).parent().children().first().toggleClass("skyBear")
            $(this).parent().prev().children().first().toggleClass("skyBear")
            $(this).parent().prev().children().first().toggleClass("oilPainting")
        }
    }else {
        if($("#second").hasClass("vanGogh")){
            $(this).parent().children().first().toggleClass("skyBear")
            $(this).parent().children().first().toggleClass("vanGogh")
            $(this).parent().prev().children().first().toggleClass("vanGogh")
            $(this).parent().prev().children().first().toggleClass("skyBear")
        }else{
            $(this).parent().children().first().toggleClass("skyBear")
            $(this).parent().children().first().toggleClass("oilPainting")
            $(this).parent().prev().children().first().toggleClass("oilPainting")
            $(this).parent().prev().children().first().toggleClass("skyBear")
        }
    }
});



$("#buttonTwo").click(function (){
    let random = Math.round(Math.random())
    if(random === 0){
        if($("#second").hasClass("vanGogh")){
            if($("#first").hasClass("oilPainting")){
                $(this).parent().children().first().toggleClass("vanGogh")
                $(this).parent().children().first().toggleClass("oilPainting")
                $(this).parent().prev().children().first().toggleClass("oilPainting")
                $(this).parent().prev().children().first().toggleClass("vanGogh")
            } else {
                $(this).parent().children().first().toggleClass("vanGogh")
                $(this).parent().children().first().toggleClass("skyBear")
                $(this).parent().prev().children().first().toggleClass("skyBear")
                $(this).parent().prev().children().first().toggleClass("vanGogh")
            }

        }else if($("#second").hasClass("oilPainting")) {
            if($("#first").hasClass("vanGogh")){
                $(this).parent().children().first().toggleClass("oilPainting")
                $(this).parent().children().first().toggleClass("vanGogh")
                $(this).parent().prev().children().first().toggleClass("vanGogh")
                $(this).parent().prev().children().first().toggleClass("oilPainting")
            } else {
                $(this).parent().children().first().toggleClass("oilPainting")
                $(this).parent().children().first().toggleClass("skyBear")
                $(this).parent().prev().children().first().toggleClass("skyBear")
                $(this).parent().prev().children().first().toggleClass("oilPainting")
            }
        }else {
            if($("#first").hasClass("vanGogh")){
                $(this).parent().children().first().toggleClass("skyBear")
                $(this).parent().children().first().toggleClass("vanGogh")
                $(this).parent().prev().children().first().toggleClass("vanGogh")
                $(this).parent().prev().children().first().toggleClass("skyBear")
            }else{
                $(this).parent().children().first().toggleClass("skyBear")
                $(this).parent().children().first().toggleClass("oilPainting")
                $(this).parent().prev().children().first().toggleClass("oilPainting")
                $(this).parent().prev().children().first().toggleClass("skyBear")
            }
        }
    } else {
        if($("#second").hasClass("vanGogh")){
            if($("#third").hasClass("oilPainting")){
                $(this).parent().children().first().toggleClass("vanGogh")
                $(this).parent().children().first().toggleClass("oilPainting")
                $(this).parent().next().children().first().toggleClass("oilPainting")
                $(this).parent().next().children().first().toggleClass("vanGogh")
            } else {
                $(this).parent().children().first().toggleClass("vanGogh")
                $(this).parent().children().first().toggleClass("skyBear")
                $(this).parent().next().children().first().toggleClass("skyBear")
                $(this).parent().next().children().first().toggleClass("vanGogh")
            }

        }else if($("#second").hasClass("oilPainting")) {
            if($("#third").hasClass("vanGogh")){
                $(this).parent().children().first().toggleClass("oilPainting")
                $(this).parent().children().first().toggleClass("vanGogh")
                $(this).parent().next().children().first().toggleClass("vanGogh")
                $(this).parent().next().children().first().toggleClass("oilPainting")
            } else {
                $(this).parent().children().first().toggleClass("oilPainting")
                $(this).parent().children().first().toggleClass("skyBear")
                $(this).parent().next().children().first().toggleClass("skyBear")
                $(this).parent().next().children().first().toggleClass("oilPainting")
            }
        }else {
            if($("#third").hasClass("vanGogh")){
                $(this).parent().children().first().toggleClass("skyBear")
                $(this).parent().children().first().toggleClass("vanGogh")
                $(this).parent().next().children().first().toggleClass("vanGogh")
                $(this).parent().next().children().first().toggleClass("skyBear")
            }else{
                $(this).parent().children().first().toggleClass("skyBear")
                $(this).parent().children().first().toggleClass("oilPainting")
                $(this).parent().next().children().first().toggleClass("oilPainting")
                $(this).parent().next().children().first().toggleClass("skyBear")
            }
        }
    }
});