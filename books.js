(function() {
    "use strict";

    function ajaxFailure (ajax, exception) {
        console.log("There was an error making the ajax request: " + "\nStatus: " + ajax.status + "  "
          + ajax.statusText + "\nResponse: " + ajax.responseText);
    }

    function displayCategory() {
        var type = "list_category";
        new Ajax.Request("booklist.php",
            {
            method: "post",
            parameters: {type: type, json: false},
            //contentType: "text/xml",
            onSuccess: function (ajax) {
                var category = ajax.responseXML.getElementsByTagName("category");
                var i = 0;
