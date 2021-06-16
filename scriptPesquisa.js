var API_KEY = 'adf4636daefa0003fe5a88bb7343d419';

function exibePesquisa(){
    let divCards = document.getElementById('cardsPesquisa');
    let texto = '';

    let dados = JSON.parse(this.responseText);
    for(i = 0; i < dados.results.length; i++){
        let filme = dados.results[i];

        texto = texto + `
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card" id="cardPesq" style="width: 18rem;">
                    <a href="https://www.themoviedb.org/movie/${filme.id}" target="_blank">
                        <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="Imagem de capa do card">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${filme.title}</h5>
                        <h6 class="card-subtitle mb-2">Avaliação: ${filme.vote_average}</h6>
                        <h6 class="card-lancamento">Lançamento: ${filme.release_date}</h6>
                        <p class="card-text">${filme.overview}</p>
                    </div>
                </div>
            </div>
                `;
    }
    divCards.innerHTML = texto;
}

function executaPesquisa(){
    let query = document.getElementById('termoPesquisa').value;
    let xhr = new XMLHttpRequest();

    // GET populares da API
    xhr.onload = exibePesquisa;
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=pt-BR`);
    xhr.send();
}

//executaPesquisa();
document.getElementById('botaoPesquisa').addEventListener('click', executaPesquisa);