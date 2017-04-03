<?php

	class Main {

		function __construct() {
			$run = 'Hello World';
		}

		function __set__($str) {
			$this->run = $str;
		}

		function __get__() {
			return $this->str;
		}

	}

	$main = new Main();
	$main = 'Hi';
	echo $main;