//Hämtar api från github
fetch("https://api.github.com/users/alex-nil/repos")

    //sparar json data
    .then(function(data){
        return data.json();
    })

    //lägger in json data i repos, hämtar namn från github repos så jag kan printa ut på sidan
    .then(function(repos){

        for (var i=0; i<repos.length; i++) {
            document.getElementById("repos").innerHTML += "<li><a href=\"https://github.com/alex-nil/" + repos[i].name + "\">" + repos[i].name + "</a></li>"
        }
    })

    //loggar error
    .catch(err=> {
        console.log(err);
    })
