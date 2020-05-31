$(document).ready(function(){

  $('form').on('submit', function(){ // on submission it fires a function

      var item = $('form input'); // data from the input to the list in todo.ejs is acquired here
      var todo = {item: item.val()}; //the input value is structured into  an object

      $.ajax({
        type: 'POST', //Makes ajax post request to the rout-
        url: '/todo', // -this rout and fires the x.post in todo_controller
        data: todo, // Also data todo is passed to the x.post 
        success: function(data){ // x.post do something with the data and passes back to this line for further operation   
          //do something with the data via front-end framework
          location.reload(); // Changes reflected on reload, we can display changes without reload with the use of front-end framework
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});