<?php include 'partials/head.php'; ?>
<?php include 'partials/menu.php'; ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Contacto</title>
  </head>
  <body>
    <section class="form_wrap">
				<section class="contact_info">
					<section class="info_title">
						<span class="fa fa-user-circle"></span>
						<h2>Información<br>De Contacto</h2>
					</section>
					<section class="info_items">
						<p><span class="fa fa-envelope"></span> jos.cornejof@alumnos.duoc.cl</p>
						<p><span class="fa fa-mobile"></span> +56 9 6128 2386</p>
					</section>
				</section>
				<form action="enviar-prueba.php" method="post"class="form_contact">
						<h2>Envía un mensaje</h2>
						<div class="user_info">
							<label for="names">Nombres *</label>
							<input type="text" id="names">

							<label for="phone">Teléfono / Celular *</label>
							<input type="text" id="phone">

							<label for="email">Correo Electrónico *</label>
							<input type="text" id="email">

							<label for="mensaje">Mensaje *</label>
							<textarea id="mensaje"></textarea>

							<input type="submit" value="Enviar Mensaje" id="btnSend">
						</div>
				</form>
    </section>
  </body>

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
