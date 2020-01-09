<?php
date_default_timezone_set("America/New_York");
ini_set( "display_errors", "On" );

/*********************************************************
*                                                        *
*                    GLOBAL VARIABLES                    *
*                                                        *
**********************************************************/
// a global variable, not declared in a function
$responseInfo; // used to return info to client
$connect; //connection-resource to mysql

$time = getdate();
if (isset($_POST) && $_POST["databundle"])
$orderinfo = json_decode($_POST["databundle"],true);

$responseInfo["serverdata"] = $orderinfo;
$responseInfo["serverstatus"] = "All is Good on the Server Side!";
$responseInfo["confirmnbr"] = $time["year"]. $time["mon"]. $time["mday"]. $time["hours"]. $time["minutes"]. $time["seconds"];

dbaseConnect();

if($connect)
{
insertOrderInfo();
}

header("Content-type: text/plain");
echo json_encode($responseInfo);




//confrimation number format
// {append scrambled category value combination RANDOMLY SELECTED!!! (color red: )}RORIDEO2018MMDDHHMMSS

/*********************************************************
*                                                        *
*                 CONNECT TO DATABASE via PDO            *
*    Establish a connection-resource to MySQL            *
*               PHP PDO Reference:                       *
*           http://php.net/manual/en/book.pdo.php        *
**********************************************************/
function dbaseConnect()
{
// use global keyword to refer to variables defined outside of functions
global $responseInfo;
global $connect;
$username = "patelshival";
$dbase = "patelshival_db1";
$host = "compsci.htps.us";
$password = "SFj897Cz";
$dbaseAuth = "mysql:host=$host;dbname=$dbase";

$connect = new PDO($dbaseAuth,$username,$password);

$responseInfo["PDO_errcode"] = $connect->errorCode();
$responseInfo["PDO_errinfo"] = $connect->errorInfo();
  
}//end dbaseConnect


/*********************************************************
*                                                        *
*                 INSERT ORDER INFORMATION               *
*         Insert customer order into orderinfo table     *
*                                                        *
**********************************************************/
function insertOrderInfo()
{
global $responseInfo;
global $connect;

//give value to order info fields.
$confnbr = "\"The Confirm Number\"";
$orderdate = "\"2019-01-08\"";
$size = "\"Order Size\"";
$color = "\"Order Color\"";
$cost = 56;

//build the sql statement
$qrystmt01 = <<<stmt
insert into orderinfo values ($confnbr,$orderdate,$size,$color,$cost)
stmt;

//execute the sql statement
$insertresult = $connect->query($qrystmt01);

//
if ($insertresult)
{
$responseInfo["ORDER_INSERT_STATUS"] = "Successful";
}
else
{
$responseInfo["ORDER_INSERT_STATUS"] = "Fail";
$responseInfo["INSERT_ERR_CODES"] = $connect->errorInfo();
}
}//end insertOrderInfo





?>