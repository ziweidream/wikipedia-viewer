$(document).ready(function() {
  $("#mySearch").click(function() {
    $("#displayResult").empty();
    var searchTerm = document.getElementById("search").value; // value entered by the user
    var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchTerm + "&format=json&callback=?"; // url to look for using the search input by the user

    $.ajax({
      type: "GET",
      url: url,
      async: true,
      dataType: "json",
      success: function(data) {
        for (var i = 0; i < 10; i++) {
          $("#displayResult").append('<li style="list-style: none; font-size:26px;"><a style="color: black;" href="http://en.wikipedia.org/wiki?curid=' + data.query.search[i].pageid + '"' + ">" + data.query.search[i].title + "</a></li>");
        }
      },

      error: function(errorMessage) {
        alert("Error");
      }
    });
  });
});
