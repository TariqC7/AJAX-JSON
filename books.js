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
                for (i = 0; i < category.length; i++) {
                    var name = category[i].getElementsByTagName("name")[0].firstChild.nodeValue;
                    var radioHtml = "<input type='radio' name='choice' id='" + i + "' value='" + name +"'>" + name;
                    var radioFragment = document.createElement("div");
                    radioFragment.innerHTML = radioHtml;
                    var labelHtml = "<label for='" + i + "'>"+name+"</label>";
                    var labelFragment = document.createElement("div");
                    labelFragment.innerHTML = labelHtml;
                    $("category").appendChild(radioFragment.firstChild);
                    $("category").appendChild(labelFragment.firstChild);
                }
            },
            onFailure: ajaxFailure
        });
    }
    
    function displayCategoryWithJson() {
        var type = "list_category";
        new Ajax.Request("booklist.php",
            {
            method: "post",
            parameters: {type: type, json: true},
            //contentType: "application/json",
            onSuccess: function (ajax) {
                var data = JSON.parse(ajax.responseText);
                var i = 0;
