import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getAlbumDataById } from '../../api/Api';
import CardItem from '../CardItem/CardItem';
import './albumDetails.css';
import { useHistory } from 'react-router-dom';


const AlbumDetails = () => {
  const { id } = useParams();
  const history = useHistory()
  const [albumInfo, setAlbumInfo] = useState([]);

  const fetchAlbumDetails = async (id) => {
    let response = await getAlbumDataById(id);
    if (response.length) {
      setAlbumInfo([...response])
    }
  }

  const handleBack = () => {
    history.goBack()
  }

  useEffect(() => {
    fetchAlbumDetails(id);
  }, [id])

  return (
    <div>
      <div className="heading header-container">
        <span className="back-btn" onClick={handleBack}>⬅</span>
        <span className="">Album Details</span>
      </div>
      <div className="album-details-container">
        {
          albumInfo.map((item) => (
            <CardItem key={`album_detail_${item.id}`} cardData={item} imageUrl={item.thumbnailUrl} title={item.title}></CardItem>
          ))
        }
      </div>
    </div>
  )
}

export default AlbumDetails;