let output=document.getElementById("output_screen");
        function display(num)
        {
          output.value+=num;
        }
        function Clear()
        {
          output.value="";
        }
        
        function Calculate()
        {
          try{
            output.value=eval(output.value);
          }
          catch(err)
          {
            alert('invalid');
          }
        }