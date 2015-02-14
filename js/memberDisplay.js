    $(document).ready()
    {
      var locale = window.location.href;
      var nameStart = locale.indexOf("=");
      var memberName = locale.substring(nameStart+1,locale.length);

      if(memberName.charAt(0) == 'o')
      {
        memberName = memberName.substring(1,memberName.length);
        var dataRef = new Firebase('https://rutgerstriteam.firebaseio.com/Officers/'+memberName);
        dataRef.on('value', function(snapshot) {
          if(snapshot.val() === null){
            officers(memberName);
          } 
          else {
            var db = snapshot.val();
            //Loop over all the members and print them out
            //Send the members name to the next screen in order to access their profile
            $("#mystory").append('<p>'+db.Bio+'</p>');
            $("#funFact").append('<p>'+db.Fact+'</p>');
            $("#year").append('<p>'+db.Grad+'</p>');
            $("#pic").append('<image src="'+db.photo+'"></image></p>');
            memberName = memberName.replace(/%20/g," ");
            $('#name').append(memberName);
          }
          });
      }
      else if(memberName.charAt(0) == 'f')
      {
        memberName = memberName.substring(1,memberName.length);
        var dataRef = new Firebase('https://rutgerstriteam.firebaseio.com/PastMembers/'+memberName);
        dataRef.on('value', function(snapshot) {
          if(snapshot.val() === null){
            officers(memberName);
          } 
          else {
            var db = snapshot.val();
            //Loop over all the members and print them out
            //Send the members name to the next screen in order to access their profile
            $("#mystory").append('<p>'+db.Bio+'</p>');
            $("#funFact").append('<p>'+db.Fact+'</p>');
            $("#year").append('<p>'+db.Grad+'</p>');
            $("#pic").append('<image src="'+db.photo+'"></image></p>');
            memberName = memberName.replace(/%20/g," ");
            $('#name').append(memberName);
          }
        });
      }
      else{
        var dataRef = new Firebase('https://rutgerstriteam.firebaseio.com/Members/'+memberName);
        dataRef.on('value', function(snapshot) {
          if(snapshot.val() === null){
            officers(memberName);
          } 
          else {
            var db = snapshot.val();
            //Loop over all the members and print them out
            //Send the members name to the next screen in order to access their profile
            $("#mystory").append('<p>'+db.Bio+'</p>');
            $("#funFact").append('<p>'+db.Fact+'</p>');
            $("#year").append('<p>'+db.Grad+'</p>');
            $("#pic").append('<image src="'+db.photo+'"></image></p>');
            memberName = memberName.replace(/%20/g," ");
            $('#name').append(memberName);
          }
        });
      }
    }