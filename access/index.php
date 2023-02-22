<?php
/**
 * Fuction is used to check allowed username and returns it if allowed
 * 
 * @return string|null
 */
function checkAndGetUsername()
{
    $ALLOWED_USERNAMES = ["mohan", "enrollnow"];
    $username = "";

    if (isset($_GET["u"])) {
        $username = $_GET["u"];
    } else {
        $uriSegments = explode(
            "/",
            parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH)
        );
        if (!empty($uriSegments[1])) {
            $username = $uriSegments[1];
        }
    }

    if (in_array($username, $ALLOWED_USERNAMES)) {
        return $username;
    } else {
        return null;
    }
}
