const BASE_URL = "https://api.imgflip.com/get_memes";

$.get(BASE_URL, function(data){
    console.log(data.data.memes);
    $.each(data.data.memes, function(index, element){
        // console.log(element.name);
        const li = $("<li></li>");
        li.append(`<img src=${element.url} width="100px" height="100px">`);
        li.append(`<dd>${element.name}</dd>`);
        $("#memeList").append(li);
    })
})