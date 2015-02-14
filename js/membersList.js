$(document).ready(){        
    var dataRef = new Firebase('https://rutgerstriteam.firebaseio.com/Officers');
    dataRef.on('value', function(snapshot) {
      if(snapshot.val() === null){
        alert('No Officers present in database');
      } 
      else {
        var db = snapshot.val();
        for(officer in db){
          if(db.hasOwnProperty(officer)){
            var officerTitle;
            var dataRef = new Firebase('https://rutgerstriteam.firebaseio.com/Officers/'+officer);
            dataRef.on('value', function(snapshotinner) {
              temp = officer + " - "+snapshotinner.val().Position;
            });
            $("#officers").append('<p><a href="member.html?name=o'+officer+'">'+temp+'</p>');
          }
        }
      }
    });

    //Add the current Members
    var dataRef = new Firebase('https://rutgerstriteam.firebaseio.com/Members');
    dataRef.on('value', function(snapshot) {
      if(snapshot.val() === null){
        alert('No data in the database');
      } 
      else {
        var db = snapshot.val();
        //Loop over all the members and print them out
        for(member in db){
          if(db.hasOwnProperty(member)){
            //Send the members name to the next screen in order to access their profile
            $("#currentMembers").append('<p><a href="member.html?name='+member+'">'+member+'</p>');
          }
        }
      }
    });

    //Add all the former members to the page
    var dataRef = new Firebase('https://rutgerstriteam.firebaseio.com/PastMembers');
    dataRef.on('value', function(snapshot) {
      if(snapshot.val() === null){
        alert('No data in the database');
      } 
      else {
        var db = snapshot.val();
        //Loop over all the members and print them out
        for(pastmember in db){
          if(db.hasOwnProperty(pastmember)){
            //Send the members name to the next screen in order to access their profile
            $("#former").append('<p><a href="member.html?name=f'+pastmember+'">'+pastmember+'</p>');
          }
        }
      }
    });
  }