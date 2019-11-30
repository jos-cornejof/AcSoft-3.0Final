<?php include 'partials/head.php';?>
<?php
if (isset($_SESSION["usuario"])) {
    if ($_SESSION["usuario"]["privilegio"] == 2) {
        header("location:usuario.php");
    }
} else {
    header("location:login.php");
}
?>
<?php include 'partials/menu.php';?>
<div class="container">
	<div class="starter-template">
		<br>
		<br>
		<br>
		<div class="jumbotron">
			<div class="container text-center">
				<h1><strong>Bienvenido</strong> <?php echo $_SESSION["usuario"]["nombre"]; ?></h1>
				<p>Panel de control | <span class="label label-info"><?php echo $_SESSION["usuario"]["privilegio"] == 1 ? 'Admin' : 'Cliente'; ?></span></p>
				<p>
					<a href="cerrar-sesion.php" class="btn btn-primary btn-lg">Cerrar sesión</a>
				</p>
			</div>
		</div>
	</div>
</div><!-- /.container -->
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<footer>

       <div class="container-footer-all">

            <div class="container-body">

                <div class="colum1">
                    <h1>Mas informacion de la compañia</h1>

                    <p>Esta compañia se dedica a la venta de software integrado y
											ventas de dispositivos tecnológicos, también
											realizamos formateos y distintos servicios!.</p>

                </div>

                <div class="colum2">

                    <h1>Redes Sociales</h1>

                    <div class="row">
                        <img src="assets/img/icon/facebook.png">
                        <label><a href="https://www.facebook.com">Siguenos en Facebook</a> </label>
                    </div>
                    <div class="row">
                        <img src="assets/img/icon/twitter.png">
                        <label><a href="https://www.twitter.com">Siguenos en Twitter</a> </label>
                    </div>
                    <div class="row">
                        <img src="assets/img/icon/instagram.png">
                        <label><a href="https://www.instagram.com">Siguenos en Instagram</a> </label>
                    </div>
                    <div class="row">
                        <img src="assets/img/icon/google-plus.png">
                        <label><a href="https://www.google.com">Siguenos en Google +</a> </label>
                    </div>
                    <div class="row">
                        <img src="assets/img/icon/pinterest.png">
                        <label><a href="https://www.pinterest.com">Siguenos en Pinterest</a> </label>
                    </div>


                </div>

                <div class="colum3">

                    <h1>Informacion de Contacto</h1>

                    <div class="row2">
                        <img src="assets/img/icon/house.png">
                        <label>Pje. Volcán Antuco
												#141, San Joaquín, STGO</label>
                    </div>

                    <div class="row2">
                        <img src="assets/img/icon/smartphone.png">
                        <label>+56 9 6128 2386</label>
                    </div>

                    <div class="row2">
                        <img src="assets/img/icon/contact.png">
                         <label>jos.cornejof@gmail.com</label>
                    </div>

                </div>

            </div>

        </div>

        <div class="container-footer">
               <div class="footer">
                    <div class="copyright">
                        © 2019 Todos los Derechos Reservados | <a href="">AcSoft</a>
                    </div>

                    <div class="information">
                        <a href="">Informacion Compañia</a> | <a href="">Privacion y Politica</a> | <a href="">Terminos y Condiciones</a>
                    </div>
                </div>

            </div>

    </footer>

</html>

<?php include 'partials/footer.php';?>