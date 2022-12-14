<?php

namespace App\Game;
use App\Database\Database;


class Reponse
{
    public int $id;
    public string $reponseText;
    public bool $isTrue;

    public function __construct($id, $reponseText, $isTrue)
    {
        $this->id = $id;
        $this->reponseText = $reponseText;
        $this->isTrue = $isTrue;
    }

    public static function getReponseByQuestion(int $questionId): ?array
    {
        return Database::getInstance()->fetchAll("SELECT * FROM REPONSES WHERE idQuestion = ?", [$questionId]);
    }
}

?>