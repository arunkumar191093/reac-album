export const getAllAlbums = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/albums', {
    method: 'GET'
  });
  let responseJSON = response.json();
  return responseJSON;
}

export const getAlbumDataById = async (id) => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`, {
    method: 'GET'
  });
  let responseJSON = response.json();
  return responseJSON;
}