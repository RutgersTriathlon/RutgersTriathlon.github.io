function retrieveScheduleData(){
	var firebaseReference = new Firebase("https://rutgerstriteam.firebaseio.com/Practices");
	firebaseReference.child("Monday").on("value", function(snapshot) {
  		alert(snapshot.val());
	});

}