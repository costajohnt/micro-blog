console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	//blogText input is waiting for a click or return key 
	//stroke to submit the value
	$('#new-tiny-post').submit(function(e) {
		//prevent default action of submit form
		e.preventDefault();
			//postContent is the value you put into the input
			var postContent = $('#blogText').val();
			//publishedPosts places the postContent in a line of <ul> #published-post-list
			var publishedPosts = '<li class="published-post-item" >' + postContent + '</li>';
			//the line below adds the publishedPosts line we created to the <ul>
			$('#published-post-list').prepend(publishedPosts);
			//below we reset the value of our input field after submission
			$('#blogText').val('');
		});	
});

// $('#searchButton').text("");


	// $.get('#blogText', function (data) {
	// 		console.log(data);
// 	// 	});
// if ($('#todo-content').val().trim().length > 0) {
//       var todoContent = $('#todo-content').val();
//       var newTodo = '<li class="list-group-item">' + todoContent + '</li>';
//       $('#todos').append(newTodo);