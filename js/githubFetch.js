var test;
var updatedStr = "";
var projects = 0;
var description = "";
var martGit = new Gh3.User('martindmtrv');
var martRepos = new Gh3.Repositories(martGit);

martRepos.fetch({page:1, per_page:10, direction : "asc"},"next", function (err, res) {
  if(err) {
    throw "outch ..."
  }
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
    if (test.statusText == "success"){
      description = test.responseText;
      description = $(description).find("p");
      if (description[0] === undefined){
        description = "A cool project description";
      } else{
        description = description[0].innerText;
      }
      if (martRepos.repositories[i].name != "martindmtrv.github.io" && martRepos.repositories[i].name != "spaghetti-code"){
        updatedStr += "<div class = \"column\"><h4>" + martRepos.repositories[i].name + "</h4><p>"+ description + "</p><a href=\"https://github.com/martindmtrv/"+ martRepos.repositories[i].name  + "\">View on GitHub</a></div>";
        projects++;
      } 
    }
    else{
      document.getElementById("other").innerHTML += "<p>" + martRepos.repositories[i].name + "<br><br></p>";
    }
    if (projects >= 3){
      document.getElementById("response").innerHTML = updatedStr;
    } else{
      for (var x = projects; x < 3; x++){
        updatedStr += "<div class = \"column\"></div>"
      }
      document.getElementById("response").innerHTML = updatedStr;
    }
  }
  
});

