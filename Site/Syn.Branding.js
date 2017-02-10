var schoolName = 'Synergetic V68 College - Single Database';

//usage:

$(document).ready(function() {

    document.title = schoolName;
    $('#NavbarSchoolNameID').text(schoolName);
    $('#NavbarSchoolNameID').css('color', 'green');
	$('#SynNavBarHeaderID').css('background-color', 'green');
	$('.list-group-item.active').css('border-color', 'green');
    $('#BodyHeaderPanelSchoolNameID').text(schoolName);
		

    // links
    $("#linksDiv").append('<a href="https://hped800k.main.cda.com.au/synweb68" class="list-group-item">Staff Portal</a>');
    $("#linksDiv").append('<a href="https://hped800k.main.cda.com.au/portal68/" class="list-group-item">Parent Portal</a>');
    $("#linksDiv").append('<a href="https://hped800k.main.cda.com.au/eventbooking68/events.htm" class="list-group-item">Events</a>');
    $("#linksDiv").append('<a href="https://hped800k.main.cda.com.au/applicationportal68" class="list-group-item">Application Portal</a>');
    $("#linksDiv").append('<a href="https://hped800k.main.cda.com.au/webservice68" class="list-group-item">Admin > Mobile API</a>');
    $("#linksDiv").append('<a href="https://hped800k.main.cda.com.au/synapi68" class="list-group-item">Admin > Custom API</a>');
    $("#linksDiv").append('<a href="https://hped800k.main.cda.com.au/CoreAPI68" class="list-group-item">Admin > Core API</a>');
    $("#linksDiv").append('<a href="https://hped800k.main.cda.com.au/WebServiceTester68" class="list-group-item">Admin > Web Service Tester</a>');
    
    // read from the .json file added by Octopus
	// var jsonData = JSON.parse("SynergeticDeployStamp2.json");
    $.getJSON('SynergeticDeployStamp.json', function(data) {
        // data is a JavaScript object now. Handle it as such
		$('#VersionParagraphID').text("Simons Synergetic V68 College 2016   Version: " + data["ReleaseVersion"] + "  Last Updated: " + data["CompletedTime"]);
    });
});
	

