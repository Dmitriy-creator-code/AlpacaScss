define([

], function(){
        "use strict";
          fetch("https://magento.test/rest/all/V1/directory/countries")
            .then((Response) => {
                return Response.json();
            })
            .then((listOfCountries) => {
              for (const li of listOfCountries) {
               console.log(li.id + ":" + li.full_name_english); 
                let div = document.querySelector ('.alertCountriesList');
                let text = document.createElement('div');
                text.className = "alertCountriesList";
                text.textContent = li.id + ":" + " " + li.full_name_english;
                div.appendChild(text);
              }
            })
    }  
)
