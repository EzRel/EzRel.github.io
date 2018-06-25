<?php

	switch ($_SERVER['HTTP_ORIGIN']) {
		case 'http://from.com': case 'https://from.com':
		header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
		header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
		header('Access-Control-Max-Age: 1000');
		header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
		header('Access-Control-Allow-Headers: x-csrf-token');
		break;
	}

	$t = $_POST['t'];

	if($t == "") {
		$t = $_REQUEST['t'];
	}

	if($t == "") {
		$t = "random";
	}

	$p = explode("~[~]~", file_get_contents($t));

	echo $p[rand(0, count($p) - 1)];
