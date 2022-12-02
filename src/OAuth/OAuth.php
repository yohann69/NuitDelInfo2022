<?php

namespace NuitDelInfo2022\OAuth;



class OAuth2
{

    public const DISCORD = 'discord';
    // public const GOOGLE  = 'google';

    /**
     * Setup OAuth
     *
     * @param string $platform
     * @param string|null $code
     * @return Object
     */
    public static function OAuth(string $platform, ?string $code = null): Object
    {
        $ids = json_decode(file_get_contents('../../config.json'));

        $credentials = self::getDiscord();

        // Get code if app doesn't have code
        if (is_null($code)) {
            $baseUrl = 
                $credentials['base_url'] . "?client_id=" . $credentials['client_id']
                . "&redirect_uri="
                . urlencode($credentials['redirect_uri'] . "?platform=" . $platform)
                . "&response_type=code"
                . "&scope=" . $credentials['scope'];

            die(header('Location: ' . $baseUrl));
        }

        $token = self::getData($credentials['token_url'],
        true,
        ['Content-Type' => 'application/x-www-form-urlencoded'],
        [
            'grant_type' => 'authorization_code',
            'code' => $code,
            'redirect_uri' => $credentials['redirect_uri'] . "?platform=" . $platform,
            'client_id' => $credentials['client_id'],
            'client_secret' => $credentials['client_secret']
        ]);

        $user = self::getData($credentials['endpoint'],
        false,
        [
            "Authorization: Bearer {$token->access_token}"
        ]);
        return $user;

    }


    /**
     * Make data request with cURL
     *
     * @param string $url Endpoint
     * @param boolean $post true for post, false for get (dafault get)
     * @param array $headers Array of headers
     * @param array $body Body request
     * @return Object|boolean
     */
    public static function getData(string $url, bool $post = false, array $headers = [], array $body = []): Object|bool
    {
        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_URL => $url,
            CURLOPT_POST =>$post,
            CURLOPT_HTTPHEADER => $headers,
            CURLOPT_RETURNTRANSFER => true,
        ]);

        if ($post) curl_setopt($curl, CURLOPT_POSTFIELDS, $body);

        $result  = curl_exec($curl);
        curl_close($curl);

        return json_decode($result);
    }

    /**
     * Return all informations for Discord OAuth
     *
     * @return array
     */
    public static function getDiscord(): array
    {
        return [
            'base_url' => 'https://discord.com/api/oauth2/authorize',
            'token_url' => 'https://discord.com/api/oauth2/token',
            'endpoint' => 'https://discord.com/api/users/@me',
            'client_id' => json_decode(file_get_contents('../../config.json'))->clientId,
            'client_secret' => $_ENV['OAUTH2_DISCORD_CLIENT_SECRET'],
            'redirect_uri' => $_ENV['OAUTH2_CLIENT_REDIRECT_URI'],
            'scope' => 'identify%20email',
            'platform' => self::DISCORD
        ];
    }

    /**
     * Return all informations for Google OAuth
     *
     * @return array
     */
    // public static function getGoogle(): array
    // {
    //     return [
    //         'base_url' => 'https://accounts.google.com/o/oauth2/v2/auth',
    //         'token_url' => 'https://www.googleapis.com/oauth2/v4/token',
    //         'endpoint' => 'https://www.googleapis.com/oauth2/v2/userinfo',
    //         'client_id' => $_ENV['OAUTH2_GOOGLE_CLIENT_ID'],
    //         'client_secret' => $_ENV['OAUTH2_GOOGLE_CLIENT_SECRET'],
    //         'redirect_uri' => $_ENV['OAUTH2_CLIENT_REDIRECT_URI'],
    //         'scope' => urlencode('https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'),
    //         'platform' => self::GOOGLE
    //     ];
    // }

    /**
     * Get all information after platform redirection
     *
     * @param string $target
     * @return void
     */
    public static function redirect(string $target): array
    {
        $queries = parse_url($target, PHP_URL_QUERY);
        parse_str($queries, $queries);

        $dataFormatted = [];

        switch ($queries['platform']) {
            case self::DISCORD:
                $data = self::OAuth(self::DISCORD, $queries['code']);
                $dataFormatted = [
                    'id' => $data->id,
                    'username' => $data->username,
                    'email' => $data->email,
                    'profile_picture' => 'https://cdn.discordapp.com/avatars/' . $data->id . '/' . $data->avatar . '.png',
                    'platform' => self::DISCORD
                ];
                break;
            // case self::GOOGLE:
            //     $data = self::OAuth(self::GOOGLE, $queries['code']);
            //     $dataFormatted = [
            //         'id' => $data->id,
            //         'username' => $data->name,
            //         'email' => $data->email,
            //         'profile_picture' => $data->picture,
            //         'platform' => self::GOOGLE
            //     ];
            //     break;
            default:
                die('Unknown platform');
                break;
        }

        return $dataFormatted;
    }
}
