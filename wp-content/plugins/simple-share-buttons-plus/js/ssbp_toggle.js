jQuery(document).ready(function(){
	
	// upon clicking the share text
	jQuery('.ssbp-share-text').click(function () {
		
		jQuery( ".ssbp-container" ).fadeToggle(500);
    	jQuery(".ssbp-share-text").toggleClass("ssbp-active");
	});

}); 