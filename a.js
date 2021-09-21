var $_str = "", txt = "", hold = "", i = 0, tf = 0, input_1, xa, xp, p;
function wc(){
	document.body.innerHTML = "";
	txt = "Welcome to MPOP Reverse II Website, to use and explore this website, kindly type \"help\" without any quotation marks in the input box below.";
	expo();
}
function input(){
	tf = 1;
   var label = document.createElement("label");
   label.innerHTML = "> ";
	input_1 = document.createElement("input");
	input_1.placeholder = "Enter command";
	input_1.autofocus = "true";
	input_1.addEventListener("keyup",function(event){
		if(event.keyCode === 13){
			if(input_1.value == ""){
				alert("This can\'t be empty");
			}else{
				event.preventDefault();
				input_1.readOnly = "readonly";
				hold = input_1.value.toLowerCase();
				$_str = input_1.value;
				expo(input_1.value.toLowerCase());
			}
		}
	});
   document.body.appendChild(label);
	document.body.appendChild(input_1);
   document.body.appendChild(document.createElement("br"));
}
function expo(attr){
	p = document.createElement("label");
	if(attr == "clear"){
		document.body.innerHTML = "";
		input();
	}else{
		if(tf !== 0){
			txt = ret(attr);
		}
		i = 0;
		typing();
	}
	document.body.appendChild(p);
}
function typing(){
	if(i < txt.length){
		p.style.borderRightStyle = "solid";
		p.innerHTML += txt.charAt(i);
		i++;
		window.scrollTo(0,document.querySelector("body").scrollHeight);
		setTimeout(typing,8);
	}else{
		p.style.borderRightStyle = "none";
		p.style.display = "block";
		coms();
		input();
		window.scrollTo(0,document.querySelector("body").scrollHeight);
	}
}
function ret(text){
	if(text == "about"){
		return "MPOP (Master Piece of Paper) Reverse II, is a screen name developer of RyannKim327. It was originated from MPOP Modifiers Group, a small group modifiers since 2016. The development of MPOP Reverse II, making more improvement. The MPOP came from a teacher who ask to make a master piece, in a piece of paper. Way back September 3 2016, I make my first remodding skills, from Psiphon Skin Mods, upto Facebook Lite mods. Until I learn to inject handler settings. March 2018, nearly April, I learn how to develop my very own application. Until now, I still learning, and making developments.";
	}else if(text == "help"){
		return "The commands are now all case insensitive, the following are the command you may use.";
	}else if(text == "links"){
		return "This are the links developed under MPOP Reverse II";
	}else if(text == "terms and conditions"){
		return "Before asking me any help, kindly read this terms and conditions.";
	}else if(text == "contact"){
		return "Keep in mind that we are also in the online platforms. The following are the links where you may found us.";
	}else if(text == "tagline"){
		return "The tagline of MPOP Reverse II is also the tagline of Team ModDev before. The We modify, We develop, We share, We Credits, was developed with inspirations from different platforms and people around the world. We share the knowledge as what we have, we credited the people whom must been credited. The modification and the development we've made is just came from advance study. The development of the solo-team is still there, but due to lack of time, we didn't develop some of our pending projects.";
	}else if(text == "developer"){
		return "The developer of this website is also the developer of all MPOP Reverse II websites. As under the name of Ryann Kim Sesgundo, the one behind this project. The development for this website is called by him as a solo-group project, where he only ask for feedbacks from different people around the country ane for those who want to see and visit. The development of this scratch website came from different template until he remember the CMD (Command Prompt) and Termux, Terminal Emulator.";
	}else{
		return $_str + " is not a command. It might be wrong or literally invalid.";
	}
}
function coms(){
	if(hold == "links"){
		var linkarr = ["https://sulatbaybayin.coolpage.biz","https://mpoprevii.6te.net","https://19n0r3.ueuo.com"];
		var namearr = ["Sulat Baybayin X","MPOP Reverse II","19N0R3 Poetry Website"];
		for(j = 0; j < linkarr.length; j++){
			xa = document.createElement("a");
			xa.href = linkarr[j];
			xa.innerHTML = ((j + 1) + ". " + namearr[j]);
			xa.style.display = "block";
			document.body.appendChild(xa);
		}
	}else if(hold == "help"){
		var arr = ["about","clear","contact","developer","help","links","tagline","terms and conditions"];
		for(j = 0; j < arr.length; j++){
			xp = document.createElement("p");
			xp.innerHTML = (j + 1) + ". " + arr[j];
			document.body.appendChild(xp);
		}
	}else if(hold == "contact"){
		var linkarr = ["https://www.facebook.com/430162777828490","https://www.facebook.com/114879103482143","https://www.facebook.com/101484375409392","https://sulatbaybayin.coolpage.biz/chatbox"];
		var namearr = ["19N0R3 Poetry","AD Century (Feedback facebook page)","Hello World","Sulat Baybayin: Chatbox"];
		for(j = 0; j < linkarr.length; j++){
			xa = document.createElement("a");
			xa.href = linkarr[j];
			xa.innerHTML = ((j + 1) + ". " + namearr[j]);			
			xa.style.display = "block";
			document.body.appendChild(xa);			
		}
	}else if(hold == "terms and conditions"){
		var marr = ["Help others, for those who want to learn, and be a better coder and/or programmer, I wanna you to share your knowledge, this would be a great pleasure of mine.","Never add and/or mention my name, from REAL ACCOUNT, up to DUMMIES, and also the HangDroid PH and MPOP Reverse II in any kind of platforms and media. Just give my name if they need help.","Never give me any credits, instead do the first condition.","Making me as an anonymous is a huge help for me, not to avoid them, but to avoid popularity.","Thank me if you're done, or I'll helped you."];
		for(j = 0; j < marr.length; j++){
			xp = document.createElement("p");
			xp.innerHTML = (j + 1) + ": " + marr[j];
			document.body.appendChild(xp);
		}
	}
}
