
<header>
    <div class ="contenedor">
        <h1>AcSoft</h1>
        <input type ="checkbox" id="menu-bar">
        <label class="icon-menu" for="menu-bar"></label>
        <nav class="menu">
            <a href="index.php">Inicio</a>
            <a href="galeria.php">Imagenes</a>
            <a href="armapc.php">Arma tu PC</a>
            <a href="elijepc.php">Escoge tu PC</a>
            <?php if (!isset($_SESSION["usuario"])) {?>
            <a href="login.php">Login</a>
            <a href="registro.php">Registro</a>
            <?php } else {
    ?>
              <?php if ($_SESSION["usuario"]["privilegio"] == 1) {?>
              <a href="admin.php">Admin</a>
              <?php } else {?>
              <a href="usuario.php">Usuario</a>
            <?php }

}?>
            <a href="contacto.php">Contactanos!</a>
        </nav>
    </div>
</header>
