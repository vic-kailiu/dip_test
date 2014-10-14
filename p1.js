var counter = 0;
         function continuequestison(){
            mypic = document.getElementById('boxmodel');
            mypic1 = document.getElementById('boxmodel1');
            mypic2 = document.getElementById('boxmodel2');
            mypic3 = document.getElementById('boxmodel3');
            mypic4 = document.getElementById('boxmodel4');
            var qns = document.createElement('qns');
            NextBtn = document.getElementById('NextBtn');
            if(counter == 0)
            {
              mypic.style.visibility = 'visible';
              mypic1.style.visibility = 'visible';
              mypic2.style.visibility = 'visible';
              mypic3.style.visibility = 'visible';
              mypic4.style.visibility = 'visible';
            }
            if(counter == 1)
            {
              qns.innerHTML = "<button class=\"\link\"\ onclick=\"\highlight(this.innerHTML)\"\>Each</button>" +
              "<button class=\"\link\"\ onclick=\"\highlight(this.innerHTML)\"\>plate</button>" +
              "<button class=\"\link\"\ onclick=\"\highlight(this.innerHTML)\"\>has</button>" +
              "<button class=\"\link\"\ onclick=\"\highlight(this.innerHTML)\"\>3</button>" +
              "<button class=\"\link\"\ onclick=\"\highlight(this.innerHTML)\"\>pies</button>" +
              ".</br>";
              no3a.style.visibility = 'visible';
            }
            if(counter == 2)
            {
              qns.innerHTML += "<button class=\"\link\"\ onclick=\"\highlight(this.innerHTML)\"\>How</button>" +
              "<button class=\"\link\"\ onclick=\"\highlight(this.innerHTML)\"\>many</button>" +
              "<button class=\"\link\"\ onclick=\"\highlight(this.innerHTML)\"\>pies</button>" +
              "<button class=\"\link\"\ onclick=\"\highlight(this.innerHTML)\"\>are</button>" +
              "<button class=\"\link\"\ onclick=\"\highlight(this.innerHTML)\"\>there</button>" +
              "<button class=\"\link\"\ onclick=\"\highlight(this.innerHTML)\"\>altogether</button>" +
              "?</br>"; 
              NextBtn.style.visibility = 'hidden';
            }
            document.getElementById("qnsplace").appendChild(qns);
            counter++;
         }
         function highlight(keywordsss){
          //add keywords if u need must add in array
          var keyword = document.createElement('keyword');
          keyword.innerHTML = keywordsss + " ";
          document.getElementById("keywordbox").appendChild(keyword);
         }

