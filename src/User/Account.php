<?php

namespace NuitDelInfo2022\User;

use App\Database\Database;

class Account
{
    public static function login(string $login, string $password)
    {
        $db = new Database();
        $user = $db->fetch("SELECT `login`, motdepasse FROM UTILISATEURS WHERE login = :lo",[
            'lo' => $login
        ]);

        if ($user === false || count($user) === 0) return false;
        return password_verify($password, $user['motdepasse']);
    }

    public static function signup (
        string $username,
        
        string $password,
        string $passwordConfirm,
        string $email
    ): bool|string {
        $db = new Database();
        $exists = $db->fetch("SELECT COUNT(`login`) FROM UTILISATEURS");
        if ($exists > 0) return 'Pseudo déjà utilisé';
        elseif ($password !== $passwordConfirm) return 'Les mots de passes ne correspondent pas';
        else {
            $db->execute("INSERT INTO UTILISATEURS (login, motdepasse, email) VALUES (?, ?, ?)", [
                $username,
                password_hash($password, PASSWORD_ARGON2ID),
                $email
            ]);
            return true;
        }
    }
}