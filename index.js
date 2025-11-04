document.addEventListener('DOMContentLoaded', function() {
        const nomejs = document.querySelector('#nome');
        const usernamejs = document.querySelector('#username');
        const avatarjs = document.querySelector('#avatar');
        const reposjs = document.querySelector('#repos');
        const seguidoresjs = document.querySelector('#seguidores');
        const seguindojs = document.querySelector('#seguindo');
        const linkjs = document.querySelector('#link');


        fetch('https://api.github.com/users/ttmzz')
            .then(function(res) {
                return res.json();
            })
            .then(function(json) {
    
                console.log(json);

                // Preenche os elementos da página com os dados da API
                nomejs.innerText = json.name;                // Nome do usuário
                usernamejs.innerText = '@' + json.login;     // Nome de usuário (login)
                avatarjs.src = json.avatar_url;              // Imagem de perfil
                reposjs.innerText = json.public_repos;       // Quantidade de repositórios públicos
                seguidoresjs.innerText = json.followers;     // Quantidade de seguidores
                seguindojs.innerText = json.following;       // Quantidade de pessoas que ele segue
                linkjs.href = json.html_url;                 // Link para o perfil
                linkjs.innerText = 'Ver perfil no GitHub';   // Texto visível do link
            })


            .catch(function(erro) {
                alert('Ocorreu um erro ao carregar o perfil, tente novamente mais tarde!');
            })
            
});
