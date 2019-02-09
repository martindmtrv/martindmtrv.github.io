function main(){
  var martGit = new Gh3.User('martindmtrv');

  var martRepos = new Gh3.Repositories(martGit);
  martRepos.fetch({page:1, per_page:5, direction : "desc"},"next", function (err, res) {
    if(err) {
      throw "outch ..."
    }

    var updatedStr = "";
    var test;
    var projects = 0;
    var description = "";
    for (i = 0; i<martRepos.repositories.length; i++){
      test = $.ajax(
        {
            type: "get",
            url: martRepos.repositories[i].name,
            cache: false,
            statusCode: {
                          404: function ()
                             {
                                console.log("404");
                             }
                         },
            async: false
        });
      // for testing purposes (remove when uploading)
      if (projects < 2){
        test.statusText = "success";
      }
      if (test.statusText == "success"){
        description = test.find("h2.project-tagline");
        console.log(description);
        updatedStr += "<div class = \"column\"><h4>" + martRepos.repositories[i].name + "</h4><br><p>" + test.statusText + "<br><br>" + description + "</p><a href=\"https://github.com/martindmtrv/"+ martRepos.repositories[i].name  + "\">View project on GitHub</a></div>";
        projects++;
      }
      else{
        document.getElementById("other").innerHTML += "<p>" + martRepos.repositories[i].name + "<br><br></p>";
      }
    }
    if (projects >= 3){
      document.getElementById("response").innerHTML = updatedStr;
    } else{
      for (var x = projects; x < 3; x++){
        updatedStr += "<div class = \"column\"></div>"
      }
      document.getElementById("response").innerHTML = updatedStr;
    }
    
  })
}

main();