function clearNavBarClasses(){
    var joinNavBarItem = document.getElementById("joinNavBarItem");
    // var membersNavBarItem = document.getElementById("membersNavBarItem");
    var officersNavBarItem = document.getElementById("officersNavBarItem");
    var aboutNavBarItem = document.getElementById("aboutNavBarItem");
    joinNavBarItem.className = "";
    // membersNavBarItem.className = "";
    officersNavBarItem.className = "";
    aboutNavBarItem.className = "";
}

function updateNavbarToMembersPage(){
    var membersNavBarItem = document.getElementById("membersNavBarItem");
    clearNavBarClasses();

    membersNavBarItem.className = "dropdown active";
}

function updateNavbarToOfficersPage(){
    var officersNavBarItem = document.getElementById("officersNavBarItem");
    clearNavBarClasses();

    officersNavBarItem.className = "active";
}

function updateNavbarToIndoorPage(){
    var indoortriNavBarItem = document.getElementById("indoortriNavBarItem");
    clearNavBarClasses();

    indoortriNavBarItem.className = "active";
}

function updateNavbarToJoinPage(){
    var joinNavBarItem = document.getElementById("joinNavBarItem");
    clearNavBarClasses();

    joinNavBarItem.className = "active";
}

function updateNavbarToAboutPage(){
    var aboutNavBarItem = document.getElementById("aboutNavBarItem");
    clearNavBarClasses();

    aboutNavBarItem.className = "active";
}

function updateNavbarToPracPage(){
    var pracschedNavBarItem = document.getElementById("pracschedNavBarItem");
    clearNavBarClasses();

    pracschedNavBarItem.className = "active";
}

function updateNavbarToRacePage(){
    var raceNavBarItem = document.getElementById("raceschedNavBarItem");
    clearNavBarClasses();

    raceNavBarItem.className = "active";
}

function updateNavbarToResultsPage(){
    var resultsNavBarItem = document.getElementById("resultsNavBarItem");
    clearNavBarClasses();

    resultsNavBarItem.className = "active";
}

function updateNavbarToSponsorPage(){
    var sponsorNavBarItem = document.getElementById("sponsorNavBarItem");
    clearNavBarClasses();

    sponsorNavBarItem.className = "active";
}

function updateNavbarToResourcesPage(){
    var resourcesNavBarItem = document.getElementById("resourcesNavBarItem");
    clearNavBarClasses();

    resourcesNavBarItem.className = "dropdown active";
}

function updateNavbarToFAQsPage(){
    var faqsNavBarItem = document.getElementById("FAQsNavBarItem");
    clearNavBarClasses();

    faqsNavBarItem.className = "active";
}

function updateNavbarToswimresoPage(){
    var swimresoNavBarItem = document.getElementById("swimresoNavBarItem");
    clearNavBarClasses();

    swimresoNavBarItem.className = "active";
}

function updateNavbarTobikeresoPage(){
    var bikeresoNavBarItem = document.getElementById("bikeresoNavBarItem");
    clearNavBarClasses();

    bikeresoNavBarItem.className = "active";
}

function updateNavbarTorunresoPage(){
    var runresoNavBarItem = document.getElementById("runresoNavBarItem");
    clearNavBarClasses();

    runresoNavBarItem.className = "active";
}
