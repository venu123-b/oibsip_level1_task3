
function myFunction() {
      var x = document.getElementById('myText').value;

      var z=document.getElementById('type');
      if (z.value=="celcius"){
        var result= (x*1.800)+32;
        document.getElementById("demo").innerHTML = result+" Fahrenheit";

      }
      else{
        var result= (x-32)*5/9;
        document.getElementById("demo").innerHTML = result+ " celcius";

      }
  }
