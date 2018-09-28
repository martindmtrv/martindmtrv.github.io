function main(){
  var martGit = new Gh3.User('martindmtrv');

  var martRepos = new Gh3.Repositories(martGit);
  martRepos.fetch({page:1, per_page:5, direction : "desc"},"next", function (err, res) {
    if(err) {
      throw "outch ..."
    }
    console.log("Repositories", martRepos.repositories);
    var updatedStr = "";
    for (i = 0; i<martRepos.repositories.length; i++){
      console.log(martRepos.repositories[i].name);
      updatedStr += martRepos.repositories[i].name + "<br>"
    }
    document.getElementById('git').innerHTML = updatedStr
  })
}