const getClima = (cidade) => {

    // A chave da API é necessária para fazer solicitações à API
    const apiKey = "e3026b12d4b64190a41155210233103";
    const selectedOption = cidade.options[select.selectedIndex];
    const selectedOptionText = selectedOption.text;

    event.preventDefault();

    // Obtém a cidade inserida pelo usuário
    const city = selectedOptionText;
    console.log(selectedOptionText)

    // Constrói a URL para a solicitação à API

    const url = `http://api.weatherapi.com/v1/current.json?key=106d6d87964c4933ae9160421233103&q=${city}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const location = data.location.name;
            const tempC = data.current.temp_c;
            const tempF = data.current.temp_f;
            const condition = data.current.condition.text;
            const humidity = data.current.humidity;
            conditionTraslated = traduzirCondition(data.current.condition.code, data.current.condition.text);

            const message = `O clima em ${location} é de <span>${tempC}°C</span> (${tempF}°F) com condição ${conditionTraslated} e umidade de <span>${humidity}%</span>.`;

            document.querySelector("#weather").innerHTML = message;
        })

        .catch(
            error => console.log("Erro: Não foi possível obter dados do clima.", error)
        );
}

const conditionMap = {
    1000: "Céu limpo",
    1003: "Parcialmente nublado",
    1006: "Nublado",
    1009: "Encoberto",
    1030: "Neblina ou nevoeiro",
    1063: "Chuva fraca ou chuvisco",
    1066: "Neve fraca ou chuva com neve",
    1069: "Chuvisco congelado",
    1072: "Neve congelada",
    1087: "Tempestade com chuva e neve",
    1114: "Neve forte",
    1117: "Neve com chuva",
    1135: "Nevoeiro ou neblina congelada",
    1147: "Bruma ou nevoeiro com poeira",
    1150: "Chuva com nevoeiro",
    1153: "Chuva leve e intermitente",
    1168: "Chuva moderada ou forte",
    1171: "Chuva moderada ou forte com granizo",
    1180: "Chuva leve",
    1183: "Chuva forte e intermitente",
    1186: "Chuva forte",
    1189: "Chuva com granizo",
    1192: "Chuva forte com granizo",
    1195: "Chuva congelada",
    1198: "Chuva congelada intermitente",
    1201: "Chuva congelada forte",
    1204: "Granizo",
    1207: "Chuva com granizo leve",
    1210: "Chuva com granizo moderado ou forte",
    1213: "Chuva com granizo forte",
    1216: "Chuva com neve leve",
    1219: "Chuva com neve moderada ou forte",
    1222: "Chuva com neve forte",
    1225: "Neve leve",
    1237: "Chuva com poeira",
    1240: "Chuva com granizo e neve leve",
    1243: "Chuva com granizo e neve moderada ou forte",
    1246: "Chuva com granizo e neve forte",
    1249: "Chuva com poeira e neve",
    1252: "Granizo e neve leve",
    1255: "Granizo e neve moderada ou forte",
    1258: "Granizo e neve forte",
    1261: "Tempestade com chuva leve",
    1264: "Tempestade com chuva moderada ou forte",
    1273: "Tempestade com granizo leve",
    1276: "Tempestade com granizo moderado ou forte",
    1279: "Tempestade com neve leve",
    1282: "Tempestade com neve moderada ou forte"
};

function traduzirCondition(code, name) {
    if (conditionMap[code]) {
        return conditionMap[code];
    } else {
        return name;
    }

}