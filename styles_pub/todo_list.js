
      $(document).ready(function(){

        $('form').on('submit', function(){
      
            var item = $('form input');
            var todo = {item: item.val()};
      
            $.ajax({
                type: 'POST', //Makes ajax post request to the rout-
                url: '/todo', //-this rout and fires the x.post in todo_controller
                data: todo, // Also data todo is passed to the x.post 
                success: function(data){ // x.post do something with the data and passes back to this line for further operation   
                    console.log("in ajax function");//do something with the data via front-end framework
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
                console.log("in ajax function");
                //do something with the data via front-end framework
                location.reload();
              }
            });
        });
      
      });
      