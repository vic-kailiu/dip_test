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
    var total = question[0].getElementsByTagName("TOTAL")[0].firstChild.nodeValue;
	var unit = question[0].getElementsByTagName("UNIT")[0].firstChild.nodeValue;
	
	//Text of the question
	var textDiv = document.getElementById('text');
	if (!textDiv) {
		alert("cannot get text div!");
		return;
	}
	textDiv.innerHTML = "";	//reset content
	
	//setup
	var regex = /([\.,-\/#!?$%\^&\*;:{}=\-_`~()])/g; //regular expression for punctuations
		var punctuations = "\.,-\/#!?$%\^&\*;:{}=\-_`~()";
	for (i=0; i<paragraphs.length; i++) {		
		//process to word
		var s = paragraphs[i].childNodes[0].data.replace(/(^\s*)|(\s*$)/gi,"");
		s = s.replace(/[ ]{2,}/gi," ");
		s = s.replace(/\n /,"\n");
		s = s.replace(regex,' $1'); //add space before punctuations for splitting
		words = s.split(" ");
		//write to html
		var content = "<p>";
		for (j = 0; j < words.length; j++) {
			if (punctuations.indexOf(words[j][0]) > -1) { // is a punctuation
				content += words[j];
			}
			else {
				content += "<button>" + words[j] + "</button>";
			}
		}
		content += "</p>";
		textDiv.innerHTML += content;
	}
	
	//Keyword section
	var keywordDiv = document.getElementById('keywords');
	if (!keywordDiv) {
		alert("cannot get keywords div!");
		return;
	}
	keywordDiv.innerHTML = "";	//reset content
	
	var border = 5;
	var count = total / unit;
	
	//Question
	var questionDiv = document.getElementById('question');
	if (!questionDiv) {
		alert("cannot get question div!");
		return;
	}
	questionDiv.innerHTML = "";	//reset content
	
	questionDiv.innerHTML += "<div class='boxno3' id='boxno3_question'><img src='images/3.png'></div>"
	//boxes
	var content= "<div class='horizontal' id='drop_container'>"
	for (i=0; i< count; i++) {
		content += "<div class='box' id='box"+i.toString()+"'></div>";
	}
	content += "</div>"
	questionDiv.innerHTML += content;
	questionDiv.innerHTML += "<div class='boxno15' id='boxno15'><img src='images/15.png'></div>"
	questionDiv.innerHTML += "<div class='boxtotalpies' id='boxtotalpies'></div>"
		
	//Drag_source
	var dragDiv = document.getElementById('drag_source');
	if (!dragDiv) {
		alert("cannot get drag div!");
		return;
	}
	dragDiv.innerHTML = "";	//reset content
	
	questionDiv.innerHTML += "<div class='boxno3' id='boxno3_drag'><img src='images/3.png'></div>"
	//boxes
	var content= "<div class='horizontal' id=[drag_container'>"
	for (i=0; i< count; i++) {
		content += "<div class='box_model' id='box_model"+i.toString()+"'></div>";
	}
	content += "</div>"
	questionDiv.innerHTML += content;
	questionDiv.innerHTML += "<div class='boxtotalpiesmodel' id='boxtotalpiesmodel'>Total Pies</div>"

	
}







