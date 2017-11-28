var i = 0;

function addSection() {

    /*var original = document.getElementById('duplicater' + i);
    var clone = original.cloneNode(true); // "deep" clone
   clone.id = "duplicater" + ++i; // there can only be one element with an ID
    clone.onclick = duplicate; // event handlers are not cloned
    original.parentNode.appendChild(clone);*/

    i++;
    var secParent = document.getElementsByClassName("sectionContainer")[0];
    var table = document.getElementsByClassName("sidebarSections")[0];
    var sectionTC = document.createElement("a");
    sectionTC.href = "#section" + i;
    sectionTC.className = "sideBarLink a";
    sectionTC.id = "sideSection" + i;
    sectionTC.innerHTML = "new " + i + "\<br>\<br>";
    sectionTC.width = "100%";
    table.insertBefore(sectionTC, table.childNodes[table.childNodes.length - 1]);

    var newSection = document.createElement("div");
    newSection.className = "sectionForm";
    newSection.id = "section" + i;

    /*newSection.innerHTML = "WE MADE IT";*/
    var rowA = document.createElement("div");
    rowA.className = "rowAlignLeft";

    var form = document.createElement("form");
    var concatButton = document.createElement("button");
    var upButton = document.createElement("button");
    var downButton = document.createElement("button");
    form.className = "sideBySide";
    upButton.innerHTML = "&#65514";
    downButton.innerHTML = "&#65516";

    concatButton.innerHTML = "&#9660;";

    upButton.classList.add("ghostButton");
    upButton.classList.add("blueGhost");

    downButton.classList.add("ghostButton");
    downButton.classList.add("blueGhost");

    concatButton.classList.add("blueGhost");
    concatButton.classList.add("ghostButton");
    concatButton.classList.add("buttonFlip");

    upButton.id = "upButton" + i;
    downButton.id = "downButton" + i;
    concatButton.id = "concatButton" + i;
    var input = i;
    upButton.addEventListener("click", function() { moveUpSection(input); })
    downButton.addEventListener("click", function() { moveDownSection(input); })
    var flip = true;
    concatButton.addEventListener("click", function() {
        concatinateSection(input, concatButton, flip);
        flip = !flip;
    });
    upButton.type = "button";
    downButton.type = "button";
    concatButton.type = "button";

    if(i == 1){
    	upButton.className = "greyGhost ghostButton";
    	downButton.className = "greyGhost ghostButton"
    }
    else{
    	upButton.className = "blueGhost ghostButton ";
    	downButton.className = "blueGhost ghostButton";
    	upButton.addEventListener("click", function() { moveUpSection(input); })
    	downButton.addEventListener("click", function() { moveDownSection(input); })
    }

    form.appendChild(concatButton);
    form.appendChild(upButton);
    form.appendChild(downButton);
    rowA.appendChild(form);

    /*titleform.appendChild(addButton);
    titleform.appendChild(removeButton);
    rowA.appendChild(titleform);*/
    newSection.appendChild(rowA);

    //HERE
    var infoInput = document.createElement("div");
    var titleform = document.createElement("form");
    var sectionTitleText = document.createElement("input");
    var sectionDeleteButton = document.createElement("button");
    sectionTitleText.type = "text";
    sectionTitleText.name = "sectionTitle";
    sectionTitleText.id = "sectionTitle" + i;
    sectionTitleText.className = "articleTitleBox";
    sectionTitleText.placeholder = "Section Title";
    sectionDeleteButton.className = "ghostButtonRed";
    sectionDeleteButton.innerHTML = "Delete Section";
    sectionDeleteButton.onclick = "getData();"

    sectionDeleteButton.type = "button";

    sectionDeleteButton.onclick = function() {

        table.removeChild(sectionTC);
        secParent.removeChild(newSection);
        console.log(i);

    };

    titleform.appendChild(sectionTitleText);
    titleform.appendChild(sectionDeleteButton);
    infoInput.appendChild(titleform);

    //newSection.appendChild(infoInput);
    sectionTitleText.addEventListener("keyup", function(event) {
        sectionTC.innerHTML = sectionTitleText.value + "\<br>\<br>";
        sectionTC.innerHTML = sectionTC.innerHTML.trim();
        if (sectionTC.innerHTML === "\<br>\<br>") {
            sectionTC.innerHTML = "New \<br>\<br>";
        }

    });

    var sectionWrapDiv = document.createElement("div");
    var sectionSideDiv = document.createElement("div");
    var sectionAreaText = document.createElement("textarea");
    var sectionLatexText = document.createElement("textarea");
    var diaForm = document.createElement("form");
    var diagramUrl = document.createElement("input");
    sectionWrapDiv.className = "sectionWrap";
    sectionSideDiv.className = "sectionSide";

    sectionWrapDiv.width = "100%";

    sectionLatexText.rows = "5";
    sectionLatexText.cols = "20";
    sectionAreaText.className = "tArea";

    sectionLatexText.rows = "5";
    sectionLatexText.cols = "20";
    sectionLatexText.className = "tArea";

    sectionAreaText.placeholder = "Content";

    sectionAreaText.id = "textArea" + i;
    sectionLatexText.id = "latexArea" + i;
    diagramUrl.id = "diagramURL";

    sectionLatexText.placeholder = "Latex";
    diagramUrl.className = "articleTitleBox";
    diagramUrl.type = "text";
    diagramUrl.placeholder = "Diagram URL";
    diagramUrl.name = "diagram URL " + i;
    diagramUrl.id = "diagramURL" + i;

    sectionSideDiv.appendChild(sectionAreaText);
    sectionSideDiv.appendChild(sectionLatexText);
    diaForm.appendChild(diagramUrl);
    sectionSideDiv.appendChild(diaForm);
    sectionWrapDiv.appendChild(sectionSideDiv);

    var sectionImage = document.createElement("div");
    var imageDiv = document.createElement("div");
    var imageForm = document.createElement("form");
    var fileIn = document.createElement("input");
    var getImageButton = document.createElement("button");
    sectionImage.className = "sectionImage";
    imageDiv.className = "image";
    imageDiv.id = "disp";
    fileIn.id = "fileInput";
    fileIn.type = "file";
    fileIn.style.display = "none";
    getImageButton.type = "file";
    getImageButton.className = "solidButton";
    getImageButton.onclick = "document.getElementById('fileInput').click();";
    getImageButton.innerHTML = "Add Image";

    sectionImage.appendChild(imageDiv);
    imageForm.appendChild(fileIn);
    imageForm.appendChild(getImageButton);
    sectionImage.appendChild(imageForm);

    //sectionWrapDiv.appendChild(infoInput);

    sectionWrapDiv.appendChild(sectionImage);
    infoInput.appendChild(sectionWrapDiv);
    newSection.appendChild(infoInput);

    secParent.appendChild(newSection);

}

