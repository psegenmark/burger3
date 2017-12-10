
$(document).ready(function() {

    $("#burgerButton").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
         event.preventDefault();
          
        var newBurger = {
          burger_name: $("#burgerName").val().trim()
        };
        
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "PUT",
            data: newBurger
          }).then(
            function() {
              location.reload();
            });
    });

    // Change the burger to devoured. 
    $(".devouredButton").on("click", function(event){

      event.preventDefault();

      var id = $(this).data("id");

      var burgerToDevour = { 
        devoured: "true"
       };
      
      // send change request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerToDevour
      }).then(
        function() {
          location.reload();
        });
      });

    });
