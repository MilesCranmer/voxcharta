var url = window.location.href;
var arxiv = url.substr(url.lastIndexOf('/') + 1);
var voxsearch = "<br><a href=http://voxcharta.org/?s=" + arxiv+ "> Voxcharta </a>";
document.getElementsByClassName("title mathjax")[0].innerHTML += voxsearch;