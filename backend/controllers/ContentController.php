<?php
require_once __DIR__ . '/../config/database.php';

class ContentController {
    private $conn;

    public function __construct($conn) {
        $this->conn = $conn;
    }

    public function getUniversities() {
        $sql = "SELECT id, name FROM universities";
        $result = $this->conn->query($sql);
        $universities = [];

        while($row = $result->fetch_assoc()) {
            $universities[] = $row;
        }

        echo json_encode($universities);
    }

    public function getFaculties($university_id) {
        if (!$university_id) {
            echo json_encode([]);
            return;
        }

        $stmt = $this->conn->prepare("SELECT id, name FROM faculties WHERE university_id = ?");
        $stmt->bind_param("i", $university_id);
        $stmt->execute();
        $result = $stmt->get_result();

        $faculties = [];
        while($row = $result->fetch_assoc()) {
            $faculties[] = $row;
        }

        echo json_encode($faculties);
    }

    public function getPosts($university_id = null, $faculty_id = null) {
        $query = "
            SELECT p.*, u.username, uni.name AS university_name, f.name AS faculty_name
            FROM posts p
            JOIN users u ON p.user_id = u.id
            JOIN universities uni ON p.university_id = uni.id
            JOIN faculties f ON p.faculty_id = f.id
            WHERE 1
        ";

        $params = [];
        $types = "";

        if($university_id !== null) {
            $query .= " AND p.university_id = ?";
            $params[] = $university_id;
            $types .= "i";
        }

        if($faculty_id !== null) {
            $query .= " AND p.faculty_id = ?";
            $params[] = $faculty_id;
            $types .= "i";
        }

        $query .= " ORDER BY p.created_at DESC";
        $stmt = $this->conn->prepare($query);

        if(!empty($params)) {
            $stmt->bind_param($types, ...$params);
        }

        $stmt->execute();
        $result = $stmt->get_result();

        $posts = [];
        while ($row = $result->fetch_assoc()) {
            $posts[] = $row;
        }

        echo json_encode($posts);
    }
}
