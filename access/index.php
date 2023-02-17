
		
		
		//@todo: Create an array of allowed usernames. For example ALLOWED_USERNAMES = ['mohan', 'sameer']
		$ALLOWED_USERNAMES = ['mohan', 'sameer'];

		function hasAccess(){

			//@todo: Get username from URL. For example -> www.example.com/mohan. `mohan` is a username
//@todo: Get username from queryParam. For example ->www.example.com?u=mohan. `mohan` is a username

//@todo: check if ALLOWED_USERNAMES.contains($username) then continue else redirect to another page. Another page will be created/given
//@todo: Create an hidden field with value of username. example is given below
<input name="enroller" value="<?=$username?>" type="hidden">

			return boolean;
		}