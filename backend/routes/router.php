<?php

// router.php (subito dopo require_once e prima di gestire le rotte)
header("Access-Control-Allow-Origin: https://scuolaribelle.netlify.app");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

// Gestione preflight CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../config/configjwt.php';
require_once __DIR__ . '/../controllers/AuthController.php';
require_once __DIR__ . '/../controllers/PostController.php';
require_once __DIR__ . '/../controllers/ContentController.php';
require_once __DIR__ . '/../controllers/ContactController.php';
require_once __DIR__ . '/../controllers/UserController.php'; 
require_once __DIR__ . '/../middleware/AuthMiddleware.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

// 🔐 Middleware di autenticazione JWT
$authMiddleware = new AuthMiddleware();

// ✅ ROTTE DI AUTENTICAZIONE
if ($uri === '/api/register' && $method === 'POST') {
    AuthController::register();
}
elseif ($uri === '/api/login' && $method === 'POST') {
    $auth = new AuthController();
    $auth->login();
}

// ✅ ROTTE CONTENUTI DINAMICI (università, facoltà, post)
elseif ($uri === '/api/universities' && $method === 'GET') {
    $controller = new ContentController($conn);
    $controller->getUniversities();
}
elseif ($uri === '/api/faculties' && $method === 'GET') {
    $controller = new ContentController($conn);
    $university_id = $_GET['university_id'] ?? null;
    $controller->getFaculties($university_id);
}
elseif ($uri === '/api/posts' && $method === 'GET') {
    $controller = new ContentController($conn);
    $university_id = $_GET['university_id'] ?? null;
    $faculty_id = $_GET['faculty_id'] ?? null;
    $controller->getPosts($university_id, $faculty_id);
}

// ✅ ROTTA PER INVIARE UN POST (protetta da JWT)
elseif ($uri === '/api/posts' && $method === 'POST') {
    $user_id = $authMiddleware->authenticate();
    if (!$user_id) return;

    PostController::create($conn, $user_id);
}

// ✅ ROTTA FORM CONTATTI
elseif ($uri === '/api/send-contact-message' && $method === 'POST') {
    $controller = new ContactController($conn);
    $controller->sendMessage();
}

// ✅ ROTTE USER PROTETTE DA JWT
elseif ($uri === '/api/user/profile' && $method === 'GET') {
    $user_id = $authMiddleware->authenticate();
    if (!$user_id) return;

    $controller = new UserController($conn);
    $controller->getProfile($user_id);
}

// ❌ ROTTA NON TROVATA
else {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'Endpoint non trovato']);
}
