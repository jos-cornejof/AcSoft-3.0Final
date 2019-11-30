<?php include 'partials/head.php'; ?>
<?php include 'partials/menu.php'; ?>


<link rel="stylesheet" href="assets/css/armar.css">
<body onload="init();">

<!-- Services Section -->
  <section class="page-section bg-WHITE text-BLACK" id="services">
    <div class="container">
      <h1 class="text-center h4 mb-2"><B>ELIGE TU PC</B></h1>
      <BR>
      <div class="row">

       <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">

            <h3 class="h4 mb-2"><B>Rango de precio</B></h3>
            <p class="text-BLACK">Selecciona un rango de precio para tu PC</p>
            <br>
            <td colspan="4"><span id="resultadorango"></span></td>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <img class="img-fluid" src="assets/img/venta/bajo.png" alt="">

            <p class="text-BLACK">$200.000 - $299.999</p>
            <td><button id="diez">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <img class="img-fluid" src="assets/img/venta/medio.png" alt="">

            <p class="text-BLACK">$300.000 - $599.999</p>
            <td><button id="veinte">Seleccionar</button></td>
          </div>
        </div>
       <tr>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <img class="img-fluid" src="assets/img/venta/alto.png" alt="">

            <p class="text-BLACK">$600.000 - $1.000.0000</p>
            <td><button id="treinta">Seleccionar</button></td>
          </div>
        </div>
<tr>







<div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">

            <h3 class="h4 mb-2"><B>Utilidad de tu PC</B></h3>
            <p class="text-BLACK">Selecciona para qué quieres usar tu PC, escoge entre uso Casual, Aplicaciones pesadas o Gaming</p>
            <td colspan="4"><span id="resultadoutilidad"></span></td>

          </div>
        </div>


<div class="col-lg-3 col-md-6 text-center">assets/
          <div class="mt-5">
            <img class="img-fluid" src="assets/img/venta/casual.png" alt="">
            <p class="text-BLACK">Casual</p>
            <td><button id="uno">Seleccionar</button></td>

          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <img class="img-fluid" src="assets/img/venta/pesada.png" alt="">
            <p class="text-BLACK">Aplicaciones pesadas</p>
            <td><button id="dos">Seleccionar</button></td>
          </div>
        </div>
       <tr>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <img class="img-fluid" src="assets/img/venta/gamer.png" alt="">
            <p class="text-BLACK">Gaming</p>
            <td><button id="tres">Seleccionar</button></td>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">

            <h3 class="h4 mb-2"><B>Nuestra recomendación</B></h3>
            <p class="text-BLACK">Acá te mostramos el precio y especificaciones del PC que más se adecua a tus necesidades basado en las opciones seleccionadas</p>


          </div>
        </div>



        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
      <td colspan="4"><span id="resultadofinal"></span></td>
    </tr>
        </div>
      </div>



    </div>
  </section>





   <script src="assets/js/funcionalidad_eligetupc.js"></script>
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
