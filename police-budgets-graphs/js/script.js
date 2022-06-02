/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	//jquery code here

	var deptleng = departments.length;

	for (var i=0; i<deptleng; i++) {
		console.log(departments[i].filename)
		$('.countydrop').append('<p class="department" numb='+i+'>'+ departments[i].name +'</p>')

	}

	$('.department').click(function(){
		var dept_numb = $(this).attr("numb")
		console.log(dept_numb)


		$('.chart img').attr("src", 'plots/' + departments[dept_numb].filename + '_plot.png')
		$('#myDropdown').removeClass('show')
	});



}); //end document.ready block

function myFunction() {
	  document.getElementById("myDropdown").classList.toggle("show");
	}

	function filterFunction() {
	  var input, filter, ul, li, a, i;
	  input = document.getElementById("myInput");
	  filter = input.value.toUpperCase();
	  div = document.getElementById("myDropdown");
	  p = div.getElementsByTagName("p");
	  for (i = 0; i < p.length; i++) {
	    txtValue = p[i].textContent || p[i].innerText;
	    if (txtValue.toUpperCase().indexOf(filter) > -1) {
	      p[i].style.display = "";
	    } else {
	      p[i].style.display = "none";
	    }
	  }
	}