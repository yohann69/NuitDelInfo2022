<?php

use App\Game\Game;

require '../vendor/autoload.php';

$game = new Game();

var_dump($game->getScores());

$game->storeScore('test', 10, 60*30);