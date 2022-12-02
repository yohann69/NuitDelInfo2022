<?php

namespace NuitDelInfo2022\User;

use App\Database\Database;

class Account
{
    public static function login(string $login, string $password)
    {
        $db = new Database();
        $user = $db->fetch("SELECT `Pseudo`, motdepasse FROM UTILISATEURS WHERE login = :lo",[
            'lo' => $login
        ]);

        if ($user === false || count($user) === 0) return false;
        if (!password_verify($password, $user['motdepasse'])) return false;

        $_SESSION['login'] = $user['login'];
    }

    public static function signup (
        string $username,
        string $password,
        string $passwordConfirm
    ) {
        $db = new Database();
        $exists = $db->fetch("SELECT COUNT(`Pseudo`) AS PS FROM UTILISATEURS WHERE Pseudo = :us",[
            'us' => $username
        ]);
        if ($exists['PS'] > 0) return 'Pseudo déjà utilisé';
        elseif ($password !== $passwordConfirm) return 'Les mots de passes ne correspondent pas';
        else {
            $db->execute("INSERT INTO UTILISATEURS (Pseudo, motdepasse) VALUES (?, ?)", [
                $username,
                password_hash($password, PASSWORD_ARGON2ID),
            ]);
            $_SESSION['login'] = $username;
            return true;
        }
    }
}