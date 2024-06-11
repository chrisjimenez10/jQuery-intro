
//Shorthand Syntax for GET - $.get()
    //People
$.get("https://swapi.dev/api/people",
    function(data, status){
        // console.log(data.results, status); 
        // for (person of data.results){
        //     console.log(person.name);
        //     $("#name").append(`<li>${person.name}</h1>`);
        // }
            //This is the $.each() method in jQuery that can iterate over objects or arrays
        $.each(data.results, function(index, element){
            //    console.log(element.name, index)
               $("#name").append(`<li>${element.name}</li>`); //Here, the append() method is used to append/add elements to the preceding element, which becomes its parent --> NOTE: Ensure to explicitly assign WHAT type of HTML element the reults will be
        });     
    }
);

    //Film
$.get("https://swapi.dev/api/films/1/",
    function(data, status){
        console.log(data);
        $("#title").text(`Title: ${data.title}`);
        $("#releaseDate").text(`Release Date: ${data.release_date}`);
        $("#episodeId").text(`Episode ID: ${data.episode_id}`);
        $("#openingCrawl").text(`Opening Crawl: ${data.opening_crawl}`);
        $("#director").text(`Director: ${data.director}`);
        $("#producer").text(`Producer: ${data.producer}`);

    }
)









