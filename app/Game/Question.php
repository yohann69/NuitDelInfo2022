<?php

namespace App\Game;
use App\Database\Database;

class Question
{
    public int $id;
    public string $quesionText;
    public $answers = array();

    public function __construct($id, $quesionText)
    {
        $this->id = $id;
        $this->questionText = $quesionText;
        $this->fillAllAnswers();
    }

    public function fillAllAnswers()
    {
        $instance = Database::getInstance();
        $answers = $instance->fetchAll("SELECT * FROM REPONSES WHERE idQuestion = ?", array($this->id));
        
        foreach($answers as $a)
        {
            $this->answers[] = new Reponse($a['idReponse'], $a['reponse'], $a['estBonneReponse']);
        }
    }
}
?>