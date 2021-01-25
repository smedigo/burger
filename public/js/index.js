$(function() {
    $(".change-burger").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newburger");
  
      var newBurger = {
        new: newBurger
      };
  
      // Send the PUT request.
      $.ajax("/burgers" + id, {
        type: "PUT",
        data: newBurger
      }).then(
        function() {
          console.log("changed burger to", newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim(),
        sleepy: $("[name=burger]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/burgers" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  