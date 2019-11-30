    //Declaramos variables
    var codigorango = 0;
    var codigoutilidad = 0;
    var codigosuma = 0;

    function init(){
  //variables
  var resultadorango = document.getElementById('resultadorango');
  var resultadofinal = document.getElementById('resultadofinal');

  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  
  var treinta = document.getElementById('treinta');
  var veinte = document.getElementById('veinte');
  var diez = document.getElementById('diez');

  resultadofinal.innerText = "Seleccione un rango y una utilidad";
  resultadorango.innerText = "Seleccione un rango";
  resultadoutilidad.innerText = "Seleccione una utilidad";


      //Eventos de click
      diez.onclick = function(e){
          resultadofinal.innerText = "Seleccione un rango y una utilidad";
          resultadorango.innerText = "Opción seleccionada:\nBajo: $200.000 - $299.999"
          codigorango = 0;
          codigorango = 10;
          codigosuma = codigorango+codigoutilidad;
          if (codigosuma == 11) 
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Casual'\n\nProcesador: Intel Pentium G5400 – $49.000\n Placa Madre: MSI H310M PRO-VDH PLUS – $51.000\n RAM: Crucial 8GB DDR4-2666 – $32.000\n Disco duro: Western Digital Blue 1TB - $33.000\n Fuente poder: EVGA 400W – $23.000\n Gabinete: Cougar MG110-W – $21.000\n \nTotal: $209.000";}
          else if (codigosuma == 12)
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Aplicaciones pesadas'\n\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $235.000";}
          else if (codigosuma == 13)
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Gaming'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Pentium G5400 – $49.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $299.000";}
          else if (codigosuma == 21)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Casual'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $325.000";}
          else if (codigosuma == 22)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Aplicaciones pesadas'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $405.000";}
          else if (codigosuma == 23)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Gaming'\n\nTarjeta gráfica: EVGA GeForce GTX 1660 6GB - $220.000\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 500W – $36.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $494.000";}
          else if (codigosuma == 31)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Casual'\n\nTarjeta gráfica: Radeon RX 570 4GB- $133.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 500W – $36.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $645.000";}
          else if (codigosuma == 32)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Aplicaciones pesadas'\n\nTarjeta gráfica: Radeon RX 570 4GB - $133.000\nProcesador: Intel Core i7-9700 – $300.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 500W – $36.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $816.000";}
          else if (codigosuma == 33)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Gaming'\n\nTarjeta gráfica: Zotac GeForce RTX 2060 6GB - $389.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 600W – $41.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $906.000";}
          else
            {resultadofinal.innerText = "Seleccione un rango y una utilidad";}
      }


      veinte.onclick = function(e){
          resultadofinal.innerText = "Seleccione un rango y una utilidad";
          resultadorango.innerText = "Opción seleccionada:\nMedio: $300.000 - $599.999"
          codigorango = 0;
          codigorango = 20;
          codigosuma = codigorango+codigoutilidad;
          if (codigosuma == 11) 
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Casual'\n\nProcesador: Intel Pentium G5400 – $49.000\n Placa Madre: MSI H310M PRO-VDH PLUS – $51.000\n RAM: Crucial 8GB DDR4-2666 – $32.000\n Disco duro: Western Digital Blue 1TB - $33.000\n Fuente poder: EVGA 400W – $23.000\n Gabinete: Cougar MG110-W – $21.000\n \nTotal: $209.000";}
          else if (codigosuma == 12)
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Aplicaciones pesadas'\n\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $235.000";}
          else if (codigosuma == 13)
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Gaming'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Pentium G5400 – $49.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $299.000";}
          else if (codigosuma == 21)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Casual'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $325.000";}
          else if (codigosuma == 22)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Aplicaciones pesadas'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $405.000";}
          else if (codigosuma == 23)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Gaming'\n\nTarjeta gráfica: EVGA GeForce GTX 1660 6GB - $220.000\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 500W – $36.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $494.000";}
          else if (codigosuma == 31)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Casual'\n\nTarjeta gráfica: Radeon RX 570 4GB - $133.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 500W – $36.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $645.000";}
          else if (codigosuma == 32)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Aplicaciones pesadas'\n\nTarjeta gráfica: Radeon RX 570 4GB - $133.000\nProcesador: Intel Core i7-9700 – $300.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 500W – $36.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $816.000";}
          else if (codigosuma == 33)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Gaming'\n\nTarjeta gráfica: Zotac GeForce RTX 2060 6GB- $389.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 600W – $41.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $906.000";}
          else
            {resultadofinal.innerText = "Seleccione un rango y una utilidad";}
      }

      treinta.onclick = function(e){
          resultadofinal.innerText = "Seleccione un rango y una utilidad";
          resultadorango.innerText = "Opción seleccionada:\nAlto: $600.000 - $1.000.0000"
          codigorango = 0;
          codigorango = 30;
          codigosuma = codigorango+codigoutilidad;
          if (codigosuma == 11) 
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Casual'\n\nProcesador: Intel Pentium G5400 – $49.000\n Placa Madre: MSI H310M PRO-VDH PLUS – $51.000\n RAM: Crucial 8GB DDR4-2666 – $32.000\n Disco duro: Western Digital Blue 1TB - $33.000\n Fuente poder: EVGA 400W – $23.000\n Gabinete: Cougar MG110-W – $21.000\n \nTotal: $209.000";}
          else if (codigosuma == 12)
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Aplicaciones pesadas'\n\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $235.000";}
          else if (codigosuma == 13)
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Gaming'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Pentium G5400 – $49.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $299.000";}
          else if (codigosuma == 21)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Casual'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $325.000";}
          else if (codigosuma == 22)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Aplicaciones pesadas'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $405.000";}
          else if (codigosuma == 23)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Gaming'\n\nTarjeta gráfica: EVGA GeForce GTX 1660 6GB - $220.000\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 500W – $36.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $494.000";}
          else if (codigosuma == 31)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Casual'\n\nTarjeta gráfica: Radeon RX 570 4GB - $133.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 500W – $36.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $645.000";}
          else if (codigosuma == 32)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Aplicaciones pesadas'\n\nTarjeta gráfica: Radeon RX 570 4GB - $133.000\nProcesador: Intel Core i7-9700 – $300.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 500W – $36.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $816.000";}
          else if (codigosuma == 33)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Gaming'\n\nTarjeta gráfica: Zotac GeForce RTX 2060 6GB - $389.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 600W – $41.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $906.000";}
          else
            {resultadofinal.innerText = "Seleccione un rango y una utilidad";}
      }

      uno.onclick = function(e){
          resultadofinal.innerText = "Seleccione un rango y una utilidad";
          resultadoutilidad.innerText = "Opción seleccionada:\nCasual"
          codigoutilidad = 0;
          codigoutilidad = 1;
          codigosuma = codigorango+codigoutilidad;
          if (codigosuma == 11) 
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Casual'\n\nProcesador: Intel Pentium G5400 – $49.000\n Placa Madre: MSI H310M PRO-VDH PLUS – $51.000\n RAM: Crucial 8GB DDR4-2666 – $32.000\n Disco duro: Western Digital Blue 1TB - $33.000\n Fuente poder: EVGA 400W – $23.000\n Gabinete: Cougar MG110-W – $21.000\n \nTotal: $209.000";}
          else if (codigosuma == 12)
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Aplicaciones pesadas'\n\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $235.000";}
          else if (codigosuma == 13)
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Gaming'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Pentium G5400 – $49.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $299.000";}
          else if (codigosuma == 21)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Casual'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $325.000";}
          else if (codigosuma == 22)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Aplicaciones pesadas'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $405.000";}
          else if (codigosuma == 23)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Gaming'\n\nTarjeta gráfica: EVGA GeForce GTX 1660 6GB - $220.000\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 500W – $36.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $494.000";}
          else if (codigosuma == 31)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Casual'\n\nTarjeta gráfica: Radeon RX 570 4GB - $133.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 500W – $36.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $645.000";}
          else if (codigosuma == 32)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Aplicaciones pesadas'\n\nTarjeta gráfica: Radeon RX 570 4GB - $133.000\nProcesador: Intel Core i7-9700 – $300.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 500W – $36.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $816.000";}
          else if (codigosuma == 33)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Gaming'\n\nTarjeta gráfica: Zotac GeForce RTX 2060 6GB - $389.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 600W – $41.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $906.000";}
          else
            {resultadofinal.innerText = "Seleccione un rango y una utilidad";}
      }


      dos.onclick = function(e){
          resultadofinal.innerText = "Seleccione un rango y una utilidad";
          resultadoutilidad.innerText = "Opción seleccionada:\nAplicaciones pesadas"
          codigoutilidad = 0;
          codigoutilidad = 2;
          codigosuma = codigorango+codigoutilidad;
          if (codigosuma == 11) 
           {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Casual'\n\nProcesador: Intel Pentium G5400 – $49.000\n Placa Madre: MSI H310M PRO-VDH PLUS – $51.000\n RAM: Crucial 8GB DDR4-2666 – $32.000\n Disco duro: Western Digital Blue 1TB - $33.000\n Fuente poder: EVGA 400W – $23.000\n Gabinete: Cougar MG110-W – $21.000\n \nTotal: $209.000";}
          else if (codigosuma == 12)
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Aplicaciones pesadas'\n\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $235.000";}
          else if (codigosuma == 13)
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Gaming'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Pentium G5400 – $49.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $299.000";}
          else if (codigosuma == 21)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Casual'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $325.000";}
          else if (codigosuma == 22)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Aplicaciones pesadas'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $405.000";}
          else if (codigosuma == 23)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Gaming'\n\nTarjeta gráfica: EVGA GeForce GTX 1660 6GB - $220.000\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 500W – $36.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $494.000";}
          else if (codigosuma == 31)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Casual'\n\nTarjeta gráfica: Radeon RX 570 4GB - $133.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 500W – $36.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $645.000";}
          else if (codigosuma == 32)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Aplicaciones pesadas'\n\nTarjeta gráfica: Radeon RX 570 4GB - $133.000\nProcesador: Intel Core i7-9700 – $300.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 500W – $36.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $816.000";}
          else if (codigosuma == 33)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Gaming'\n\nTarjeta gráfica: Zotac GeForce RTX 2060 6GB - $389.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 600W – $41.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $906.000";}
          else
            {resultadofinal.innerText = "Seleccione un rango y una utilidad";}
      }


      tres.onclick = function(e){
          resultadofinal.innerText = "Seleccione un rango y una utilidad";
          resultadoutilidad.innerText = "Opción seleccionada:\nGaming"
          codigoutilidad = 0;
          codigoutilidad = 3;
          codigosuma = codigorango+codigoutilidad;
          if (codigosuma == 11) 
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Casual'\n\nProcesador: Intel Pentium G5400 – $49.000\n Placa Madre: MSI H310M PRO-VDH PLUS – $51.000\n RAM: Crucial 8GB DDR4-2666 – $32.000\n Disco duro: Western Digital Blue 1TB - $33.000\n Fuente poder: EVGA 400W – $23.000\n Gabinete: Cougar MG110-W – $21.000\n \nTotal: $209.000";}
          else if (codigosuma == 12)
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Aplicaciones pesadas'\n\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $235.000";}
          else if (codigosuma == 13)
            {resultadofinal.innerText = "Rango de precio 'Bajo' y utilidad 'Gaming'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Pentium G5400 – $49.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $299.000";}
          else if (codigosuma == 21)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Casual'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: Crucial 8GB DDR4-2666 – $32.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $325.000";}
          else if (codigosuma == 22)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Aplicaciones pesadas'\n\nTarjeta gráfica: NVIDIA GeForce GT 1030 2GB - $90.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 400W – $23.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $405.000";}
          else if (codigosuma == 23)
            {resultadofinal.innerText = "Rango de precio 'Medio' y utilidad 'Gaming'\n\nTarjeta gráfica: EVGA GeForce GTX 1660 6GB - $220.000\nProcesador: Intel Core i3-9100F – $75.000\nPlaca Madre: MSI H310M PRO-VDH PLUS – $51.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 1TB - $33.000\nFuente poder: EVGA 500W – $36.000\nGabinete: Cougar MG110-W – $21.000\n\nTotal: $494.000";}
          else if (codigosuma == 31)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Casual'\n\nTarjeta gráfica: Radeon RX 570 4GB - $133.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 500W – $36.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $645.000";}
          else if (codigosuma == 32)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Aplicaciones pesadas'\n\nTarjeta gráfica: Radeon RX 570 4GB- $133.000\nProcesador: Intel Core i7-9700 – $300.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 500W – $36.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $816.000";}
          else if (codigosuma == 33)
            {resultadofinal.innerText = "Rango de precio 'Alto' y utilidad 'Gaming'\n\nTarjeta gráfica: Zotac GeForce RTX 2060 6GB - $389.000\nProcesador: Intel Core i5-9400F – $129.000\nPlaca Madre: Gigabyte B360M – $85.000\nRAM: x2 Crucial 8GB DDR4-2666 – $58.000\nDisco duro: Western Digital Blue 2TB - $60.000\nFuente poder: EVGA 600W – $41.000\nSSD: Crucial P1 1TB - $100.000\nGabinete: MSI MAG VAMPIRIC 010 – $44.000\n\nTotal: $906.000";}
          else
            {resultadofinal.innerText = "Seleccione un rango y una utilidad";}
      }






}
