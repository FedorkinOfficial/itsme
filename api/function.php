<?php


require 'auth.php';


$symbol=array('0','1','2','3','4','5','6','7','8','9','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','0','1','2','3','4','5','6','7','8','9');
for ($i=0; $i<32; $i++): 
    $rand_symbol=$symbol[rand(0,45)]; 
    $lic=$lic.$rand_symbol; 
endfor;












function getUser($connect, $id){
    $user = mysqli_query($connect,  "SELECT * FROM `users` WHERE `id` = '$id'");

    if(mysqli_num_rows($user) === 0){
        http_response_code(404);
        $res = [
            'status' => false,
            'message' => "User not found"
        ];
        echo json_encode($res);
    } else{
        $user = mysqli_fetch_assoc($user);
        echo json_encode($user);
    } 
}

function addUser($connect, $data){
    $pass = $data['pass'];
    $passwordHash = password_hash($pass, PASSWORD_DEFAULT);  
    $name = $data['name'];
    $isAlready = false;
    $companies = mysqli_query($connect,  "SELECT * FROM `users`");
    $compslist = [];   
    while($company = mysqli_fetch_assoc($companies)){
        $compslist[] = $company;
    }  
    foreach ($compslist as $key=>$user) {
        if($user['name'] == $name){
            $isAlready = true;
            break;  
        }
    }
    if($isAlready){
        http_response_code(208);
        $res = [
            'status' => false,
            'reason' => 'It already exists'
        ];
        echo json_encode($res);
    } elseif($name == '' || $pass == ''){
        http_response_code(406); 
        $res = [
            'status' => false,
            'reason' => 'Not everything is entered'
        ];
        echo json_encode($res);
    } else {
        $secret = bin2hex(random_bytes(32));
        mysqli_query($connect, "INSERT INTO `users` (`id`, `name`, `pass`, `access`, `numocomp`) VALUES (NULL, '$name', '$passwordHash', '$secret', 0)");
        http_response_code(201);    
        $res = [
            'status' => true
        ];
        echo json_encode($res);
    }
}

function Passpass($connect, $data){
    $name = $data['name'];
    $pass = $data['pass'];
    $companies = mysqli_query($connect,  "SELECT * FROM `users`");
    $compslist = [];   
    while($company = mysqli_fetch_assoc($companies)){
        $compslist[] = $company;
    }  
    foreach ($compslist as $key=>$user) {
        if($user['name'] == $name){ 
            $isPass = password_verify($pass, $user['pass']);
            if($isPass === true){
                http_response_code(201);                
                setcookie('token', encode($name, $user['id'], $user['access']), time()+40);
                $res = [
                      'status' => true,
                      'name' => $name,
                      'id' => $user['id'],
                      'result_code' => 1
                ];
                echo json_encode($res);
            } else {
                http_response_code(404);
                $res = [
                    'status' => false,
                    'result_code' => 0
                ];
                echo json_encode($res);
            } 
        } 
    }
}
function getUsers($connect){ 
    $companies = mysqli_query($connect,  "SELECT * FROM `users`");
    $compslist = [];
    while($company = mysqli_fetch_assoc($companies)){
        $compslist[] = $company;
    }
    foreach ($_COOKIE as $key=>$tok) {
        $token = $tok;
    }
    foreach (decodePayload($token) as $key=>$inf) {
        $id = $inf->id;
    }
    foreach ($compslist as $key=>$user) {       
        if($user['id'] == $id){
            $secret = $user['access'];
        }
    }
    
    if($_COOKIE){
        $res = [
            'status' => true,
            'info' => decodeJWT($token, $secret)
        ]; 
    } else {
        $res = [
            'status' => false,
            'info' => null,
        ];
    }
    echo json_encode($res);
}
function createCompany($connect, $data){
    $name = $data['name'];
    $companies = mysqli_query($connect,  "SELECT * FROM `users`");
    $compslist = [];
    while($company = mysqli_fetch_assoc($companies)){
        $compslist[] = $company;
    }
    foreach ($_COOKIE as $key=>$tok) {
        $token = $tok;
    }
    foreach (decodePayload($token) as $key=>$inf) {
        $id = $inf->id;
    }
    foreach ($compslist as $key=>$user) { 
        $numofcomp = $user['numocomp'];    
        if($user['id'] == $id){
            $secret = $user['access'];
        }
    }
    if($_COOKIE){
        mysqli_query($connect, "INSERT INTO `companies` (`id`, `name`, `access`) VALUES (NULL, '$name', '$secret')");
        mysqli_query($connect, "UPDATE `users` SET `numocomp`= $numofcomp + 1 WHERE id = $id");
        $servername = "localhost";
        $username = "root";
        $password = "root";
        $conn = mysqli_connect($servername, $username, $password);
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
        $sql = "CREATE DATABASE $name";
        if (mysqli_query($conn, $sql)) {
            $res = [
                'status' => true,
                'info' => decodeJWT($token, $secret)
            ];
        } else {
            $res = [
                'status' => false,
                'info' => null,
            ];
        }
    } else {
        $res = [
            'status' => false,
            'info' => null,
        ];
    }
    echo json_encode($res);
}

function getCompanies($connect){
    foreach ($_COOKIE as $key=>$tok) {
        $token = $tok;
    }
    foreach (decodePayload($token) as $key=>$inf) {
        $id = $inf->id;
    }
    $companies = mysqli_query($connect,  "SELECT * FROM `users`");
    $compslist = [];
    while($company = mysqli_fetch_assoc($companies)){
        $compslist[] = $company;
    }
    foreach ($compslist as $key=>$user) {  
        if($user['id'] == $id){
            $secret = $user['access'];
            $numofcomp = $user['numocomp'];
        }
    }
    $isHaveCompany = false;
    if($numofcomp > 0){
       $isHaveCompany = true;
    }
    $i = 0;
    $list = [];
    $comp = mysqli_query($connect,  "SELECT * FROM `companies`");
    $complist = [];
    while($compan = mysqli_fetch_assoc($comp)){
        $complist[] = $compan;
    }
    foreach ($complist as $key=>$sin) {  
        if($sin['access'] == $secret){
            $list[$i] = $sin['name'];
            $i += 1;
        }
    }

    if($_COOKIE){
        $res = [
            'status' => $isHaveCompany,
            'info' => $list
        ];
    } else {
        $res = [
            'status' => $isHaveCompany,
            'info' => null,
        ];
    }
    echo json_encode($res);
}
?>