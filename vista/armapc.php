<?php include 'partials/head.php'; ?>
<?php include 'partials/menu.php'; ?>

<link rel="stylesheet" href="assets/css/armar.css">
<body onload="init();">


<!-- Services Section -->
   <section class="page-section text-black" id="services">
    <div class="container">
      <h1 class="text-center h4 mb-2"><B>ARMA TU PC</B></h1>
      <br>
      <div class="row">

       <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <br>
            <h3 class="h4 mb-2">Tarjeta de Video</h3>
            <p class="text-black"></p>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <p class="text-white"></p>
            <br>
            <td colspan="4"><span id="resultadotarjeta"></span></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <p class="text-white"></p>
          </div>
        </div>
       <tr>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <p class="text-white"></p>
            <br><br>
            <td><button id="eliminartarjeta">Eliminar Selección</button></td>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/1660.jpg" alt="">

            <h3 class="h4 mb-2">NVIDIA</h3>
            <p class="text-black"><B>GTX 1660 6GB</B><br>Precio: $220.000</p>
            <td><button id="uno">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/570.jpg" alt="">

            <h3 class="h4 mb-2">AMD</h3>
            <p class="text-black"><B>RX 570 4GB</B><br>Precio: $133.000</p>
            <td><button id="dos">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/1030.jpg" alt="">

            <h3 class="h4 mb-2">NVIDIA</h3>
            <p class="text-black"><B>GT 1030 2GB</B><br>Precio: $90.000</p>
            <td><button id="tres">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/2060.jpg" alt="">

            <h3 class="h4 mb-2">NVIDIA</h3>
            <p class="text-black"><B>RTX 2060 6GB</B><br>Precio: $389.000</p>
            <td><button id="cuatro">Seleccionar</button></td>

          </div>
        </div>







        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <br><br><br><br>
            <h3 class="h4 mb-2">Procesador</h3>
            <p class="text-white"></p>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
          <br><br><br>
            <p class="text-white"></p>
            <br>
            <td colspan="4"><span id="resultadoprocesador"></span></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <p class="text-white"></p>
          </div>
        </div>
       <tr>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
          <br><br><br>
            <p class="text-white"></p>
            <br><br>
            <td><button id="eliminarprocesador">Eliminar Selección</button></td>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/i3.jpg" alt="">

            <h3 class="h4 mb-2">INTEL</h3>
            <p class="text-black"><B>Core i3-9100F</B><br>Precio: $75.000</p>
            <td><button id="cinco">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/3400g.jpg" alt="">

            <h3 class="h4 mb-2">AMD</h3>
            <p class="text-black"><B>RYZEN 5 3400G</B><br>Precio: $150.000</p>
            <td><button id="seis">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/i5.jpg" alt="">

            <h3 class="h4 mb-2">INTEL</h3>
            <p class="text-black"><B>Core i5-9400F</B><br>Precio: $129.000</p>
            <td><button id="siete">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/i7.jpg" alt="">

            <h3 class="h4 mb-2">INTEL</h3>
            <p class="text-black"><B>Core i7-9700</B><br>Precio: $300.000</p>
            <td><button id="ocho">Seleccionar</button></td>

          </div>
        </div>







        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <br><br><br><br>
            <h3 class="h4 mb-2">Memoria</h3>
            <p class="text-white"></p>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
          <br><br><br>
            <p class="text-white"></p>
            <br>
            <td colspan="4"><span id="resultadomemoria"></span></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <p class="text-white"></p>
          </div>
        </div>
       <tr>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
          <br><br>
            <p class="text-white"></p>
            <br><br><br>
            <td><button id="eliminarmemoria">Eliminar Selección</button></td>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/kingston.jpg" alt="">

            <h3 class="h4 mb-2">KINGSTON</h3>
            <p class="text-black"><B>8GB DDR4-2933</B><br>Precio: $36.000</p>
            <td><button id="nueve">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/kingstonx2.jpg" alt="">

            <h3 class="h4 mb-2">KINGSTON</h3>
            <p class="text-black"><B>x2 8GB DDR4-2933</B><br>Precio: $64.000</p>
            <td><button id="diez">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/crucial.jpg" alt="">

            <h3 class="h4 mb-2">CRUCIAL</h3>
            <p class="text-black"><B>8GB DDR4-2666</B><br>Precio: $32.000</p>
            <td><button id="once">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/crucialx2.jpg" alt="">

            <h3 class="h4 mb-2">CRUCIAL</h3>
            <p class="text-black"><B>x2 8GB DDR4-2666</B><br>Precio: $58.000</p>
            <td><button id="doce">Seleccionar</button></td>

          </div>
        </div>







        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <br><br><br><br>
            <h3 class="h4 mb-2">Almacenamiento</h3>
            <p class="text-white"></p>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
          <br><br><br>
            <p class="text-white"></p>
            <br>
            <td colspan="4"><span id="resultadoalmacenamiento"></span></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <p class="text-white"></p>
          </div>
        </div>
       <tr>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
          <br><br>
            <p class="text-white"></p>
            <br><br><br>
            <td><button id="eliminaralmacenamiento">Eliminar Selección</button></td>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/1tb.jpg" alt="">

            <h3 class="h4 mb-2">WESTERN DIGITAL</h3>
            <p class="text-black"><B>HDD Blue 1TB</B><br>Precio: $33.000</p>
            <td><button id="trece">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/2tb.jpg" alt="">

            <h3 class="h4 mb-2">WESTERN DIGITAL</h3>
            <p class="text-black"><B>HDD Blue 2TB</B><br>Precio: $60.000</p>
            <td><button id="catorce">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/3tb.jpg" alt="">

            <h3 class="h4 mb-2">WESTERN DIGITAL</h3>
            <p class="text-black"><B>HDD Blue 3TB</B><br>Precio: $86.000</p>
            <td><button id="quince">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/ssd.jpg" alt="">

            <h3 class="h4 mb-2">CRUCIAL</h3>
            <p class="text-black"><B>SSD P1 1TB</B><br>Precio: $100.000</p>
            <td><button id="dieciseis">Seleccionar</button></td>

          </div>
        </div>








          <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <br><br><br><br>
            <h3 class="h4 mb-2">Fuentes de poder</h3>
            <p class="text-white"></p>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
          <br><br><br>
            <p class="text-white"></p>
            <br>
            <td colspan="4"><span id="resultadofuente"></span></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <p class="text-white"></p>
          </div>
        </div>
       <tr>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <br><br>
            <p class="text-white"></p>
            <br><br><br>
            <td><button id="eliminarfuente">Eliminar Selección</button></td>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/400w.jpg" alt="">

            <h3 class="h4 mb-2">EVGA</h3>
            <p class="text-black"><B>400W</B><br>Precio: $23.000</p>
            <td><button id="diecisiete">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/500w.jpg" alt="">

            <h3 class="h4 mb-2">EVGA</h3>
            <p class="text-black"><B>500W</B><br>Precio: $36.000</p>
            <td><button id="dieciocho">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/600w.jpg" alt="">

            <h3 class="h4 mb-2">EVGA</h3>
            <p class="text-black"><B>600W</B><br>Precio: $41.000</p>
            <td><button id="diecinueve">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/t500w.jpg" alt="">

            <h3 class="h4 mb-2">THERMALTAKE</h3>
            <p class="text-black"><B>Smart SPD-0500P 500W</B><br>Precio: $34.000</p>
            <td><button id="veinte">Seleccionar</button></td>

          </div>
        </div>






        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <br><br><br><br>
            <h3 class="h4 mb-2">Gabinetes</h3>
            <p class="text-white"></p>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
          <br><br><br>
            <p class="text-white"></p>
            <br>
            <td colspan="4"><span id="resultadogabinete"></span></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <p class="text-white"></p>
          </div>
        </div>
       <tr>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <br><br>
            <p class="text-white"></p>
            <br><br><br>
            <td><button id="eliminargabinete">Eliminar Selección</button></td>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/mg110.jpg" alt="">

            <h3 class="h4 mb-2">Cougar</h3>
            <p class="text-black"><B>MG110-W</B><br>Precio: $21.000</p>
            <td><button id="veintiuno">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/vampiric.jpg" alt="">

            <h3 class="h4 mb-2">MSI</h3>
            <p class="text-black"><B>MAG VAMPIRIC 010</B><br>Precio: $44.000</p>
            <td><button id="veintidos">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/mx330.jpg" alt="">

            <h3 class="h4 mb-2">Cougar</h3>
            <p class="text-black"><B>MX330</B><br>Precio: $35.000</p>
            <td><button id="veintitres">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/v200.jpg" alt="">

            <h3 class="h4 mb-2">THERMALTAKE</h3>
            <p class="text-black"><B>V200</B><br>Precio: $34.000</p>
            <td><button id="veinticuatro">Seleccionar</button></td>

          </div>
        </div>






        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <br><br><br><br>
            <h3 class="h4 mb-2">Placas madre</h3>
            <p class="text-white"></p>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
          <br><br><br>
            <p class="text-white"></p>
            <br>
            <td colspan="4"><span id="resultadoplaca"></span></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <p class="text-white"></p>
          </div>
        </div>
       <tr>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
          <br><br>
            <p class="text-white"></p>
            <br><br><br>
            <td><button id="eliminarplaca">Eliminar Selección</button></td>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/h310m.jpg" alt="">

            <h3 class="h4 mb-2">INTEL</h3>
            <p class="text-black"><B>MSI H310M PRO-VDH PLUS</B><br>Precio: $51.000</p>
            <td><button id="veinticinco">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/b360m.jpg" alt="">

            <h3 class="h4 mb-2">Intel</h3>
            <p class="text-black"><B>Gigabyte B360M DS3H</B><br>Precio: $67.000</p>
            <td><button id="veintiseis">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/a320m.jpg" alt="">

            <h3 class="h4 mb-2">AMD</h3>
            <p class="text-black"><B>MSI A320M PRO-M2 V2</B><br>Precio: $48.000</p>
            <td><button id="veintisiete">Seleccionar</button></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <img class="img-fluid" src="assets/img/venta/b450m.jpg" alt="">

            <h3 class="h4 mb-2">AMD</h3>
            <p class="text-black"><B>MSI B450M PRO-M2</B><br>Precio: $58.000</p>
            <td><button id="veintiocho">Seleccionar</button></td>

          </div>
        </div>






        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <br><br><br>
            <h3 class="h4 mb-2"></h3>
            <p class="text-white"></p>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <p class="text-white"></p>
            <br><br><br>
            <td colspan="4"><span id="resultadototal"></span></td>

          </div>
        </div>

        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <br><br><br>
            <h3 class="h4 mb-2"></h3>
            <p class="text-white"></p>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-1">
            <p class="text-white"></p>
            <br><br><br><br>
            <td><button id="eliminartodo">Eliminar todo</button></td>

          </div>
        </div>


  </section>






  <!-- Custom scripts for this template -->

  <script src="assets/js/funcionalidad_armatupc.js"></script>

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
