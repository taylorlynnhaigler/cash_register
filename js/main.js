$(document).ready(function() {

    //Set Total to 0
    var totalCost=0;

    //Perform event when the button is clicked
    $('#add_item').click(function() {

    //Get values from the text boxes
      var item = $("#name").val();
      var cost = parseFloat($("#number").val());

    //Do 
      var groceries = item + " $" + cost;
      
    //DOM manipulation - add values to ul as li
      $('#itemList').append('<li>'+groceries+'</li>');
  

    //Add the cost to the total and update html with current value
      totalCost += cost;
      $("#totalCost").html(totalCost.toFixed(2));
      
    });
});


