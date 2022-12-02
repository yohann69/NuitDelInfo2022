<?php

use Api\GameAPI;
use Api\QuestionAPI;

require '../vendor/autoload.php';

header('Content-Type: application/json');

switch ($_GET['endpoint']) {
    case 'getScore':
        $return = GameAPI::getScore();
        break;

    case 'getQuestion':
        $return = QuestionAPI::getQuestion($_GET['level']);

    default :
        $return = ['error' => 'Endpoint not found'];
        break;
}

echo json_encode($return);