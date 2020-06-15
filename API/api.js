
const API_TOKEN = "d7709bfaa9d07a6599f53bc548fc4df0";

export function getFilmSearch (text){
    const url = "https://api.themoviedb.org/3/search/movie?api_key="+API_TOKEN+"&query="+text

    return fetch(url)
      .then((response)=>response.json())
      .catch((error)=>console.error(error))
      
}
