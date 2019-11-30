    //Declaramos variables
    var preciotarjeta = 0;
    var precioprocesador = 0;
    var preciofinal = 0;
    var preciomemoria = 0;
    var precioalmacenamiento = 0;
    var preciogabinete = 0;
    var preciofuente = 0;
    var precioplaca = 0;

    function init(){
  //variables
  var resultadotarjeta = document.getElementById('resultadotarjeta');
  var resultadoprocesador = document.getElementById('resultadoprocesador');
  var resultadomemoria = document.getElementById('resultadomemoria');
  var resultadototal = document.getElementById('resultadototal');
  var resultadofuente = document.getElementById('resultadofuente');
  var resultadogabinete = document.getElementById('resultadogabinete');
  var resultadoalmacenamiento = document.getElementById('resultadoalmacenamiento');
  var resultadoaplaca = document.getElementById('resultadoalmacenamiento');

  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var diez = document.getElementById('diez');
  var once = document.getElementById('once');
  var doce = document.getElementById('doce');
  var trece = document.getElementById('trece');
  var catorce = document.getElementById('catorce');
  var quince = document.getElementById('quince');
  var dieciseis = document.getElementById('dieciseis');
  var diecisiete = document.getElementById('diecisiete');
  var dieciocho = document.getElementById('dieciocho');
  var diecinueve = document.getElementById('diecinueve');
  var veinte = document.getElementById('veinte');
  var veintiuno = document.getElementById('veintiuno');
  var veintidos = document.getElementById('veintidos');
  var veintitres = document.getElementById('veintitres');
  var veinticuatro = document.getElementById('veinticuatro');
  var veinticinco = document.getElementById('veinticinco');
  var veintiseis = document.getElementById('veintiseis');
  var eliminartarjeta = document.getElementById('eliminartarjeta');


  resultadotarjeta.innerText = "Selecciona alguna Tarjeta de Video";
  resultadoprocesador.innerText = "Selecciona algún Procesador";
  resultadomemoria.innerText = "Selecciona alguna Memoria";
  resultadoalmacenamiento.innerText = "Selecciona alguna unidad de Almacenamiento";
  resultadogabinete.innerText = "Selecciona algún Gabinete";
  resultadofuente.innerText = "Selecciona alguna Fuente de poder";
  resultadoplaca.innerText = "Selecciona alguna Placa madre";
  resultadototal.textContent = "Precio total: $" + preciofinal;


      //Eventos de click
      //tarjetas gráficas
      uno.onclick = function(e){
          resultadotarjeta.innerText = "NVIDIA GTX 1660 6GB - Precio: $220.000";
          preciotarjeta = 220000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      dos.onclick = function(e){
          resultadotarjeta.textContent = "AMD RX 570 4GB - Precio: $133.000";
          preciotarjeta = 133000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      tres.onclick = function(e){
          resultadotarjeta.textContent = "NVIDIA GT 1030 2GB - Precio: $90.000";
          preciotarjeta = 90000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      cuatro.onclick = function(e){
          resultadotarjeta.textContent = "NVIDIA RTX 2060 6GB - Precio: $389.000";
          preciotarjeta = 389000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      eliminartarjeta.onclick = function(e){
          resultadotarjeta.textContent = "Selecciona alguna Tarjeta de Video";
          preciotarjeta = 0;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }



      //procesadores
      cinco.onclick = function(e){
          resultadoprocesador.textContent = "Intel Core i3-9100F - $75.000";
          precioprocesador = 75000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      seis.onclick = function(e){
          resultadoprocesador.textContent = "AMD RYZEN 5 3400G - Precio: $150.000";
          precioprocesador = 150000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      siete.onclick = function(e){
          resultadoprocesador.textContent = "Intel Core i5-9400F - $129.000";
          precioprocesador = 129000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
	  ocho.onclick = function(e){
          resultadoprocesador.textContent = "Intel Core i7-9700 - $300.000";
          precioprocesador = 300000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      eliminarprocesador.onclick = function(e){
          resultadoprocesador.textContent = "Selecciona algún Procesador";
          precioprocesador = 0;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }



      //memorias
      nueve.onclick = function(e){
          resultadomemoria.textContent = "Kingston 8GB DDR4-2933 - Precio: $36.000";
          preciomemoria = 36000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      diez.onclick = function(e){
          resultadomemoria.textContent = "x2 Kingston 8GB DDR4-2933 - Precio: $64.000";
          preciomemoria = 64000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.innerText = "Precio total: $" + preciofinal;
      }
      once.onclick = function(e){
          resultadomemoria.textContent = "Crucial 8GB DDR4-2666 - $32.000";
          preciomemoria = 32000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.innerText = "Precio total: $" + preciofinal;
      }
      doce.onclick = function(e){
          resultadomemoria.textContent = "x2 Crucial 8GB DDR4-2666 - $58.000";
          preciomemoria = 58000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.innerText = "Precio total: $" + preciofinal;
      }
   	  eliminarmemoria.onclick = function(e){
          resultadomemoria.textContent = "Selecciona alguna Memoria";
          preciomemoria = 0;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.innerText = "Precio total: $" + preciofinal;
      }


  	 //Almacenamiento
      trece.onclick = function(e){
          resultadoalmacenamiento.textContent = "HDD Western Digital Blue 1TB - $33.000";
          precioalmacenamiento = 33000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      catorce.onclick = function(e){
          resultadoalmacenamiento.textContent = "HDD Western Digital Blue 2TB - $60.000";
          precioalmacenamiento = 60000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      quince.onclick = function(e){
          resultadoalmacenamiento.textContent = "HDD Western Digital Blue 3TB - $86.000";
          precioalmacenamiento = 86000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
       dieciseis.onclick = function(e){
          resultadoalmacenamiento.textContent = "SSD Crucial P1 1TB - $100.000";
          precioalmacenamiento = 100000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      eliminaralmacenamiento.onclick = function(e){
          resultadoalmacenamiento.textContent = "Selecciona alguna unidad de Almacenamiento";
          precioalmacenamiento = 0;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }


 	  //fuentes
      diecisiete.onclick = function(e){
          resultadofuente.textContent = "EVGA 400W - $23.000";
          preciofuente = 23000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      dieciocho.onclick = function(e){
          resultadofuente.textContent = "EVGA 500W - $36.000";
          preciofuente = 36000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      diecinueve.onclick = function(e){
          resultadofuente.textContent = "EVGA 600W - $41.000";
          preciofuente = 41000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      veinte.onclick = function(e){
          resultadofuente.textContent = "Thermaltake Smart SPD-0500P 500W - $34.000";
          preciofuente = 34000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      eliminarfuente.onclick = function(e){
          resultadofuente.textContent = "Selecciona alguna Fuente de poder";
          preciofuente = 0;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }

      //Gabinete
      veintiuno.onclick = function(e){
          resultadogabinete.textContent = "Cougar MG110-W - $21.000";
          preciogabinete = 21000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      veintidos.onclick = function(e){
          resultadogabinete.textContent = "MSI MAG VAMPIRIC 010 - $44.000";
          preciogabinete = 44000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      veintitres.onclick = function(e){
          resultadogabinete.textContent = "Cougar MX330 - $35.000";
          preciogabinete = 35000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      veinticuatro.onclick = function(e){
          resultadogabinete.textContent = "Thermaltake V200 - $34.000";
          preciogabinete = 34000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      eliminargabinete.onclick = function(e){
          resultadogabinete.textContent = "Selecciona algún Gabinete";
          preciogabinete = 0;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }




       //placa
      veinticinco.onclick = function(e){
          resultadoplaca.textContent = "Intel MSI H310M PRO-VDH PLUS - $51.000";
          precioplaca = 51000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      veintiseis.onclick = function(e){
          resultadoplaca.textContent = "Intel Gigabyte B360M DS3H - $67.000";
          precioplaca = 67000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      veintisiete.onclick = function(e){
          resultadoplaca.textContent = "AMD MSI A320M PRO-M2 V2 - $48.000";
          precioplaca = 48000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      veintiocho.onclick = function(e){
          resultadoplaca.textContent = "AMD MSI B450M PRO-M2 - $58.000";
          precioplaca = 58000;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }
      eliminarplaca.onclick = function(e){
          resultadoplaca.textContent = "Selecciona alguna Placa madre";
          precioplaca = 0;
          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }



      eliminartodo.onclick = function(e){

          precioplaca = 0;
          preciogabinete = 0;
          precioalmacenamiento = 0;
          precioprocesador = 0;
          preciotarjeta = 0;
          preciomemoria = 0;
          preciofuente = 0;

          resultadoplaca.textContent = "Selecciona alguna Placa madre";
          resultadogabinete.textContent = "Selecciona algún Gabinete";
          resultadofuente.textContent = "Selecciona alguna Fuente de poder";
          resultadoalmacenamiento.textContent = "Selecciona alguna unidad de Almacenamiento";
          resultadomemoria.textContent = "Selecciona alguna Memoria";
          resultadoprocesador.textContent = "Selecciona algún Procesador";
          resultadotarjeta.textContent = "Selecciona alguna Tarjeta de Video";

          preciofinal = precioprocesador+preciotarjeta+preciomemoria+precioalmacenamiento+preciofuente+preciogabinete+precioplaca;
          resultadototal.textContent = "Precio total: $" + preciofinal;
      }


!function(e){"use strict";e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=e(this.hash);if((a=a.length?a:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:a.offset().top-72},1e3,"easeInOutExpo"),!1}}),e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")}),e("body").scrollspy({target:"#mainNav",offset:75});function a(){100<e("#mainNav").offset().top?e("#mainNav").addClass("navbar-scrolled"):e("#mainNav").removeClass("navbar-scrolled")}a(),e(window).scroll(a),e("#portfolio").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}(jQuery);


    }
