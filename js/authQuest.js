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
    window.open("https://martindmtrv.github.io/authRedirect.html");
  } else{
      $.get({
        url: "https://login.questrade.com/oauth2/token?client_id="+client_id+"&code="+code+"grant_type=authorization_code&redirect_uri=https://martindmtrv.github.io/callback.html",
        dataType: 'json',
        success: function(data){
          const AUTH_HEADERS = data;
          console.log(AUTH_HEADERS);
        },
      });
  }
}
