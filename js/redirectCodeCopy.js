function copy_clipboard(){
  // get all params after ? and put them in a dictionary
  var $_GET = {};
  if(document.location.toString().indexOf('?') !== -1) {
      var query = document.location
                     .toString()
                     // get the query string
                     .replace(/^.*?\?/, '')
                     // and remove any existing hash string (thanks, @vrijdenker)
                     .replace(/#.*$/, '')
                     .split('&');

      for(var i=0, l=query.length; i<l; i++) {
         var aux = decodeURIComponent(query[i]).split('=');
         $_GET[aux[0]] = aux[1];
      }
  }
  //get the 'code' query parameter
  const code = $_GET['code'];
  // copy this code to the clipboard
  const copyClipboard = code;
  const el = document.createElement('textarea');
  el.value = copyClipboard;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy',false,copyClipboard);
  document.body.removeChild(el);
  document.getElementById('success').innerHTML = 'Copied to Clipboard!';
}
