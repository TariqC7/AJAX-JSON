(function() {
    "use strict";

    function ajaxFailure (ajax, exception) {
        console.log("There was an error making the ajax request: " + "\nStatus: " + ajax.status + "  "
          + ajax.statusText + "\nResponse: " + ajax.responseText);
    }
