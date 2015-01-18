//-------------------------------------------------------------------------------------------------------------
var bio = {
	"name" : "Michael Neal",
	"role" : "Web Developer",
	"contacts" : {
      	"mobile": "999-999-9999",
      	"email": "student@udacity.com",
      	"github": "MichaelNeal",
      	"blog":"none",
      	"twitter": "@hokum",
      	"location": "Atlanta, GA"
     },
	"welcomeMessage": "Please hire me.",
	"skills": [
		{
			"skill":"Problem Causing",
			"logo": "images/problem-solve.jpg"
		},
		{
			"skill":"Decision Making",
			"logo":"images/leader.png"
		},
		{
			"skill":"Team Leader",
			"logo": "images/learning.png"
		},
		{
			"skill":"Hokum",
			"logo":"images/client.png"
		}
		
	],
	"biopic": "http://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png",   
	"display": function displayBio() {

		$('#header').prepend(HTMLheaderRole.replace("%data%", bio.role));
		$('#header').prepend(HTMLheaderName.replace("%data%", bio.name));

		$('#topContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$('#topContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
		$('#topContacts').append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$('#topContacts').append(HTMLgithub.replace("%data%", bio.contacts.github));
		$('#topContacts').append(HTMLblog.replace("%data%", bio.contacts.blog));
		$('#topContacts').append(HTMLlocation.replace("%data%", bio.contacts.location));


		$('#header').append(HTMLbioPic.replace("%data%", bio.biopic));
		$('#header').append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
		$(".biopic").css({"max-height":"96px","width":"58px","overflow":"hidden"});
		
		//skills
		$('#header').append(HTMLskillsStart);
		for (skill in bio.skills) {
			var skillhtml = HTMLskills.replace("%data%", bio.skills[skill].skill);
			$('#skills').append(skillhtml.replace("%logo%", bio.skills[skill].logo));
		}
	}
};

var education = {
	"schools": [
		{
			"name": "ITT Technical Institute",
			"location": "Nashville, Tennessee",
			"degree": "Associates",
			"majors": ["Electronics"],
			"dates": 1994, 
			"url": "http://itt-tech.edu/"
		}

	 ],
	"onlineCourses": [
		{
			"title": "Rails for Zombies",
		    "school": "Code School",
		    "date": 2013,
		    "url": "http://railsforzombies.org/"
		},
		{
			"title": "Rails for Zombies2",
		    "school": "Code School",
		    "date": 2013,
		    "url": "https://www.codeschool.com/courses/rails-for-zombies-2"
		},
		{
			"title": "Front-End Web Developer Nanodegree",
		    "school": "Udacity",
		    "date": 2015,
		    "url": "https://www.udacity.com/"
		}
	],
	display: function displayEducation() {
		if (education.schools === undefined || education.schools.length < 0) {
			return;
		}
		for (school in education.schools) {
			HTMLschoolName.replace("%data%", education.schools[school].name) + 	HTMLschoolDegree.replace("%data%", education.schools[school].degree)
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append( HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree) );
			$('.education-entry:last').append( HTMLschoolDates.replace("%data%", education.schools[school].dates) );
			$('.education-entry:last').append( HTMLschoolLocation.replace("%data%", education.schools[school].location) );
			$('.education-entry:last').append( HTMLschoolMajor.replace("%data%", education.schools[school].majors) );
		}

		if (education.onlineCourses === undefined || education.onlineCourses.length < 0) {
			return;
		}


		$('#education').append(HTMLonlineClasses);
		$('#education').append(HTMLschoolStart);

		for (course in education.onlineCourses) {

			var titlehtml = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);

			$('.education-entry:last').append( titlehtml.replace("%courseurl%", education.onlineCourses[course].url) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school) );
			$('.education-entry:last').append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].date));
		}

	}
};
var work = {
	"jobs":
	    [{
	     	"employer": "ATT",
	     	"title": "Sr Sourcing Specialist",
	     	"location": "Atlanta, Ga",
	     	"dates": "2014-",
	     	"description": "- Responsible for restoration of network outages.<br>\
							- Management of personel during outages. <br> \
							- Ensured Network Reliability. <br> \
							- Documentaion of outages and reasons behind the outages."
	    },
	    {
	    	"employer": "ATT",
	     	"title": "DWDM Electronic Surveillance Shift Lead",
	     	"location": "Atlanta, Ga",
	     	"dates": "20012-2014",
	     	"description": "- Responsible for maintaining dense wave division multiplexors.<br>\
							- Managed peers and their workload to ensure problems were resolved in a timely manner.<br>\
							- Ensured work was performed in a timely manner and within parameters.<br>\
							- Worked with upper management to improve workflow process."
	    }],

	"display": function displayWork() {
		if (work.jobs === undefined || work.jobs.length < 0) {
			return;
		}

		for (job in work.jobs) {
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer)+HTMLworkTitle.replace("%data%", work.jobs[job].title));
			$('.work-entry:last').append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
			$('.work-entry:last').append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
			$('.work-entry:last').append(HTMLworkDescription.replace("%data%", work.jobs[job].description));

		}
	}
};


