<?php 
    define('DB_HOST', 'localhost');
    define('DB_USER', 'mysql');
    define('DB_PASSWORD', 'mysql');
    define('DB_NAME', 'while_cars');

    $mysql = @new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

    if( $mysql->connect_errno ) exit( 'Ошибка подключения к БД' );
    $mysql->set_charset('utf8');
    $mysql->close();
?>