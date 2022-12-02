<?php

namespace NuitDelInfo2022\User;

use App\Database\Database;

class User
{
    public static function logout()
    {
        session_destroy();
        exit(header('Location: /'));
    }
}