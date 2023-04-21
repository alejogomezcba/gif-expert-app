export const getGifs = async (category) => {

    const apiKey = 'vafAFthHu5R18CWWVEYOsZYtCqnutHy7';
    const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=';
    const fullUrl = `${apiURL}${apiKey}&q=${category}&limit=10`;
    const response = await fetch(fullUrl);
    const { data } = await response.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;

}
