
 $(document).ready(function(){
//listen for form submit or submit-btn click 
    $('#submit-btn').click(changeBackground);


//change background

//change background

//get the city-type value

//check to see if it is one of our cities

//if it is change the body background image


    function changeBackground(){
        event.preventDefault();
        //get the city-type value
        var city = $('#city-type').val();

        if(city === "New York" || city === "New York City" || city === "NYC"){

            $("body").addClass("nyc");
        }
    
    		else if(city === "Los Angeles" || city === "LA" || city === "LAX"){
				$("body").addClass("la");
		}

    }


});