var projects = {
	"projects": [
		{
		  "title": "Sample Project 1",
	      "dates": "2014" ,
	      "description": "Who moved my cheese cheey feet cauliflower cheese. Queso taleggio when the cheese comes out everybod'y's happy airedale ricotta cheese and wine paneer camembert de normande. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Har cheese blue castello halloumi parmeasan say cheese stinking bishop jarlsberg. ",
	      "images": ["http://www.usaopolygames.com/futurama/image/gameinfo/full-gameboard.jpg"]
		}
	],
	"display": function displayProjects() {
		if (projects.projects === undefined || projects.projects.length < 0) {
			return;
		}

		var proj = projects.projects;
		for (p in proj) {

			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", proj[p].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", proj[p].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", proj[p].description));

			if (proj[p].images !== undefined && proj[p].images.length > 0) {

				for (img in proj[p].images) {

					$(".project-entry:last").append(HTMLprojectImage.replace("%data%", proj[p].images[img]));
				}

			}
		}

	}
};
//---------------------------------------------------------------------------------------------------------------------------------------
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
initializeMap();
displayFooter(bio.contacts);

//-----------------------------------------------------------------------------------------------------------------------------------
function displayFooter(contact_list) {
	if (contact_list === undefined || contact_list.length < 0) {
		return;
	}

	$('#footerContacts').append(HTMLmobile.replace("%data%", contact_list.mobile));
	$('#footerContacts').append(HTMLemail.replace("%data%", contact_list.email));
	$('#footerContacts').append(HTMLtwitter.replace("%data%", contact_list.twitter));
	$('#footerContacts').append(HTMLgithub.replace("%data%", contact_list.github));
	$('#footerContacts').append(HTMLblog.replace("%data%", contact_list.blog));
	$('#footerContacts').append(HTMLlocation.replace("%data%", contact_list.location));
}

function inName() {

	var namearr = bio.name.split(" ");
	var fname 	= namearr[0].toLowerCase();
	var lname 	= namearr[1].toUpperCase();

	namearr[0]	= fname[0].toUpperCase() + fname.slice(1);
	namearr[1]	= namearr[1].toUpperCase();
	console.log(namearr.join(" "));
	return namearr.join(" ");
}


function scrollPage(e) {
	e.preventDefault();
	var target = $("#"+$(this).attr("href").replace("#",""));

	$("html, body").stop().animate({
		scrollTop: target.offset().top

	}, 1000);

}
$(".project-entry > img").css({"width":"66px","height":"66px"});
 $("#header").css("background"," -webkit-linear-gradient(left, #484848, #000000)"); /* For Safari 5.1 to 6.0 */
 $("#header").css("background","-o-linear-gradient(right, #484848, #000000)"); /* For Opera 11.1 to 12.0 */
 $("#header").css("background","-moz-linear-gradient(right, #484848, #000000)"); /* For Firefox 3.6 to 15 */
 $("#header").css("background","linear-gradient(to right, #484848 , #000000)"); /* Standard syntax (must be last) */
 $("#footerContacts").css("background"," -webkit-linear-gradient(left, #484848, #000000)"); /* For Safari 5.1 to 6.0 */
 $("#footerContacts").css("background","-o-linear-gradient(right, #484848, #000000)"); /* For Opera 11.1 to 12.0 */
 $("#footerContacts").css("background","-moz-linear-gradient(right, #484848, #000000)"); /* For Firefox 3.6 to 15 */
 $("#footerContacts").css("background","linear-gradient(to right, #484848 , #000000)"); /* Standard syntax (must be last) */
