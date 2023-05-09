const botao = document.getElementById('botao-opcoes');
const lista = document.getElementById('opcoes-lista');

botao.addEventListener('click', function() {
  if (lista.style.display === 'none') {
    lista.style.display = 'block';
  } else {
    lista.style.display = 'none';
  }
});


