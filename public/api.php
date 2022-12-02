<?php

use Api\GameAPI;

require '../vendor/autoload.php';

header('Content-Type: application/json');

switch ($_GET['endpoint']) {
    case 'getScore':
        $return = GameAPI::getScore();
        break;

    default :
        $return = ['error' => 'Endpoint not found'];
        break;
}

echo json_encode($return);