function doFirst() {
  no3 = document.getElementById('no3');
  no3.style.visibility = 'hidden';
  
  no3a = document.getElementById('no3a');
  no3a.style.visibility = 'hidden';
  
  no15 = document.getElementById('no15');
  no15.style.visibility = 'hidden';
  
  mypic = document.getElementById('boxmodel');
  mypic1 = document.getElementById('boxmodel1');
  mypic2 = document.getElementById('boxmodel2');
  mypic3 = document.getElementById('boxmodel3');
  mypic4 = document.getElementById('boxmodel4');
	mypic.style.visibility = 'hidden';
	mypic1.style.visibility = 'hidden';
	mypic2.style.visibility = 'hidden';
	mypic3.style.visibility = 'hidden';
	mypic4.style.visibility = 'hidden';
  mypic.addEventListener("dragstart", startDrag, false);
  mypic.addEventListener("dragend", endDrag, false);
  mypic1.addEventListener("dragstart", startDrag, false);
  mypic1.addEventListener("dragend", endDrag, false);
  mypic2.addEventListener("dragstart", startDrag, false);
  mypic2.addEventListener("dragend", endDrag, false);
  mypic3.addEventListener("dragstart", startDrag, false);
  mypic3.addEventListener("dragend", endDrag, false);
  mypic4.addEventListener("dragstart", startDrag, false);
  mypic4.addEventListener("dragend", endDrag, false);
  
  box = document.getElementById('box');
  box.addEventListener("dragenter", dragenter, false);
  box.addEventListener("dragleave", dragleave, false);
  box.addEventListener("dragover", function(e){e.preventDefault();}, false);
  box.addEventListener("drop", dropped, false);
  box1 = document.getElementById('box1');
  box1.addEventListener("dragenter", dragenter, false);
  box1.addEventListener("dragleave", dragleave, false);
  box1.addEventListener("dragover", function(e){e.preventDefault();}, false);
  box1.addEventListener("drop", dropped, false);
  box2 = document.getElementById('box2');
  box2.addEventListener("dragenter", dragenter, false);
  box2.addEventListener("dragleave", dragleave, false);
  box2.addEventListener("dragover", function(e){e.preventDefault();}, false);
  box2.addEventListener("drop", dropped, false);
  box3 = document.getElementById('box3');
  box3.addEventListener("dragenter", dragenter, false);
  box3.addEventListener("dragleave", dragleave, false);
  box3.addEventListener("dragover", function(e){e.preventDefault();}, false);
  box3.addEventListener("drop", dropped, false);
  box4 = document.getElementById('box4');
  box4.addEventListener("dragenter", dragenter, false);
  box4.addEventListener("dragleave", dragleave, false);
  box4.addEventListener("dragover", function(e){e.preventDefault();}, false);
  box4.addEventListener("drop", dropped, false);
  
  totalpiesmodel = document.getElementById('totalpiesmodel');
  totalpiesmodel.addEventListener("dragstart", startDragtotal, false);
  totalpiesmodel.addEventListener("dragend", endDrag, false);
  totalpiesmodel.style.visibility = 'hidden';
  
  boxtotalpies = document.getElementById('boxtotalpies');
  boxtotalpies.addEventListener("dragenter", dragenter, false);
  boxtotalpies.addEventListener("dragleave", dragleave, false);
  boxtotalpies.addEventListener("dragover", function(e){e.preventDefault();}, false);
  boxtotalpies.addEventListener("drop", droppedtotal, false);
  boxtotalpies.style.visibility = 'hidden';
}
success = false;
function startDragtotal(e){
 var labelcode = '<img src="DIP Graphics/totalpies.png">';
 e.dataTransfer.setData('labelText', labelcode);
}
function droppedtotal(e){
 e.preventDefault();
 e.target.innerHTML = e.dataTransfer.getData('labelText');
  success = true;
}
function endDrag(e){
 pic = e.target;
 if (success == true){
	pic.style.visibility = 'hidden';
	success = false;
}
}
function dragenter(e){
 e.preventDefault();
 //e.target.style.background="SkyBlue";
 //e.target.style.border="3px solid red";
 //for highlighting if u wan but got error
}
function dragleave(e){
 e.preventDefault();
 //e.target.style.background="White";
 //e.target.style.border="3px solid blue";
}
function startDrag(e){
 var code = '<img src="DIP Graphics/boxmodel.jpg">';
 e.dataTransfer.setData('Text', code);
}
function dropped(e){
 e.preventDefault();
 success = true;
 e.target.innerHTML = e.dataTransfer.getData('Text');
 no3.style.visibility = 'visible';
 no3a.style.visibility = 'hidden';
 if (box.innerHTML == e.dataTransfer.getData('Text') && box1.innerHTML == e.dataTransfer.getData('Text')
 && box2.innerHTML == e.dataTransfer.getData('Text') && box3.innerHTML == e.dataTransfer.getData('Text')
 && box4.innerHTML == e.dataTransfer.getData('Text')){
  no15.style.visibility = 'visible';
  totalpiesmodel.style.visibility = 'visible';
  boxtotalpies.style.visibility = 'visible';
 }
}

window.addEventListener("load", doFirst, false);
