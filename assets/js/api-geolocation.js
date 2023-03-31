const getLatLong = (cityID) => {
    //console.log(city)
    //const apiKey = "570113002497446316772x62102";
    const cidadeID = parseInt(cityID); // nome da cidade a ser geocodificada
    const url = `assets/json/municipios.json`;
  
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Pesquisar a cidade com o código IBGE desejado
        //console.log(cidadeID);
        const cidade = data.filter((item) => {
          return item.codigo_ibge === cidadeID;
        });
  
        //console.log(cidade[0].latitude);
  
  
        if (cidade) {
          const latitude = cidade[0].latitude;
          const longitude = cidade[0].longitude;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  
          faseLua(latitude,longitude)
  
          return dados = [`Latitude: ${latitude}, Longitude: ${longitude}`];
        } else {
          console.log('Cidade não encontrada');
        }
      })
      .catch(error => console.log(error));
  }