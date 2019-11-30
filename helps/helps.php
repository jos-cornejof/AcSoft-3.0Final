<?php

//Funcion que sirve para validar y limpiar campos
function  validar_campo($campo){
  $campo = trim($campo);
  $campo = stripslashes($campo);
  $campo = htmlspecialchars($campo);

  return $campo;
}
?>
