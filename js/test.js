        //Add the current Members
        var dataRef = new Firebase('https://rutgerstriteam.firebaseio.com/Members');
        dataRef.on('value', function(snapshot) {
        if(snapshot.val() === null)
        {
          alert('No data in the database');
        } 
        else 
        {
          var db = snapshot.val();
          //Loop over all the members and print them out
          for(member in db)
          {
              if(db.hasOwnProperty(member))
              {
                      //Send the members name to the next screen in order to access their profile
                      $("#currentMembers").append('<p><a href="member.html?name='+member+'">'+member+'</p>');
                      console.log(member);
              }
          }
        }
      });