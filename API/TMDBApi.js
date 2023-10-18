
const API = "7645978d53c846f5f8d2c4c81ba6e71f";
//récupère une liste de films en fonction d'un texte recherché et du numéro de page. 
export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))

  }

// retourne l'URL permettant de récupérer l'image d'un film
//Elle ajoute le name fourni (qui devrait être le chemin du fichier image) 
export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }
//Cette fonction récupère les détails d'un film spécifique en fonction de son id
  export function getFilmDetailFromApi(id){
    const url = 'https://api.themoviedb.org/3/movie/'+id+'?api_key='+API

    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }