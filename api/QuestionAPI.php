<?php

namespace Api;

use App\Database\Database;
use App\Game\Question;

class QuestionAPI
{
    public static function getQuestion(?int $level = null)
    {
        if (is_null($level)) {
            return (Database::getInstance())->fetchAll('SELECT * FROM QUESTIONS');
        } return (Database::getInstance())->fetchAll('SELECT * FROM QUESTIONS WHERE niveauDifficulte = :diff', [
            'diff' => $level
        ]);
    }
}