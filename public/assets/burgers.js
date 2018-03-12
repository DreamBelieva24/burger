// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newMeal = {
        name: $("#ca").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newMeal
      }).then(
        function() {
          console.log("cooking...");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".ready").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("order up!", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  