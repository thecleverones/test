function pageState(state){

	//SPLIT ELEMENTS - (MODULE|STATE-PRIMARYKEYID) - HOLD UP!?
	var elements  = state.split('|');
	var module    = elements[0];
	var subModule = elements[1];
	var primaryKeyID = '';
	var type = '';
	var path = window.location.pathname;

	$.ajax({
	  url: "modules/pageState.php",
	  type:"get",
	  data: {
						ajaxRequest: "pageState",
						module: module,
						subModule: subModule,
						primaryKeyID: primaryKeyID
					}

		success: function(response) {

			pageModule(response);

	  },

	  error: function(xhr) {

			logError(xhr);


	  }

	});

}

function pageModule(){




}

// dan was here :P

function logError(error){

	$.ajax({
		url: "modules/error/logError.php",
		type:"get",
		data: {
						ajaxRequest: "logError",
						error: encodeURIComponent(error)
					}

		success: function(response) {

			pageModule(response);

		},
	  error: function(xhr,error) {

			alert("An error occured logging there error, this is the 'logError' function error: '" + xhr + "'. This error originated from the following error: '" + error + "'.");

		}


}
