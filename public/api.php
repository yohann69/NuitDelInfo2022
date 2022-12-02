<?php

use Api\GameAPI;
use Api\AccountAPI;
use Api\QuestionAPI;
use Api\ReponseAPI;
use App\Game\Reponse;

session_start();

require '../vendor/autoload.php';

header('Content-Type: application/json');

switch ($_GET['endpoint']) {
    case 'getScore':
        $return = GameAPI::getScore();
        break;

    case 'getQuestion':
        $return = QuestionAPI::getQuestion($_GET['level'] ?? null);
        break;

    case 'createAccount':
        $return = AccountAPI::createAccount();
        break;

    case 'login':
        $return = AccountAPI::login();
        break;

    case 'getReponse':
        $return = ReponseAPI::getReponseByQuestionId($_GET['id'] ?? null);
        break;

    default :
        $return = ['error' => 'Endpoint not found'];
        break;
}

echo json_encode($return);