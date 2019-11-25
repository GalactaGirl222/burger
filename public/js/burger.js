$(function(){

    $(".create-form").on("submit", function(event){
        event.preventdefault();

        var newBurger = {
            burger_name: $("#newBurger")
            .val()
            .trim(),
            devour: 0
        };

        $.ajax("/api/burgers",{
            type: "post",
            data: newBurger
        }).then(function(){
            console.log("Added New Burger!");
            location.reload();
        });
    });

    $(".eatBurger").on("click", function(event){
        event.preventDefault();

        var id =

        var devourSate =
    } // that takes and event thar
    // prevents the default event from happening. once you have completed
    // this task,  you now need to create a id that takes in the "id" data)
});