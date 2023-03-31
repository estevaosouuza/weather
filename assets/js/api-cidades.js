// URL base da API do IBGE
const API_URL = 'https://servicodados.ibge.gov.br/api/v1';
const regiaoSelect = document.getElementById('regiao');
const cidadesDiv = document.getElementById('cidades');
const select = document.getElementById("cidades");

// Faz uma chamada para a API do IBGE para obter a lista de regiões do Brasil
fetch(`${API_URL}/localidades/regioes`)
  .then(response => response.json())
  .then(regioes => {
    // Para cada região, cria uma nova opção no select box
    regioes.forEach(regiao => {
      const option = document.createElement('option');
      option.value = regiao.id;
      option.textContent = regiao.nome;
      regiaoSelect.appendChild(option);
    });
  });

// Adiciona um listener para capturar a seleção do usuário no select box
regiaoSelect.addEventListener('change', event => {
  const regiaoId = event.target.value;
  if (regiaoId) {
    // Faz uma nova chamada para a API do IBGE para obter as informações das cidades da região selecionada
    fetch(`${API_URL}/localidades/regioes/${regiaoId}/municipios`)
      .then(response => response.json())
      .then(cidades => {
        // Limpa o elemento div onde as informações das cidades serão exibidas
        cidadesDiv.innerHTML = '<option readyonly>Selecione a cidade</option>';

        // Para cada cidade, exibe as informações na página
        cidades.forEach(cidade => {
          //console.log(cidades)
          const div = document.createElement('option');
          div.textContent = `${cidade.nome}`;
          div.setAttribute('value', `${cidade.id}`);
          cidadesDiv.appendChild(div);
        });
      });
  } else {
    // Se o usuário selecionar a opção "Selecione...", limpa o elemento div onde as informações das cidades serão exibidas
    cidadesDiv.innerHTML = '<option readyonly>Selecione a cidade</option>';
  }
});


