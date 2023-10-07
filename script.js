const campos = document.querySelectorAll('.input_required')
const spans = document.querySelectorAll('.span_required')
const cpf = document.querySelector('#CPF')

function aplicarErro(_index){
   
    spans[_index].style.display = 'block';

}
  function retirarErro(_index){
   
    spans[_index].style.display='none';
 }


function validarNome(){

    if(campos[0].value.length < 3)
    {
          aplicarErro(0);
    } else{
      retirarErro(0);  

      }
}