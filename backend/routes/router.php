<?php

header("Access-Control-Allow-Origin: https://scuolaribelle.netlify.app");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Config e JWT
require_once __DIR__ . '/../config/configjwt.php';
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../vendor/autoload.php';

// Middleware per autenticazione
require_once __DIR__ . '/../middleware/AuthMiddleware.php';

// Controller
require_once __DIR__ . '/../controllers/AuthController.php';
require_once __DIR__ . '/../controllers/UserController.php';
require_once __DIR__ . '/../controllers/ContactController.php';
require_once __DIR__ . '/../controllers/ContentController.php';
require_once __DIR__ . '/../controllers/PostController.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

// Normalizza URI: rimuove prefissi superflui
$uri = str_replace(['/backend/api', '/backend'], '', $uri);

// ROUTE PUBBLICHE
if ($uri === '/register' && $method === 'POST') {
    AuthController::register();
} elseif ($uri === '/login' && $method === 'POST') {
    $auth = new AuthController();
    $auth->login();
} elseif ($uri === '/universities' && $method === 'GET') {
    $content = new ContentController($conn);
    $content->getUniversities();
} elseif ($uri === '/faculties' && $method === 'GET') {
    if (!isset($_GET['university_id'])) {
        echo json_encode([]);
        exit;
    }
    $content = new ContentController($conn);
    $content->getFaculties($_GET['university_id']);
} elseif ($uri === '/contact' && $method === 'POST') {
    $contact = new ContactController($conn);
    $contact->sendMessage();
} elseif ($uri === '/posts' && $method === 'GET') {
    $content = new ContentController($conn);
    $university_id = $_GET['university_id'] ?? null;
    $faculty_id = $_GET['faculty_id'] ?? null;
    $content->getPosts($university_id, $faculty_id);
}

// ROUTE PROTETTE
elseif ($uri === '/user-profile' && $method === 'GET') {
    $user_id = getAuthenticatedUserId();
    UserController::getUserProfile();
} elseif ($uri === '/posts' && $method === 'POST') {
    $user_id = getAuthenticatedUserId();
    PostController::create($conn, $user_id);
}

// ROUTE NON TROVATA
else {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'Endpoint non trovato']);
}
