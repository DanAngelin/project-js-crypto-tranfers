<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$url = "https://openapiv1.coinstats.app/coins?limit=5";
$apiKey = "*************************";

$options = [
    "http" => [
        "header" => "Accept: application/json\r\n" .
                    "X-API-KEY: $apiKey\r\n"
    ]
];

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

if ($response === FALSE) {
    http_response_code(500);
    echo json_encode(["error" => "An error occurred"]);
    exit;
}
print_r($response);exit;
header('Content-Type: application/json');
echo $response;
?>