var url = window.location.href;
var arxiv = url.substr(url.lastIndexOf('/') + 1);
if (arxiv.indexOf('?')!= -1)
{
	arxiv = arxiv.substr(0,arxiv.lastIndexOf('?'));
}
var voxsearch = "<br><a href=http://voxcharta.org/?s=" + arxiv+ "> Voxcharta </a>";
var voxsearchh = "http://voxcharta.org/?s=" + arxiv;

//document.write($('.product h3').load(voxsearchh).text());

document.getElementsByClassName("title mathjax")[0].innerHTML += voxsearch;
