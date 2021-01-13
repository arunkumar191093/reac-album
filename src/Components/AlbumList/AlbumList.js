import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './album.css';
import { getAllAlbums } from '../../api/Api';

const AlbumList = (props) => {
  const [albums, setAlbum] = useState([]);
  const history = useHistory();

  const fetchAlbums = async () => {
    let response = await getAllAlbums();
    if (response.length) {
      setAlbum([...response])
    }
  }

  const handleItemClick = (id) => {
    history.push(`/${id}`)
  }

  useEffect(() => {
    fetchAlbums();
  }, [])

  return (
    <div>
      <h3 className="heading">Album List</h3>
      <ul className="list-container">
        {
          albums.map((item) => (
            <li className="album-list-item" key={`album${item.id}`} onClick={() => handleItemClick(item.id)}>{item.title}</li>
          ))
        }

      </ul>
    </div>
  )
}

export default AlbumList;