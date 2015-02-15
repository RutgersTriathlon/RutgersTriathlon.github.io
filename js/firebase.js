function retrieveAndPopulatePracticeData(){
	/** VAR Initialization **/
	var firebaseReference = new Firebase("https://rutgerstriteam.firebaseio.com/Practices");
	var mondayPracticeData = "";
	var tuesdayPracticeData = "";
	var wednesdayPracticeData = "";
	var thursdayPracticeData = "";
	var fridayPracticeData = "";
	var saturdayPracticeData = "";
	var sundayPracticeData = "";

	/** VAR collection and view population from firebase **/
	firebaseReference.child("Monday").on("value", function(snapshot) {
		mondayPracticeData = snapshot.val();
		alert(mondayPracticeData);
	});
	firebaseReference.child("Tuesday").on("value", function(snapshot) {
		tuesdayPracticeData = snapshot.val();
		$('tuesdayPractice').val(tuesdayPracticeData);
	});
	firebaseReference.child("Wednesday").on("value", function(snapshot) {
		wednesdayPracticeData = snapshot.val();
		$('wednesdayPractice').val(wednesdayPracticeData);
	});
	firebaseReference.child("Thursday").on("value", function(snapshot) {
		thursdayPracticeData = snapshot.val();
		$('thursdayPractice').val(thursdayPracticeData);
	});
	firebaseReference.child("Friday").on("value", function(snapshot) {
		fridayPracticeData = snapshot.val();
		$('fridayPractice').val(fridayPracticeData);
	});
	firebaseReference.child("Saturday").on("value", function(snapshot) {
		saturdayPracticeData = snapshot.val();
		$('saturdayPractice').val(saturdayPracticeData);
	});
	firebaseReference.child("Sunday").on("value", function(snapshot) {
		sundayPracticeData = snapshot.val();
		$('sundayPractice').val(sundayPracticeData);
	});

	/* NOTE : if the practice data never returns then the data will remain blank */
}