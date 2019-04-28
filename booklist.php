<?php
header('Content-type: text/xml');
header('Pragma: public');
header('Cache-control: private');
header('Expires: -1');

function input($string=""){
    $string = htmlspecialchars($string);
    $string = trim($string);
    $string = stripslashes($string);
    return $string;
}

function fetchQuery($db, $sql){
    try {
        $smt = $db->prepare($sql);
        $smt->execute();
        $rows = $smt->fetchAll(PDO::FETCH_ASSOC);
        return $rows;
     } catch (PDOException $ex) {
        error_log($ex->getMessage(), 3, "errors.txt");
     }
}

if($_SERVER['REQUEST_METHOD'] == 'POST' ){
    $db = new PDO("mysql:dbname=books;host=localhost:81", "root");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $type = "";
    if (isset($_POST['type']) ) {
        $type = input($_POST['type']);
        $json = input($_POST['json']);
    }


