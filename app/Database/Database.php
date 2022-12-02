<?php

namespace App\Database;

use PDO;

class Database
{

    private const DB_PATH = __DIR__ . '/Database.sqlite3';

    private ?PDO $pdo;

    public function __construct()
    {
        $this->pdo = new PDO('sqlite:' . self::DB_PATH);
        $this->pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public static function getInstance(): Database
    {
        static $instance = null;
        if ($instance === null) {
            $instance = new Database();
        }
        return $instance;
    }

    public function getPdo(): PDO
    {
        return $this->pdo;
    }

    public function fetch(string $sql, array $params = [])
    {
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetch();
    }

    public function fetchAll(string $sql, array $params = [])
    {
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll();
    }

    public function execute(string $sql, array $params = []): bool
    {
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute($params);
    }
}