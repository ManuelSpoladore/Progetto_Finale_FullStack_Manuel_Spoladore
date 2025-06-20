<?php
header("Access-Control-Allow-Origin: https://scuolaribelle.netlify.app");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

echo json_encode([
  "headers_sent" => headers_list(),
  "message" => "debug headers"
]);
