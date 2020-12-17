<?php

function encode($name, $id, $secret){
    $header = json_encode([
        'typ' => 'JWT',
        'alg' => 'HS256'
    ]);
    $payload = json_encode([
        'name' => $name,
        'id' => $id,
        'role' => 'user'
    ]);
    $base64UrlHeader = base64_encode($header);
    $base64UrlPayload = base64_encode($payload);
    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $secret, true);
    $base64UrlSignature = base64_encode($signature);
    $jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
    return $jwt;
}
function decodePayload($token){
    $tokenParts = explode('.', $token);
    $payload = base64_decode($tokenParts[1]);
    $kk = [];
    $kk[] = json_decode($payload);
    return $kk;
}
function decodeJWT($token, $secret){
    $tokenParts = explode('.', $token);
    $header = base64_decode($tokenParts[0]);
    $payload = base64_decode($tokenParts[1]);
    $signatureProvided = $tokenParts[2];
    $base64UrlHeader = base64_encode($header);
    $base64UrlPayload = base64_encode($payload);
    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $secret, true);
    $base64UrlSignature = base64_encode($signature);
    $signatureValid = ($base64UrlSignature === $signatureProvided);
    if ($signatureValid) {
        return true;
    } else {
        return false;
    }
}
?>