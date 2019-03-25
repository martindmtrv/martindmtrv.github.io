var test = [];
var martGit = new Gh3.User('martindmtrv');
var martRepos = new Gh3.Repositories(martGit);

martRepos.fetch({page:1, per_page:10, direction : "asc"},"next", function (err, res) {
  if(err) {
    throw "outch ..."
  }
  for (i = 0; i<martRepos.repositories.length; i++){
    test.push($.ajax(
    {
          type: "get",
          url: martRepos.repositories[i].name,
          cache: false,
          beforeSend: function(jqxhr, settings) { jqxhr.requestURL = martRepos.repositories[i].name; },
          statusCode: {
                        404: function ()
                            {
                              console.log("404");
                            }
                        },
          async: true,
          error: function (jqXHR, status, err) {
            alert("Local error callback.");
            console.log(jqXHR.requestURL);
            console.log(status);
          },
          success: function(data){
            var description;
            var updatedStr = "";
            var name;
            
            description = $(data).find("p");
            name = $(data).find("h1")[0].innerText;

            if (description[0] === undefined){
                description = "A cool project description";
            } else{
                description = description[0].innerText;
            }

            if (name != "martindmtrv.github.io" && name != "spaghetti-code"){
                updatedStr += "<div class = \"column\"><h4>" + name + "</h4><p>"+ description + "</p><a href=\"https://github.com/martindmtrv/"+ name  + "\">View on GitHub</a></div>";
            } 
            if ($('.column').length < 3){
            document.getElementById("response").innerHTML += updatedStr;
            }
          }
    }));}       
});

