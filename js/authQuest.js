function getSearchParams(k){
  var p={};
  location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
  return k?p[k]:p;
}

var code = getSearchParams('code');
console.log(code);


function auth(code){
  var client_id = 'TAmdaaZ2WI35zAIAGCwQWE8uNc_k9A';

  console.log(code);

  if (typeof code == "undefined"){
    window.location.href = `https://login.questrade.com/oauth2/authorize?client_id=${client_id}&response_type=code&redirect_uri=https://martindmtrv.github.io/callback.html`;
  } else{
    window.location.href = `http://localhost:3000/login?code=${code}`;
  }
}
