// chamada da api do github -> criação dos grid de projetos
document.addEventListener("DOMContentLoaded", function() {
    const userName = "lucasvalgoi"
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(response => response.json())
    .then(data => {
        const lista = document.getElementById('lista-projetos')

        data.forEach(repo => {
            const divProjeto = document.createElement('div')

            divProjeto.classList.add('project-item')
            divProjeto.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "Sem descrição"}</p>
                <a href="${repo.html_url}" target="_blank">Ver Projeto</a>
            `
            lista.append(divProjeto)
        });

    })
    .catch(error => console.error('Erro ao carregar informações do repositório!', error))
})

// efeito de aparecer/desaparecer menu do Header ao clicar
let btn = document.querySelector('.btn-menu');
let menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
    let menuAtivo = menu.classList.toggle('ativo');
    if (menuAtivo) {
        menu.style.padding = '20px';
    } else if (!menuAtivo) {
        menu.style.padding = '0px';
    }
})

// fechar o menu ao clicar em um dos links de navegação
let menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('ativo');
        menu.style.padding = '0px';
    })
})