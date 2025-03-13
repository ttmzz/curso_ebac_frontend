$(document).ready(function() {
    const Lista = $('<ul></ul>'); // Adiciona a Lista ao DOM
    $('.container').append(Lista);

    $('#formulario').on('submit', function(e) {
       e.preventDefault();
       const valorInput = $('#tarefa').val(); // Obtem o valor do input
       const tarefas = $('<li class="line-through"></li>').text(valorInput); // Cria um novo item da lista

       Lista.append(tarefas); // Adiciona o item a Lista
       $('#tarefa').val(''); // Remove o valor do input após o evento

       $('.line-through').on('click', function() {
         $(this).css({'text-decoration': 'line-through'}); // Ao clicar no item o texto é desativado
       });
    });

});