function concatinateSection(sectionNum, button, flip) {
    if (flip) {
        var textArea = document.getElementById("textArea" + sectionNum);
        var latexArea = document.getElementById("latexArea" + sectionNum);
        textArea.style.height = "0px"
        latexArea.style.height = "0px"
            //button.
    } else {

    }
    var textArea = document.getElementById("textArea" + sectionNum);
    var latexArea = document.getElementById("latexArea" + sectionNum);
    textArea.style.height = "0px"
    latexArea.style.height = "0px"

}

function moveUpSection(sectionNum) {
    var secParent = document.getElementsByClassName("sectionContainer")[0].children;
    alert("MOVE UP:"+sectionNum + " " + " " + i);
    if (sectionNum - 1 > 0) {
        var newTopSec = document.getElementById('section' + sectionNum);
        var bottom = sectionNum - 1;
        var newBottomSec = document.getElementById('section' + bottom);
        newTopSec.id = "section" + bottom;
        newBottomSec.id = "section" + sectionNum;

        var clone = newTopSec.cloneNode(true);
        var clone1 = newBottomSec.cloneNode(true);
        var secParent = document.getElementsByClassName("sectionContainer")[0];
        secParent.insertBefore(clone, newBottomSec);
        secParent.insertBefore(clone1, newTopSec);

        secParent.removeChild(newTopSec);
        secParent.removeChild(newBottomSec);

        newTopSec = document.getElementById('section' + sectionNum);
        newBottomSec.id = "section" + sectionNum;

        var newBottomButton = document.getElementById("upButton" + bottom);
        var newTopButton = document.getElementById("upButton" + sectionNum);
        newBottomButton.addEventListener("click", function() { moveUpSection(sectionNum); });
        newTopButton.addEventListener("click", function() { moveUpSection(sectionNum - 1); });
        newBottomButton.id = "upButton" + sectionNum;
        bottom = sectionNum - 1;
        newTopButton.id = "upButton" + bottom;

        newBottomButton = document.getElementById("downButton" + bottom);
        newTopButton = document.getElementById("downButton" + sectionNum);
        newBottomButton.addEventListener("click", function() { moveDownSection(sectionNum); });
        newTopButton.addEventListener("click", function() { moveDownSection(sectionNum - 1); });
        newBottomButton.id = "downButton" + sectionNum;
        bottom = sectionNum - 1;
        newTopButton.id = "downButton" + bottom;

        var table = document.getElementsByClassName("sidebarSections")[0].children;
        //var getSideSection;
        var saveSwitchValue = table[sectionNum].innerHTML;
        table[sectionNum].innerHTML = table[sectionNum+1].innerHTML;
        table[sectionNum+1].innerHTML = saveSwitchValue;
        table[sectionNum+1].href = "#section" + bottom;
        table[sectionNum].href = "#section" + sectionNum;

    	var secParent = document.getElementsByClassName("sectionContainer")[0];
    	var deleteButtons = document.getElementsByClassName("ghostButtonRed");
    	//table = document.getElementsByClassName("sidebarSections")[0];
    	deleteButtons[sectionNum].addEventListener("click", function(){deleteSection(sectionNum);});
    	deleteButtons[bottom].addEventListener("click",function(){deleteSection(sectionNum-1)});






    } else {
        alert("This section is already at the top of the page.");
    }
}

