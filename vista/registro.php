<?php include 'partials/head.php'; ?>
<?php include 'partials/menu.php'; ?>


<div class="container">

  <div class="starter-template">
    <br>
    <br>
    <br>
    <div class="row">
     	<div class="col-md-4 col-md-offset-4">
			<div class="panel panel-default">
				<div class="panel-body">
					<form action="registroCode.php" method="POST" role="form">
						<legend>Registro de Usuario</legend>

            <div class="form-group">
							<label for="nombre">Nombre</label>
							<input type="text" name="txtNombre" class="form-control" id="nombre" autofocus required placeholder="Ingresa tu Nombre">
						</div>

            <div class="form-group">
							<label for="email">E-Mail</label>
							<input type="email" name="txtEmail" class="form-control" id="email"  required placeholder="Ingresa tu dirección de correo">
						</div>

            <div class="form-group">
							<label for="">Usuario</label>
							<input type="text" name="txtUsuario" class="form-control" id="usuario"  required placeholder="Ingrese Usuario">
						</div>

            <div class="form-group">
							<label for="">Contraseña</label>
							<input type="password" name="txtPassword" class="form-control" id="password"  placeholder="Ingrese Contraseña">
						</div>



						<button type="submit" class="btn btn-success">Registrar</button>
					</form>
				</div>
			</div>
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

<?php include 'partials/footer.php'; ?>
