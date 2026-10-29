function addText()
{
	const date = new Date();
	if (document.getElementById("paragraphInput").value != "" && document.getElementById("headerInput").value != "") {

		if (sessionStorage.getItem("numItems") == null)
			sessionStorage.setItem("numItems", 0);
		else
			sessionStorage.setItem("numItems", Number(sessionStorage.getItem("numItems")) + 1);
		console.log(sessionStorage.getItem("numItems"));


		var numOfPosts = sessionStorage.getItem("numItems");

		var newTextInfo = document.getElementById("paragraphInput").value;
		var newHeader = document.getElementById("headerInput").value;

		sessionStorage.setItem(("postT" + numOfPosts), newTextInfo)
		
		sessionStorage.setItem(("postH" + numOfPosts), newHeader)
		sessionStorage.setItem("postD" + numOfPosts, date);
		document.getElementById("paragraphInput").value = "";
		document.getElementById("headerInput").value = "";
	}
	
}

function getText(clickedId) {
	var tempstring = clickedId;
	var postNum = Number(tempstring.substring(5));
	sessionStorage.setItem("selectedPost", postNum);
}


function setText() {
	var selectedPost = Number(sessionStorage.getItem("selectedPost"));
	console.log(sessionStorage.getItem("selectedPost"));


	var tag = document.getElementById("textRow");
	var text = sessionStorage.getItem(("postT" + selectedPost));
	console.log("postT" + selectedPost);


	var headerPlacement = document.getElementById("blogHeader");
	var headerText = sessionStorage.getItem("postH" + selectedPost);
	var timeHeaderPlacement = document.getElementById("timeHeader");
	console.log("postH" + selectedPost);

	tag.innerHTML = text;
	headerPlacement.innerHTML = headerText;
	timeHeaderPlacement.innerHTML = sessionStorage.getItem("postD" + selectedPost);
}
function setTextMain() {
	// const date = new Date();
	if (sessionStorage.getItem("numItems") != null) {
		var amountOfPosts = Number(sessionStorage.getItem("numItems"));
		for (var i = 0; i <= amountOfPosts; i++) {
			if (sessionStorage.getItem("postT" + i) != "null") {
				var table = document.getElementById("mainTable");//table in index
				var numRows = table.rows.length;
				var numCols = table.rows[0].cells.length - 1;
				var row;
				var cell;

				var anchor = document.createElement("a");
				anchor.innerText = sessionStorage.getItem(("postH" + i));
				anchor.href = "blogPage.html";
				anchor.setAttribute("onclick", "getText(this.id)")
				anchor.setAttribute("id", "postH" + i);
				anchor.setAttribute("Class", "blogPostDisplayListItemHeader")
				console.log("postH" + i);

				row = table.insertRow(numRows);
				cell = row.insertCell(numCols);
				cell.appendChild(anchor);
			}
		}
	}
	else {
		var logOneHeader = "HELP IM TRAPPED HERE";
		var logOneText = "I dont know what happeded but I fell down this pit in the ground"
		logOneText += "I dont know where I am. I found this computer in here wwith me the screen"
		logOneText += "is mostly broken but if I hit it correctly it fixes itself";
		logOneText += "before I fell In I was somewhere near Frenchman's Head onterio canada";
		var logOneTime = "Wed May 4 1993 21:36:14 GMT-0400 (Eastern Daylight Time)" 
		sessionStorage.setItem("postH1", logOneHeader);
		sessionStorage.setItem("postT1", logOneText);
		sessionStorage.setItem("postD1", logOneTime);
		sessionStorage.setItem("numItems", 1);

		var logTwoHeader = "information";
		var logTwoText = "hello I am not the author from the last post. ";
		logTwoText += "I am the person who posted it though. ";
		logTwoText += "two weeks ago I got mail and it was in poor handwriting saying this ";
		logTwoText += "I have been dabaiting for the past few weeks weather or not to post about this ";
		logTwoText += "In the case this mail is for somereason a real distress I chose to post it word for word. ";
		logTwoText += "the other reason for this is due to the fact of not knowing if it contains any clues";
		var logTwoTime = "Wed May 4 1993 21:42:52 GMT-0400 (Eastern Daylight Time)"
		sessionStorage.setItem("postH2", logTwoHeader);
		sessionStorage.setItem("postT2", logTwoText);
		sessionStorage.setItem("postD2", logTwoTime);
		sessionStorage.setItem("numItems", Number(sessionStorage.getItem("numItems")) + 1);

		var logThreeHeader = "i dont think im alone";
		var logThreeText = "I have been hearing strange knoises down here. Its so cold ";
		logThreeText += "it sounds like people talking but to distant to understand what they are saying ";
		logThreeText += "sometime the wall opens to food. the first few times I preteneded like it didnt exist ";
		logThreeText += "but out of desperation it geets to a point you cant ignore it. ";
		logThreeText += "what is going on where am I who are these people in the walls and why is there this computer";
		var logThreeTime = "Sun Aug 1996 18:25:16 GMT-0400 (Eastern Daylight Time)"
		sessionStorage.setItem("postH3", logThreeHeader);
		sessionStorage.setItem("postT3", logThreeText);
		sessionStorage.setItem("postD3", logThreeTime);
		console.log(sessionStorage.getItem("postD3"));
		sessionStorage.setItem("numItems", Number(sessionStorage.getItem("numItems")) + 1);
		console.log("endOfLog");
		setTextMain();
	}
}
function deletePost()
{
	var num = sessionStorage.getItem("selectedPost")
	sessionStorage.setItem("postT" + num, "null");
	sessionStorage.setItem("postH" + num, "null");
}



