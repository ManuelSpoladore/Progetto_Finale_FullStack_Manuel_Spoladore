<?php
require_once __DIR__ . '/../config/database.php';
class PostController {
    public static function create($conn, $user_id) {
        $data = json_decode(file_get_contents("php://input"));

        $title = trim($data->title ?? '');
        $content = trim($data->content ?? '');
        $university_id = $data->university_id ?? null;
        $faculty_id = $data->faculty_id ?? null;

        if (empty($title) || empty($content) || !$university_id || !$faculty_id) {
            echo json_encode(['success' => false, 'message' => 'Tutti i campi sono obbligatori']);
            return;
        }

        $stmt = $conn->prepare("
            INSERT INTO posts (user_id, university_id, faculty_id, title, content)
            VALUES (?, ?, ?, ?, ?)
        ");
        $stmt->bind_param("iiiss", $user_id, $university_id, $faculty_id, $title, $content);

        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Post pubblicato']);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Errore nel salvataggio',
                'error' => $stmt->error
            ]);
        }
    }
}
