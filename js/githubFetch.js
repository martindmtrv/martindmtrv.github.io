function main(){
  var martGit = new Gh3.User('martindmtrv');

  var martRepos = new Gh3.Repositories(martGit);
  martRepos.fetch({page:1, per_page:5, direction : "desc"},"next", function (err, res) {
    if(err) {
      throw "outch ..."
    }
    console.log("Repositories", martRepos.repositories);
    var updatedStr = "";
    var test = false;
    for (i = 0; i<martRepos.repositories.length; i++){
      test = $.ajax(
        {
            type: "get",
            url: martRepos.repositories[i].name,
            cache: false,
            statusCode: {
                          404: function ()
                             {
                                alert(false);
                                return false;
                             }
                         },
            success: function(){
              alert(true);
              return true;
            },
            async: true
        });
      console.log(test);
      updatedStr += martRepos.repositories[i].name + "<br>" + test.successText + "<br><br>"
    }
    document.getElementById('git').innerHTML = updatedStr
  })
}