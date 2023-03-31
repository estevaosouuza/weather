const faseLua = (lat, long) => {
    // Chave da API da NASA
    const apiKey = "Az8iStIEGKuSaKp56cAbDAxu0f68ogOE9Bz0dgzV";

    // Obter a data atual
    const hoje = new Date();

    // Coordenadas da cidade de São Paulo
    const latitude = -23.5505;
    const longitude = -46.6333;

    // URL da API da NASA
    const url = `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=${hoje.toISOString().slice(0, 10)}&dim=0.10&api_key=${apiKey}`;

    // Fazer uma requisição à API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Extrair a fase da lua dos dados retornados pela API
            const percentualIluminado = data.percent_brightness;
            const idadeDaLua = data.lunar_day;

            let faseDaLua = "";
            if (percentualIluminado == 0) {
                faseDaLua = "Lua Nova";
            } else if (percentualIluminado < 50) {
                if (percentualIluminado < 25) {
                    faseDaLua = "Quarto Minguante";
                } else {
                    faseDaLua = "Crescente";
                }
            } else if (percentualIluminado == 50) {
                faseDaLua = "Lua Cheia";
            } else {
                if (percentualIluminado < 75) {
                    faseDaLua = "Minguante";
                } else {
                    faseDaLua = "Quarto Crescente";
                }
            }

            // Exibir a fase da lua no console
            const message =`A fase atual da lua é ${faseDaLua}.`;


            document.querySelector("#fase").textContent = message;
        })
        .catch(error => console.error(error));

}
