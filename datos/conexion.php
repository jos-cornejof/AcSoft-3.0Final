<?php
class Conexion{

 /*
  *  Conexion a la base de datos
  */
  public static function conectar(){
    try {
      $cn = new PDO("mysql:host=localhost;dbname=login-php","root","");

      return $cn;
    } catch (PDOException $e) {
        die($ex->getMessage());
    }

  }
}
?>
