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

