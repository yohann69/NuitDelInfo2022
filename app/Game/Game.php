<?php

namespace App\Game;

use App\Database\Database;

class Game
{
    public static function storeScore(string $username, int $score, string $time): void
    {
        (new Database())->execute("INSERT INTO scores (username, score, time) VALUES (?, ?, ?)", [$username, $score, $time]);
    }

    public static function getScores(): array
    {
        return (new Database())->fetchAll("SELECT * FROM scores ORDER BY score DESC");
    }
}