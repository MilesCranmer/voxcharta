var url = window.location.href;
var arxiv = url.substr(url.lastIndexOf('/') + 1);
var voxsearch = "voxcharta.org/?s=" + arxiv;
alert(voxsearch);
