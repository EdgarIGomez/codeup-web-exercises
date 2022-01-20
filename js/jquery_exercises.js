// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });

let heading = $("#heading")
let pOne = $("#p-one")
let divOne = $("#div-one")
let listItemOne = $("#item-one")
let ps = $("p")
let listItems = $("li")




//Part 1
// $("#heading").ready(function(){
//     alert($("#heading").text())
// })

// $("#div-one").ready(function(){
//     alert($("#div-one").text())
// });

// $("#item-one").ready(function(){
//     alert($("#div-one").text())
// });
//Part 2
// $(".codeUp").css("border", "1px solid red");

// $("#p-one").removeClass("codeUp")
//Part 3
// $("li").css("font-size", "20px")

// $("h1").css("background-color", "yellow");
//
// $("p").css("background-color", "yellow");
//
// $("li").css("background-color", "yellow");

// $("h1").ready(function(){
//     alert($("h1").text());
// })
// //Part 4
// $("h1, p, li").css("background-color", "yellow");

heading.click(function(){
    $(this).css("background-color", "red")
})

ps.dblclick(function(){
    $(this).css("font-size", "18px")
})

listItems.hover(
    function(){
      $(this).css("color", "red")
    },
    function(){
        $(this).css("color", "black")
    }
)

