console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$('#new-tiny-post').submit(function(e) {
		e.preventDefault();
		// console.log("clicking submit works!");
			var postContent = $('#blogText').val('');
			var publishedPosts = '<li class="published-post-item">' + postContent + '</li>';
			$('#published-post-list').append(publishedPosts);
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