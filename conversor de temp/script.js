document.querySelector('#btn').onclick=function(){
  let graus = document.querySelector("#numero").value;
  let selector = document.querySelector("#selector").value;
  let tr=document.createElement('tr');
  let tbody=document.querySelector('tbody');
  var not = document.querySelector("#numero").value;
  var not2 = document.querySelector("#selector").value;

  if ((not !=  "") && (not2 != 0)){
    
    
    graus=parseFloat(graus);
      
      if(selector === '°C'){
        var celsius = graus;
        var farenheit = ((graus * 1.8) + 32).toFixed(2);
        var kelvin = ((graus + 273)).toFixed(2);
        var Rankine = ((graus + 273.15) * 1.8).toFixed(2);
    }
    
    if(selector === '°F'){
        var celsius = ((graus - 32) / 1.8).toFixed(2);
        var farenheit = graus;
        var kelvin = ((graus + 459.67) / 1.8).toFixed(2);
        var Rankine = ((graus + 459.67)).toFixed(2);
    }
    
      if(graus>0){
    if(selector === 'K'){
        var celsius = ((graus - 273.15).toFixed(2));
        var farenheit = ((graus * 1.8) - 459.67).toFixed(2);
        var kelvin = graus;
        var Rankine = ((graus * 1.8)).toFixed(2);
    }   
    }
    
    if(selector === 'R'){
        var celsius = ((graus - 491.67) / 1.8).toFixed(2);
        var farenheit = ((graus - 459.67)).toFixed(2);
        var kelvin = ((graus / 1.8)).toFixed(2);
        var Rankine = graus;    
    }

  
    
    let tdCelsius=document.createElement("td");
        tdCelsius.append(celsius);
        tr.append(tdCelsius);
    
        let tdFarenheit=document.createElement("td");
        tdFarenheit.append(farenheit);
        tr.append(tdFarenheit);
    
        let tdKelvin=document.createElement("td");
        tdKelvin.append(kelvin);
        tr.append(tdKelvin);
    
        let tdRankine=document.createElement("td");
        tdRankine.append(Rankine);
        tr.append(tdRankine);
    
      tbody.append(tr)
    
      document.querySelector("#numero").value="";
    }

    else {
      alert("Digite um valor");
    }
  
  }
