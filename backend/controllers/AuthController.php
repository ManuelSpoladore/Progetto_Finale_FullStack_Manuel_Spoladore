<?php

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../vendor/autoload.php';  

use Firebase\JWT\JWT;  

class AuthController {
    public static function register() {
        $input = json_decode(file_get_contents('php://input'), true);

        $name = $input['name'] ?? '';
        $surname = $input['surname'] ?? '';
        $username = $input['username'] ?? '';
        $mail = $input['mail'] ?? '';
        $password = $input['password'] ?? '';
        $university = $input['university_id'] ?? '';
        $faculty = $input['faculty_id'] ?? '';

        if (empty($name) || empty($surname) || empty($username) || empty($mail) || empty($password) || empty($university) || empty($faculty)) {
            echo json_encode(['success' => false, 'message' => 'Tutti i campi sono obbligatori']);
            return;
        }

        if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(['success' => false, 'message' => 'Indirizzo mail non valido']);
            return;
        }

        global $conn;

        // Check email
        $stmt = $conn->prepare("SELECT id FROM users WHERE mail = ?");
        if (!$stmt) {
            echo json_encode(['success' => false, 'message' => 'Errore nella query email']);
            return;
        }
        $stmt->bind_param("s", $mail);
        $stmt->execute();
        $stmt->store_result();
        if ($stmt->num_rows > 0) {
            echo json_encode(['success' => false, 'message' => 'Email già registrata']);
            return;
        }
        $stmt->close();

        // Check username
        $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
        if (!$stmt) {
            echo json_encode(['success' => false, 'message' => 'Errore nella query username']);
            return;
        }
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->store_result();
        if ($stmt->num_rows > 0) {
            echo json_encode(['success' => false, 'message' => 'Username già registrato']);
            return;
        }
        $stmt->close();

        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $conn->prepare("INSERT INTO users (name, surname, username, mail, password, university_id, faculty_id) VALUES (?, ?, ?, ?, ?, ?, ?)");
        if (!$stmt) {
            echo json_encode(['success' => false, 'message' => 'Errore nella query insert']);
            return;
        }

        $stmt->bind_param("sssssss", $name, $surname, $username, $mail, $hashed_password, $university, $faculty);

        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Registrazione completata']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Errore durante la registrazione']);
        }

        $stmt->close();
        $conn->close();
    }

    public function login()
    {
        global $conn; 

        $input = json_decode(file_get_contents('php://input'), true);

        $username = $input['username'] ?? '';
        $password = $input['password'] ?? '';

        if (empty($username) || empty($password)) {
            echo json_encode(['success' => false, 'message' => 'Inserisci username e password']);
            return;
        }

        $stmt = $conn->prepare("
            SELECT u.id, u.username, u.password,
                   u.university_id, u.faculty_id,
                   un.name AS university,
                   f.name AS faculty
            FROM users u
            JOIN universities un ON u.university_id = un.id
            JOIN faculties f ON u.faculty_id = f.id
            WHERE u.username = ?
        ");
        if (!$stmt) {
            echo json_encode(['success' => false, 'message' => 'Errore SQL: ' . $conn->error]);
            return;
        }

        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 0) {
            echo json_encode(['success' => false, 'message' => 'Utente non trovato']);
            return;
        }

        $user = $result->fetch_assoc();

        if (password_verify($password, $user['password'])) {
            $key = $_ENV['JWT_SECRET'];
            $payload = [
                "user_id" => $user['id'],
                "username" => $username,
                "university" => $user['university'],
                "faculty" => $user['faculty'],
                "university_id" => $user['university_id'],
                "faculty_id" => $user['faculty_id'],
                "exp" => time() + 3600
            ];
            $jwt = JWT::encode($payload, $key, 'HS256');

            echo json_encode([
                'success' => true,
                'token' => $jwt,
                'message' => 'Login riuscito'
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Password errata']);
        }

        $stmt->close();
        $conn->close();
    }

   
}
