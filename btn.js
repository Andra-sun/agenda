const botao = document.getElementById('botao-opcoes');
const lista = document.getElementById('opcoes-lista');

botao.addEventListener('click', function() {
  if (lista.style.display === 'none') {
    lista.style.display = 'block';
  } else {
    lista.style.display = 'none';
  }
});

const opcao1 = document.querySelector('#opcoes-lista li:first-child a');

opcao1.addEventListener('click', function(event) {
  // impede que o navegador siga o link normalmente
  event.preventDefault();
  
  // atualiza a página com outras informações
  window.location.href = 'html/outros.html';
});

