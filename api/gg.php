$secret = bin2hex(random_bytes(32));


// Create the token header
$header = json_encode([
    'typ' => 'JWT',
    'alg' => 'HS256'
]);

// Create the token payload
$payload = json_encode([
    'name' => 1593828222
    'pass' => 1,
    'role' => 'user'
]);

// Encode Header
$base64UrlHeader = base64_encode($header);

// Encode Payload
$base64UrlPayload = base64_encode($payload);

// Create Signature Hash
$signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $secret, true);


// Encode Signature to Base64Url String
$base64UrlSignature = base64_encode($signature);

// Create JWT
$jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;

echo "Your token:\n" . $jwt . "\n";

// split the token
$tokenParts = explode('.', $jwt);
$header = base64_decode($tokenParts[0]);
$payload = base64_decode($tokenParts[1]);
$signatureProvided = $tokenParts[2];


// build a signature based on the header and payload using the secret
$base64UrlHeader = base64_encode($header);
$base64UrlPayload = base64_encode($payload);
$signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $secret, true);
$base64UrlSignature = base64_encode($signature);

// verify it matches the signature provided in the token
$signatureValid = ($base64UrlSignature === $signatureProvided);

echo "Header:\n" . $header . "\n";
echo "Payload:\n" . $payload . "\n";


if ($signatureValid) {
    echo "The signature is valid.\n";
} else {
    echo "The signature is NOT valid\n";
}
