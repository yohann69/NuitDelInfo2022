<?php

namespace Api;

use App\Database\Database;
use App\Game\Reponse;

class ReponseAPI
{
    public static function getReponseByQuestionId(int $questionId)
    {
        return Reponse::getReponseByQuestion($questionId);
    }
}