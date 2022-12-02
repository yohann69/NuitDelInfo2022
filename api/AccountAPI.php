<?php

namespace Api;

use NuitDelInfo2022\User\Account;

class AccountAPI
{
    public static function createAccount()
    {
        return Account::signup($_POST['username'], $_POST['password'], $_POST['passwordC']);
    }

    public static function login()
    {
        return Account::login($_POST['username'], $_POST['password']);
    }
}