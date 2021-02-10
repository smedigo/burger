$(document).ready(function () {
  $(".change-devour").on("click", function (event) {
    event.preventDefault();

    var burger_id = $(this).data("id");
    var newdevour = $(this).data("newburger");
    var devoured = { devoured: newdevour};
    $.ajax("/burgers/" + burger_id,
      {
        type: "PUT",

        data: devoured,
      }).then(function (data) {

        location.reload();
      });

  })
})
$(".devour-form").on("submit",".submit-button", function (event) {

  event.preventDefault();

  var burger_id = $(this).children(".burger_id").val();
  $.ajax({
    method: "POST",
    url: "/burgers"
  }).then(function (data) {

    location.reload();
  });

})

