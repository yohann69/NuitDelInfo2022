<?php

namespace Api;

use App\Game\Game;

class GameAPI
{
    public static function getScore()
    {
        (new Game)->getScore();
    }
}