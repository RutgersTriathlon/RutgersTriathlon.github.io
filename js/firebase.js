function retrieveAndPopulatePracticeData(){
     /** VAR Initialization **/
	var listItemPrefix = "<li class=\"list-group-item\">",listItemPostFix="</li>"
    var firebaseReference = new Firebase("https://rutgerstriteam.firebaseio.com/Practices");

      /** VAR collection and view population from firebase **/
	firebaseReference.on("value", function(snapshot) {
     	practiceData = snapshot.val();
     	document.getElementById("PracticeList").innerHTML = concatinatePracticeSchedule(practiceData);
	});

    function concatinatePracticeSchedule(practiwceData){
       return listItemPrefix.concat("<b>Monday: </b>",practiceData.Monday,listItemPostFix,
        listItemPrefix,"<b>Tuesday: </b>",practiceData.Tuesday,listItemPostFix,
        listItemPrefix,"<b>Wednesday: </b>",practiceData.Wednesday,listItemPostFix,
        listItemPrefix,"<b>Thursday: </b>",practiceData.Thursday,listItemPostFix,
        listItemPrefix,"<b>Friday: </b>",practiceData.Friday,listItemPostFix,
        listItemPrefix,"<b>Saturday: </b>",practiceData.Saturday,listItemPostFix,
    	listItemPrefix,"<b>Sunday: </b>",practiceData.Sunday,listItemPostFix);          
    }
}

function retrieveAndPopulateOfficerData(){
     /** VAR Initialization **/
	var listItemPrefix = "<li class=\"list-group-item\">",listItemPostFix="</li>"
    var firebaseReference = new Firebase("https://rutgerstriteam.firebaseio.com/Officers");

      /** VAR collection and view population from firebase **/
	firebaseReference.on("value", function(snapshot) {
     	officerData = snapshot.val();
     	document.getElementById("OfficerList").innerHTML = concatinateOfficerList(officerData);
	});

    function concatinateOfficerList(officerData){
        var officerListForDisplay = "";
       for(officer in officerData){
        var officerInformation = new Firebase('https://rutgerstriteam.firebaseio.com/Officers/'+officer);
        officerInformation.on('value', function(snapshotinner) {
            officerPosition = snapshotinner.val().Position;
        });
        officerListForDisplay = officerListForDisplay.concat(listItemPrefix,"<b>",officer,"</b>"," - ",officerPosition,listItemPostFix);
       }
       return officerListForDisplay;
    }
}

function retrieveAndPopulateRaceData(){
     /** VAR Initialization **/
    var listItemPrefix = "<li class=\"list-group-item\">",listItemPostFix="</li>"
    var firebaseReference = new Firebase("https://rutgerstriteam.firebaseio.com/Races");

      /** VAR collection and view population from firebase **/
    firebaseReference.on("value", function(snapshot) {
        raceListData = snapshot.val();
        document.getElementById("RaceList").innerHTML = concatinateRaceList(raceListData);
    });

    function concatinateRaceList(raceListData){
        var officerListForDisplay = "";
       for(race in raceListData){
        var raceListInformation = new Firebase('https://rutgerstriteam.firebaseio.com/Races/'+race);
        raceListInformation.on('value', function(snapshotinner) {
            raceInformation = snapshotinner.val().Information;
        });
        raceListForDisplay = officerListForDisplay.concat(listItemPrefix,"<b>",race,"</b>"," - ",raceInformation,listItemPostFix);
       }
       return raceListForDisplay;
    }
}