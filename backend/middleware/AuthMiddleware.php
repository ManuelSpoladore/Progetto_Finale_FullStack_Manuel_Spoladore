<?php
require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../config/configjwt.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function getBearerToken() {
    $headers = apache_request_headers();

    if (!isset($headers['Authorization'])) {
        return null;
    }

    // Expected format: "Bearer <token>"
    if (preg_match('/Bearer\s(\S+)/', $headers['Authorization'], $matches)) {
        return $matches[1];
    }

    return null;
}

function getAuthenticatedUserId() {
    $token = getBearerToken();

    if (!$token) {
        http_response_code(401);
        echo json_encode(['success' => false, 'message' => 'Token mancante o formato non valido']);
        exit;
    }

    try {
        $key = $_ENV['JWT_SECRET'];
        $decoded = JWT::decode($token, new Key($key, 'HS256'));
        
        if (!isset($decoded->user_id)) {
            throw new Exception("user_id mancante nel token");
        }

        return $decoded->user_id;

    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode(['success' => false, 'message' => 'Token non valido', 'error' => $e->getMessage()]);
        exit;
    }
}
