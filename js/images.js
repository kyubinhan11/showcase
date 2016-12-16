
/*
 *  This file contains the javascript code for our gallery
 */

// variables for all of the templates so we only have to compile
// them once on page load and can then use the same compiled 
// templates many times

var slideshow_template;

// variables to store the current displayed album and photo
var slideshow_album = gallery.albums[0];


// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
	var html = template(data);
	$('#content').html(html);
}

// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run in here
$(document).ready(function(){
	//compile the templates ready for use
	var source = $("#slideshow-template").html();
	slideshow_template = Handlebars.compile(source);

	// display the slideshow template using the current album
	showTemplate(slideshow_template, slideshow_album);

});