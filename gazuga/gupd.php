<?php

	$t = $_POST['t'];

	$p = explode("~[~]~", file_get_contents($t));

	echo $p[rand(0, count($p) - 1)];