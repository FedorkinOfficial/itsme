<?php

$method = $_SERVER['REQUEST_METHOD'];
header('Access-Control-Allow-Origin: http://itsmeapi');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Credentials: true');
header('Content-type: application/json');

require 'connect.php';
require 'function.php';

$q = $_GET['q'];
$params = explode('/', $q);

$type = $params[0];
$id = $params[1];

if ($method === 'GET'){
    if($type === 'users'){
        if(isset($id)){
            getUser($connect, $id);
        } else {
            getUsers($connect);
        } 
    } elseif ($type === 'companies') {
        getCompanies($connect);
    }
} elseif ($method === 'POST'){
    if ($type === 'users'){
        addUser($connect, $_POST);
    } elseif ($type === 'login'){
        Passpass($connect, $_POST);
    } elseif ($type === 'company'){
        createCompany($connect, $_POST);
    }
}




?>