function moveDownSection(sectionNum) {
	alert("MOVE DOWN:"+sectionNum + " " + " " + i);
    var secParent = document.getElementsByClassName("sectionContainer")[0].children;
    if (sectionNum != i) {
        var bottom = sectionNum + 1;
        var newTopSec = document.getElementById('section' + bottom);
        var newBottomSec = document.getElementById('section' + sectionNum);
        newTopSec.id = "section" + sectionNum;
        newBottomSec.id = "section" + bottom;

        var clone = newTopSec.cloneNode(true);
        var clone1 = newBottomSec.cloneNode(true);
        var secParent = document.getElementsByClassName("sectionContainer")[0];
        secParent.insertBefore(clone, newBottomSec);
        secParent.insertBefore(clone1, newTopSec);

        secParent.removeChild(newTopSec);
        secParent.removeChild(newBottomSec);

        newTopSec = document.getElementById('section' + sectionNum);
        newBottomSec.id = "section" + sectionNum;

        var newBottomButton = document.getElementById("upButton" + bottom);
        var newTopButton = document.getElementById("upButton" + sectionNum);
        newBottomButton.addEventListener("click", function() { moveUpSection(sectionNum); });
        newTopButton.addEventListener("click", function() { moveUpSection(sectionNum + 1); });
        newBottomButton.id = "upButton" + sectionNum;
        bottom = sectionNum + 1;
        newTopButton.id = "upButton" + bottom;

        newBottomButton = document.getElementById("downButton" + bottom);
        newTopButton = document.getElementById("downButton" + sectionNum);
        newBottomButton.addEventListener("click", function() { moveDownSection(sectionNum); });
        newTopButton.addEventListener("click", function() { moveDownSection(sectionNum + 1); });
        newBottomButton.id = "downButton" + sectionNum;
        bottom = sectionNum + 1;
        newTopButton.id = "downButton" + bottom;


        var table = document.getElementsByClassName("sidebarSections")[0].children;
        var saveSwitchValue = table[sectionNum+1].innerHTML;
        //table[sectionNum+1].innerHTML = "HERE"
        table[sectionNum+1].innerHTML = table[sectionNum + 2].innerHTML;
        table[sectionNum + 2].innerHTML = saveSwitchValue;
        table[sectionNum + 2].href = "#section" + bottom;
        table[sectionNum+1].href = "#section" + sectionNum;

        var secParent = document.getElementsByClassName("sectionContainer")[0];
    	var deleteButtons = document.getElementsByClassName("ghostButtonRed");
    	//table = document.getElementsByClassName("sidebarSections")[0];
    	deleteButtons[sectionNum].addEventListener("click", function(){deleteSection(sectionNum);});
    	deleteButtons[bottom].addEventListener("click",function(){deleteSection(sectionNum+1)});


    } else {
        alert("This section is already at the bottom of the page.");
    }
}

