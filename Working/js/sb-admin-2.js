$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse')
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse')
        }

        height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    })
})

function generateQuestion() {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET","data/problems.xml",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML; 
    var question=xmlDoc.getElementsByTagName("QUESTION");
    var text=question[0].getElementsByTagName("TEXT");
    var paragraphs = text[0].getElementsByTagName("P");
    
	var textDiv = document.getElementById('text');
	if (!textDiv) {
		alert("cannot get text div!");
		return;
	}
	
	textDiv.innerHTML = "";	//reset content
	for (i=0; i<paragraphs.length; i++) {
		//setup
		var regex = /([\.,-\/#!$%\^&\*;:{}=\-_`~()])/g; //regular expression for punctuations
		var punctuations = "\.,-\/#!$%\^&\*;:{}=\-_`~()";
		//process to word
		var s = paragraphs[i].childNodes[0].data.replace(/(^\s*)|(\s*$)/gi,"");
		s = s.replace(/[ ]{2,}/gi," ");
		s = s.replace(/\n /,"\n");
		s = s.replace(regex,' $1'); //add space before punctuations for splitting
		words = s.split(" ");
		//write to html
		textDiv.innerHTML += "<p>";
		for (j = 0; j < words.length; j++) {
			if (punctuations.indexOf(words[j][0]) > -1) { // is a punctuation
				textDiv.innerHTML += words[j];
			}
			else {
				textDiv.innerHTML += "<button>" + words[j] + "</button>";
			}
		}
		textDiv.innerHTML += "</p>"
	}
	
}