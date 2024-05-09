var xmlString = ''; // Variável global para armazenar o XML

// Função para criar o XML com base nos dados inseridos
function cadastrar() {
  var nome = document.getElementById('nome').value;
  var numeroCamisa = document.getElementById('numeroCamisa').value;

  // Criar um novo documento XML
  var xmlDoc = document.implementation.createDocument(null, 'cadastro_jogadores');

  // Criar elementos e atributos
  var jogador = xmlDoc.createElement('jogador');
  var nomeElemento = xmlDoc.createElement('nome');
  nomeElemento.textContent = nome;
  var numeroCamisaElemento = xmlDoc.createElement('numero_camisa');
  numeroCamisaElemento.textContent = numeroCamisa;

  // Adicionar elementos e atributos ao documento XML
  jogador.appendChild(nomeElemento);
  jogador.appendChild(numeroCamisaElemento);
  xmlDoc.documentElement.appendChild(jogador);

  // Converter o documento XML em uma string XML com quebras de linha entre os elementos
  xmlString = new XMLSerializer().serializeToString(xmlDoc);

  // Exibir o conteúdo XML na tela
  var xmlContent = document.getElementById('xmlContent');
  xmlContent.textContent = xmlString;
}