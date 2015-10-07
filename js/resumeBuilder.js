var bio = {

	"name": "Nik Mirko",
	"role": "Web Developer",
	"contacts":{
		"mobile": "+61 04 06 *** ***",
		"email": "nishmirko@icloud.com",
		"github": "NikMirko",
		"twitter": "nMikz",
		"location": "Adelaide"},
		"welcomeMessage": "Welcome to my online resumè! If you like what you see, please get in touch &uarr;",
		"skills":["Web and Graphic design using HTML/CSS, JS","Programming in Python, Java","Bilingual in English and Italian"],
		"bioPic": "images/me.jpg",
	display: function(){
		var formattedImage=HTMLbioPic.replace("%data%",bio.bioPic);
		$("#header").append(formattedImage);

		var formattedName=HTMLheaderName.replace("%data%",bio.name);
		var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
		$("#header").prepend(formattedName+formattedRole);

		var formattedWelcomeMsg=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		$("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);

		if (bio.skills.length>0){
			$("#header").append(HTMLskillsStart);
			for (skill in bio.skills){
				var formattedSkill=HTMLskills.replace("%data%",bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}

		$("#footerContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);

		}
}



var education={
		"schools":[
		{
			"name": "Brunel University",
			"location": "London, UK",
			"degree": "DipHE in Computing",
			"majors":"Computer Science - Software Eng.",
			"dates": "2014",
			"url": "http://www.brunel.ac.uk/"
		},
		{
			"name":"Professional Technical Institute Feltrinelli",
			"location":"Milan, Italy",
			"degree":"Diploma",
			"majors":"Industrial Electronics and Telecommunications",
			"dates":"2008",
			"url":""
		},
		{
			"name":"Gateway International School",
			"location":"Colombo, Sri Lanka",
			"degree":"GCSEs",
			"majors":"Subjects include English, Maths and others",
			"dates":"2004",
			"url":""
		}
		],
		"onlineCourses":[
		{
			"title":"Front-End Web Developer Nanodegree™",
			"school":"Udacity",
			"dates":"Currently enrolled",
			"url":"https://www.udacity.com/course/nd001"
		}

		],
		display: function(){

		$("#education").append(HTMLschoolStart);

		for (school in education.schools){

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedName = formattedName.replace("%url%", education.schools[school].url);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedName + formattedDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajors);

		}

		$("#education").append(HTMLonlineClasses);
		for (var course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			formattedTitle = formattedTitle.replace("%url%", education.onlineCourses[course].url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);

			$(".education-entry:last").append(formattedTitle + formattedSchool);
			$(".education-entry:last").append(formattedDates);
        //$(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
    	}


	}
}


var work={
		"jobs":[
		{
			"employer":"Self-employed",
			"location":"London, UK",
			"title":"Free Lancer",
			"dates":"2014",
			"description":"Promoting my services on online platforms such as fiverr.com and freelancer.com"
		},
		{
			"employer":"Lycamobile",
			"location":"Rome, Italy",
			"title":"Employee in Customer Service",
			"dates":"2009",
			"description":"Marketing and promoting telecommunication services while serving customers, in store and in public stalls. <br>Activating sim-cards for new customers after verifying the integrity of the clients’ documents. <br>Operating the till and accurately handling cash, credit/debit card and various other transactions"
		}
		],
		display: function(){

		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$(".work-entry:last").append(formattedEmployer+formattedTitle+formattedDates+formattedLocation+formattedDescription);
			}
		}
	}

var projectWork={
		"projects": [
		{
			"title": "World Cup Predictor ",
			"url": "http://www.world-cup-predictor.com",
			"dates": "2014",
			"description": "Implemented to save user predictions of the 2014 FIFA World Cup matches and giveaway prizes to the top 5 predictors",
			"tech": "[Tech used: HTML/CSS, PHP, MySql, Javascript, MVC, Amazon EC2]",
			"images":["https://db.tt/vZPtDYT3","https://db.tt/VClStkJW"],
			"objects":[]
		},
		{
			"title": "Year 3 Project II - Sleep monitor with an automated wakeup alarm using a Raspberry Pi",
			"url": "#",
			"dates": "2014",
			"description": "This project concentrated on developing a device for self-monitoring sleeping patterns and providing an automated wake up alarm for its user. The overall goal is to improve the wellbeing of the user by raising awareness of how bad sleeping habits may lead to poor sleep.",
			"tech": "[Tech used: Python, Linux, GnuPlot, Raspberry Pi Computer, WiFi dongle, PIR motion sensor module]",
			"images":["https://db.tt/CNH97yVz","https://db.tt/pDX79Dq2","https://db.tt/CFN5P1b8","https://db.tt/SHDrdsBU","https://db.tt/fbtubMPV"],
			"objects":[]
		},
		{
			"title": "Raspberry Pi - Micromouse",
			"url": "#",
			"dates": "2014",
			"description": "Assisted a Electronic Engineering student during the development and construction of a Micromouse robot by writing a Python script for the Raspberry Pi. The program allowed the RPi to interact with the infrared sensors to read the distance(s) and follow a \"left-follower algorithm\" to avoid obstacles and move autonomously.",
			"tech": "[Tech used: Python, Linux, Raspberry Pi Computer, WiFi dongle, Ultrasonic Sensor, motors]",
			"images":["https://db.tt/1l8c8IGA"],
			"objects":["https://www.youtube.com/embed/1OA9nW8CUDg"]
		},
		{
			"title": "Medical readings transmission - Network Computing (click to see the report)",
			"url": "https://db.tt/6kS9DFMj",
			"dates": "2013",
			"description": "Built a network computing application to demonstrate the transmission of data, from one terminal to another. The data that is required to be transmitted are readings from a set of medical devices.",
			"tech": "[Tech used: Java, Eclipse SDK]",
			"images":["https://db.tt/IXAVuWKO","https://db.tt/YmzGVuVS"],
			"objects":[]
		},
		{
			"title": "Usual Dose - Entertaining videos for all ages",
			"url": "http://www.usualdose.com",
			"dates": "2013",
			"description": "Curated collection of some of the best entertaining videos from the internet, <strike>updated daily!</strike>",
			"tech": "[Tech used: HTML/CSS, PHP, MySql, YouTube, SublimeVideo, Amazon EC2]",
			"images":["https://db.tt/jyAEZRVI","https://db.tt/t15ezjw9"],
			"objects":[]
		},
		{
			"title": "Battleships - Network Computing (click to see the report)",
			"url": "https://db.tt/zGWXWh6H",
			"dates": "2013",
			"description": "A command line interface battleships game built to be played by two people on separate computer terminals",
			"tech": "[Tech used: Java, Eclipse IDE]",
			"images":["https://db.tt/cMtNuvBy","https://db.tt/oR7tHhxd"],
			"objects":[]
		},
		{
			"title": "Year 3 Project I - Web App",
			"url": "#",
			"dates": "2013",
			"description": "Designed and built a Mail Room Manager web app to notify students about any new mail and to also log and track parcels that are ready to be collected at the University",
			"tech": "[Tech used: HTML/CSS, PHP, MySql]",
			"images":["https://db.tt/IZR1irLK","https://db.tt/QSaqTvzr"],
			"objects":[]
		},
		{
			"title": "Year 2 Group Project - Android App",
			"url": "#",
			"dates": "2012",
			"description": "The group Project involved the development of an Android application for the mobile-commerce of perfumes and fragrances for consumer of all ages.",
			"tech": "[Tech used: Eclipse IDE, Java, XML,Android Testing]",
			"images":["https://db.tt/ZZm4j3FP","https://db.tt/JSVN6vxC","https://db.tt/raEVfbOY","https://db.tt/nG3ZZ0sx","https://db.tt/1vBXTiec"],
			"objects":[]
		},
		{
			"title": "Rock-Paper-Scissors evolved game",
			"url": "#",
			"dates": "2011",
			"description": "Particpated a 24-hour codeathon sponsored by Samsung to develop apps for their new mobile OS called Bada. Embedded below is a demo of the game I built using during the event. It is a mash up of the traditional rock, paper and scissors game with new elements.",
			"tech": "[Tech : Adobe Photoshop, Adobe Flash, Bada SDK]",
			"images":["https://db.tt/PBpCZTxS","https://db.tt/X1PjJXXC"],
			"objects":["https://db.tt/tvq2H3qf"]
		},
		{
			"title": "Year 1 Group Project - Website",
			"url": "#",
			"dates": "2011",
			"description": "This project consisted of designing and implementing a fully functional website with information relating to 'Things to do around London' for new students arriving at the University. <br>Carried out main coding tasks of building the structure and layout of the site using HTML and CSS, ensuring that other group members were familiar with the code.",
			"tech": "",
			"images":["https://db.tt/RRrxX515"],
			"objects":[]
		},
		{
		"title": "My Designs",
		"url": "#",
		"dates": "",
		"description": "",
		"tech": "",
		"images":["https://db.tt/hclhTTHQ","https://db.tt/QJM01abV","https://db.tt/BYqJD1so","https://db.tt/l037NKhp"],
		"objects":[]
		},
		{
		"title": "Graphics and photo manipulation",
		"url": "#",
		"dates": "",
		"description": "",
		"tech": "",
		"images":["https://db.tt/dyUHW45m","https://db.tt/3GJ6pJVY","https://db.tt/7tD0BRe8"],
		"objects":[]
		}
		// {
		// "title": "",
		// "url": "#",
		// "dates": "",
		// "description": "",
		// "tech": "",
		// "images":[],
		// "objects":[]
		// }

		],
		display: function(){
		for (project in projectWork.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedTitle=HTMLprojectTitle.replace("%data%", projectWork.projects[project].title);
			formattedTitle = formattedTitle.replace("%url%", projectWork.projects[project].url);

			var formattedDates = HTMLprojectDates.replace("%data%", projectWork.projects[project].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projectWork.projects[project].description);
			var formattedTech = HTMLprojectTech.replace("%data%", projectWork.projects[project].tech);

			//var formattedImage = HTMLprojectImage.replace("%data%", projectWork.projects[project].images[0]);

			if (projectWork.projects[project].images.length>0){
				var startPoloroid = '<div id="polaroid"><div class="project-entry-img"></div></div>';
				$(".project-entry:last").append(startPoloroid);
				for (image in projectWork.projects[project].images){
					var formattedImage = HTMLprojectImage.replace("%data%", projectWork.projects[project].images[image]);

					$(".project-entry-img:last").append(formattedImage);
				}

			}
			if (projectWork.projects[project].objects.length>0){
				for (object in projectWork.projects[project].objects){
					var formattedObject = HTMLprojectObject.replace("%data%", projectWork.projects[project].objects[object]);

					$(".project-entry-img:last").append(formattedObject);
				}
			}


			$(".project-entry:last").prepend(formattedTitle + formattedDates + formattedDescription);
			$(".project-entry:last").append(formattedTech);

			}
		}
}

bio.display();
work.display();
projectWork.display();
education.display();

$("#mapDiv").append(googleMap);