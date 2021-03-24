const conversor = document.querySelector('button')

conversor.onclick = () => {
var dolarReal = Number(document.querySelector('input').value.replace('.',','))
  if (dolarReal < 1) {
      document.querySelector('span').innerHTML = "Valor inválido!"
  } else {
      document.querySelector('span').innerHTML = (dolarReal * 5.52).toFixed(2) + ' Reais'
  }  
}