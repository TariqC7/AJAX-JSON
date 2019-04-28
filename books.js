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
                for (i = 0; i < data.length; i++) {
                    var name = data[i].name;
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
    
      function displayInCategory(category) {
        var type = "in_category";
        new Ajax.Request("booklist.php",
            {
            method: "post",
            parameters: {type: type, json: false, category: category},
            //contentType: "text/xml",
            onSuccess: function (ajax) {
                var book = ajax.responseXML.getElementsByTagName("book");
                //Add a p tag describng category
                var p = document.createElement("p");
                var textnode = document.createTextNode("Books in category '" + category + "':");
                p.appendChild(textnode);
                $("books").innerText = "";
                $("books").appendChild(p);
                var ul = document.createElement("ul");
                $("books").appendChild(ul);
                var i = 0;
                for (i = 0; i < book.length; i++) {
                    var id = book[i].getElementsByTagName("id")[0].firstChild.nodeValue;
                    var title = book[i].getElementsByTagName("title")[0].firstChild.nodeValue;
                    var author = book[i].getElementsByTagName("author")[0].firstChild.nodeValue;
                    var year = book[i].getElementsByTagName("year")[0].firstChild.nodeValue;
                    var item = title + ", by " + author + " (" + year + ")" ;
                    var li = document.createElement("li");
                    ul.appendChild(li);
                    li.innerHTML = li.innerHTML + item;
                }
             },
            onFailure: ajaxFailure
        });
    }
    
    function displayInCategoryJson(category) {
        var type = "in_category";
        new Ajax.Request("booklist.php",
            {
            method: "post",
            parameters: {type: type, json: true, category: category},
            //contentType: "application/json",
            onSuccess: function (ajax) {
                var data = JSON.parse(ajax.responseText);
                //Add a p tag describing category
                var p = document.createElement("p");
                var textnode = document.createTextNode("Books in category '" + category + "':");
                p.appendChild(textnode);
                $("books").innerText = "";
                $("books").appendChild(p);
                //Create ul and append ul to div
                var ul = document.createElement("ul");
                $("books").appendChild(ul);
                var i = 0;

