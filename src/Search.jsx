import { useState } from "react";



function Search(){
  
  const  [cidade, setCidade] = useState("");

  function look(){

    let currentValue = document.querySelector('input[name=pesq]').value;

    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;

    fetch(url).then(response=> response.json()).then(data=>{
      const {main, name, sys, weather} = data;

      if (sys != undefined){

      

      if (weather != undefined){

        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]}.svg`;
        setCidade(`
        <div class="result">
        <p>Temperatura: ${main.temp}°</p>
        <p>País: ${sys.country}</p>
        <p>Cidade: ${name}</p>
        <p>${weather[0]['description']}</p>
        <img src="${icon}" /> 
        
        </div>
        
        `);

        
      }
      }else{
        setCidade("")
      }
    })
  }

    return(

    <div className="wraper">

      <div className="search">

        <h2>Previsão do tempo</h2>

        <input placeholder="Digite a cidade" type="text" className="pesq" name="pesq"  />
        <input className="submit" type="submit" value="Buscar" onClick={look} />
        
        </div>

        {
          (cidade != "")?
          <div dangerouslySetInnerHTML={{__html: cidade}}/>: <div style={{padding:'10px', fontWeight:'bold'}}>Pesquise por algo acima...</div>
          
          

        }


    </div>

  )
  
}


  export default Search