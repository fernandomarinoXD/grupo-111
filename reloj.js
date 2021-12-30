(function(){
var actualizarHora = function (){
    var fecha = new Date(),
        horas = fecha.getHours(), 
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        ampm,
        year = fecha.getFullYear();
         
      
      var pHoras = document.getElementById("horas"),
          pMinutos = document.getElementById ("minutos"),
          pSegundos = document.getElementById("segundos"),
          pDiaSemana = document.getElementById("diaSemana"),
          pDia = document.getElementById("dia"),
          pMes = document.getElementById ("mes"),
          pAmPm = document.getElementById ("ampm"),
          pYear = document.getElementById ("year");

        var semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
        pDiaSemana.textContent = semana [diaSemana];
        pDia.textContent = dia;
        
        var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];
        pMes.textContent = meses[mes];
        pYear.textContent = year;

        if (horas < 10){horas = "0" +horas};
        pHoras.textContent = horas;
        
        if (minutos < 10){minutos = "0" + minutos};
        pMinutos.textContent = minutos;
        
        if (segundos <10){segundos = "0" + segundos};
        pSegundos.textContent = segundos;
      
      };

  actualizarHora();
  
  var intervalo = setInterval (actualizarHora ,1000); 

} ())
