var API_KEY = 'adf4636daefa0003fe5a88bb7343d419';

function exibePopulares(){
    let divPopulares = document.getElementById('cardsFilmesPopulares');
    let texto = '';

    let dados = JSON.parse(this.responseText);
    for(i = 0; i < 6; i++){
        let filme = dados.results[i];

        texto = texto + `
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card" id="cardPopulares" style="width: 18rem;">
                    <a href="https://www.themoviedb.org/movie/${filme.id}" target="_blank">
                        <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="Imagem de capa do card">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${filme.title}</h5>
                        <h6 class="card-subtitle mb-2">Avaliação: ${filme.vote_average}</h6>
                        <h6 class="card-lancamento">Lançamento: ${filme.release_date}</h6>
                        <p class="card-text">Sinopse: ${filme.overview}</p>
                    </div>
                </div>
            </div>
                `;
    }
    divPopulares.innerHTML = texto;
}
// EXIBE MELHORES FILMES****
function exibeLancamentos(){
    let divLancamentos = document.getElementById('cardsFilmesCinema');
    let texto = '';

    let dados = JSON.parse(this.responseText);
    for(i = 0; i < 12; i=i+2){
        let filme = dados.results[i];

        texto = texto + `
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card" id="cardLancamentos" style="width: 18rem;">
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
    divLancamentos.innerHTML = texto;
}



function buscaPopulares(){
    let xhr = new XMLHttpRequest();

    // GET populares da API
    xhr.onload = exibePopulares;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`);
    xhr.send();
}
// Busca Melhores filmes (top_rated)***
function buscaLancamentos(){
    let xhr = new XMLHttpRequest();

    // GET populares da API
    xhr.onload = exibeLancamentos;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=pt-BR`);
    xhr.send();

}


buscaPopulares();
buscaLancamentos();