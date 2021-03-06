<?php
	$currpage = substr($_SERVER['REQUEST_URI'], 1);
?>
<!DOCTYPE html>
<html lang="en">
	<head>
    <!--

      This page doesn't use external [EzRel] scripts or styling pages.
      Ask permission for any commercialized use of this product. All rights to GitHub::EzRel - http://ezrel.github.io

    -->
		<title><?php echo $currpage; ?> by EzRel</title>
		<link rel='shortcut icon' href='https://i.imgur.com/PmbbA3x.jpg'>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

		<meta charset="utf-8">
		<meta name="description" content="Travel through endless ascii space... but be careful!">
		<meta name="keywords" content="space, endless, borderless, alien, planet, ufo, ascii">
		<meta name="author" content="Dominic Satnoianu">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Facebook -->
		<meta property="og:title" content="Borderless space">
		<meta property="og:url" content="http://dstream.ueuo.com/endless/new/">
		<meta property="og:site_name" content="Borderless space">
		<meta property="og:type" content="website">
		<meta property="og:description" content="Travel through endless ascii space... but be careful!">
		<meta property="og:image" content="https://i.imgur.com/PmbbA3x.jpg">

		<!-- Twitter -->
		<meta name="twitter:card" content="summary">
		<meta name="twitter:title" content="Borderless space">
		<meta name="twitter:url" content="http://dstream.ueuo.com/endless/new/">
		<meta name="twitter:description" content="Travel through endless ascii space... but be careful!">
		<meta name="twitter:image:src" content="https://i.imgur.com/PmbbA3x.jpg">
		<style>
			pre { margin: 0; }
			h1 { text-align: center; }
			body { font-family: Roboto; color: 000;}

			#text-indicator {
				font-size: 25px;
			}

			.centered { width: 380px; margin: 0 auto 0 auto; }
			.unlisted { display: none; }
      .h1-l { font-size: 26px; }
		</style>
		<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
	</head>
	<body style='padding: 4%;'>
    <p class='h1-l'>Install <?php echo $currpage; ?> <a style='font-size: 19px'>by <strong>EzRel</strong></a></p>
    <div style='background: #ededed; width: 100%; height: 1px;'></div>
    <p>Drag this, <a class="bookmarklet" href='<?php echo file_get_contents("pinfo/".$currpage.".instr"); ?>'><?php echo $currpage; ?></a>, into your bookmarks and everything will be ready for you.</p>
	</body>
</html>