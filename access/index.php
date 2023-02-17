
<?php
  $ALLOWED_USERNAMES = ["mohan", "sameer"];

  function hasAccess()
  {
      global $username;
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

      if (in_array($username, $GLOBALS["ALLOWED_USERNAMES"])) {
          return true;
      } else {
          return false;
      }
  }
  ?>
		
	
		 ?>