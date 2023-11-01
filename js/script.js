const carousel = new bootstrap.Carousel('#carrosel')



function funcao1() {
  var x;
  var r = confirm("Nossa equipe entrará em contato com você!");
  if (r == true) {
    x = "Obrigada por escolher a Natural beauty!";
  }
  else {
    x = "Você pressionou Cancelar!";
  }
  document.getElementById("demo").innerHTML = x;
}


function myAgenda() {
  alert("Agendado com Sucesso!");
}
