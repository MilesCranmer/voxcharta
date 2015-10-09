 //get url
var url = window.location.href;
//cut off end
var arxiv = url.substr(url.lastIndexOf('/') + 1); 
//remove question mark and that which follows
if (arxiv.indexOf('?')!= -1){ 
	arxiv = arxiv.substr(0,arxiv.lastIndexOf('?'));
}
//make html code for link
var voxsearch = "<br><a href=http://voxcharta.org/?s=" + arxiv+ "> Vox Charta </a>";
//add voxcharta url to site page
document.getElementsByClassName("bookmarks")[0].innerHTML += voxsearch;
