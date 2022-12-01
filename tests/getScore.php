<?php

<<<<<<< HEAD
use App\Game\Game;

require '../vendor/autoload.php';

$game = new Game();

var_dump($game->getScores());

$game->storeScore('test', 10, 60*30);
=======
require '../app/Game/Game.php';

$game = new Game();

>>>>>>> b543fd069ef5a2dd0939ffa30da6d365b650714c
