$(function() {
    //code for the devour button for each burger on menu
    $(".devour").on("click", function(event) {
        const id = $(this).data("id");
        const update = {devoured: true};

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: update
        }).then( function() {
            location.reload();
        });
    })

    //code for deleting each burger listed on the menu
    $(".delete").on("click", function(event) {
        const id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then( function() {
            location.reload();
        });
    })

    //code for submitting a new burger to the menu
    $(".create").on("submit", function (event) {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        }
        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Created New Burger");
            location.reload();
        });
    })
});