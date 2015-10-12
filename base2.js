//ensure .js file is linked to .html
console.log("Sanity Check: JS is working!");
//document is waiting for user input
$(document).ready(function(){
	  //I want to start my post count at 1
	  var count = 1;
	  //the OOP constructor below creates new post objects with user
	  //defined content, plus the current date and order number of post
	  function Post(content) {	
	  //publishedPosts variable sets up where the new content the user creates will be placed on the page.
	  var publishedPosts = '<div id="#published-post-item" >' + this.contents + '</div>';	
	  	//count is the order number of the post
		this.count = count;
		//content is created by the user in the input field.
		this.content = content;
		//Date is the date in which the new post was created. NOT SURE HOW TO ADD THIS TO POSTCONTENT!!
		this.date = new Date();
		//close Post function
	    }
	    //blogText input is waiting for a click or return key 
		//stroke to submit the value
	$('#new-tiny-post').submit(function(e) {
		e.preventDefault();
		var postContent = $('#blogText').val();
		var date = new Date();
		var day = date.getDay();
		var time = date.getTime();
		var dayNames = ['noday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		var displayDate = (date.getMonth()+1) + '/' + (date.getDate()) + '/' + date.getFullYear();
		new Post(postContent);
	  	if (postContent) {
			$("#published-post-list").prepend("<i>" + '<div class="list-group-item">' + count + "</i>" + "<br>" + "<b>" + postContent + "</b>" + "<br>" + "<i>" + (dayNames[date.getDay()]) + " " + displayDate + '</div>' + "</i>");
			count++;
			console.log(count);
		}
			console.log(Post);
			$('#blogText').val('');
	});
});	


//Below is my original code that I refactored (with help) into an OOP constructor.
// $(document).ready(function(){
// 	//blogText input is waiting for a click or return key 
// 	//stroke to submit the value
// 	$('#new-tiny-post').submit(function(e) {
// 		//prevent default action of submit form
// 		e.preventDefault();
// 			//postContent is the value you put into the input
// 			var postContent = $('#blogText').val();
// 			//publishedPosts places the postContent in a line of <ul> #published-post-list
// 			var publishedPosts = '<li class="published-post-item" >' + postContent + '</li>';
// 			//the line below adds the publishedPosts line we created to the <ul>
// 			$('#published-post-list').prepend(publishedPosts);
// 			//below we reset the value of our input field after submission
// 			$('#blogText').val('');
// 		});	
// });
