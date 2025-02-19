const form = document.getElementById('comparar');


form.addEventListener('submit', function(e) {
  e.preventDefault();

  const CampoA = document.getElementById('A');
  const CampoB = document.getElementById('B');

  let A = `${CampoA.value}`;
  let B = `${CampoB.value}`;

  const successMsg = "Positivo";
  const errorMsg = "Negativo";

  const success = document.querySelector('.success-msg');
  const error = document.querySelector('.error-msg');

  if(A < B) {
   
   success.innerHTML = successMsg;
   success.style.display = 'block';
   error.style.display = 'none';
   
  } else {

    error.innerHTML = errorMsg;
    error.style.display = 'block';
    success.style.display = 'none';
  }

});