function deleteSection(sectionNum){
	var table = document.getElementsByClassName("sidebarSections")[0];
	var secParent = document.getElementsByClassName("sectionContainer")[0];
	alert(i);
	if(sectionNum >1 && i > 1){
		var bottom = sectionNum -1;
	    var deleteButtons = document.getElementsByClassName("ghostButtonRed");
	    var upButton;
		var downButton;
		var newNum;
		
	    for(j=sectionNum+1;j!=i+1;j++){
	    	newNum = j-1;
	    	alert(newNum);
	    	secParent.children[j].id = "section"+newNum;
	    	upButton = document.getElementById("upButton"+j);
	    	upButton.id = "upButton" +newNum;
	    	upButton.removeEventListener("click", function(){moveUpSection(sectionNum)});
	    	upButton.addEventListener("click",function(){moveupSection(newNum)});
	    	downButton = document.getElementById("downButton"+j);
	    	downButton.removeEventListener("click",function(){moveDownSection(sectionNum)});
	    	downButton.addEventListener("click",function(){moveDownSection(newNum)});
	    	downButton.id = "downButton"+newNum;
	    }
	    table.removeChild(table.children[sectionNum+1]);
	    secParent.removeChild(secParent.children[sectionNum]);
	    i--;
	    console.log(i);
	}
	else{
		table.removeChild(table.children[sectionNum+1]);
        secParent.removeChild(secParent.children[sectionNum]);
        console.log(i);
	}
}

function genJson() {
    console.log(i);
    var submitText = "";
    var sections = document.getElementsByClassName("sectionForm");

    var title = document.getElementById("pageTitle").value;
    submitText = "{\n";
    submitText += "\t\"title\":\"" + title + "\",\n";
    submitText += "\t\"sections\":{ \n"

    // go through the sections and get their data
    for (var secNum = 0; secNum < sections.length; secNum++) {

        var sectionText = document.getElementById("textArea" + (secNum + 1)).value;
        var sectionDiagram = document.getElementById("diagramURL" + (secNum + 1)).value;
        var sectionEquation = document.getElementById("latexArea" + (secNum + 1)).value;
        var sectionImage = "";

        submitText += "\t\t\"section" + secNum + "\":{\n";
        submitText += "\t\t\t\"secTitle\":\"" + document.getElementById("sectionTitle" + (secNum + 1)).value + "\",\n";
        submitText += "\t\t\t\"content\":{ \n";
        submitText += "\t\t\t\t\"text\":\"" + sectionText + "\",\n"
        submitText += "\t\t\t\t\"image\":\"" + sectionImage + "\",\n"
        submitText += "\t\t\t\t\"diagram\":\"" + sectionDiagram + "\",\n"
        submitText += "\t\t\t\t\"equation\":\"" + sectionEquation + "\"\n"
        submitText += "\t\t\t}\n";
        if (secNum == sections.length - 1) {
            submitText += "\t\t}\n";
        } else {
            submitText += "\t\t},\n";
        }

    }
    submitText += "\t}\n";
    submitText += "}\n";
    console.log(submitText);
}

function helloWorld() {
    alert("Hello World");
    //todo submit to data base yo
}
// SORRY FOR THIS GUYS NEED TO BE ABLE TO PARSE SOME SHIT
// MY BAD
const data = {
    "title": "Waves",
    "sections": {
        "section1": {
            "secTitle": "Description",
            "content": {
                "text": "The general body of text accompanying a section",
                "image": "href to image stored in server",
                "diagram": "href to diagram for ifram insert",
                "equation": "latex for mathjax"
            }
        }
    }
}

function parseJSON() {
    var file = JSON.parse("data");
    console.log(file);
    //todo submit to data base yo
}

function genSearchSection() {
    var topDiv = document.createElement("div");
    var titleDiv = document.createElement("div");
    var searchDiv = document.createElement("div");
    var buttonDiv = document.createElement("div");

    topDiv.classList.add("");
    titleDiv.innerHTML = "UPOD";



}