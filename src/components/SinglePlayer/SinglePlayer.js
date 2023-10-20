import React from 'react';
import './SinglePlayer.css';

const SinglePlayer = ({ player, cart, setCart }) => {
  //   console.log(player);
  const { strPlayer, strDescriptionEN, strCutout, idPlayer } = player;

  const handleAddToCart = () => {
    const playerInfo = {
      strPlayer,
      strDescriptionEN,
      strCutout,
      idPlayer,
    };
    if (cart) {
      const newPlayer = [...cart, playerInfo];
      setCart(newPlayer);
    } else {
      setCart([playerInfo]);
    }
  };

  const handleBookmark = () => {
    const playerInfo = {
      strPlayer,
      strDescriptionEN,
      strCutout,
      idPlayer,
      bookmark: 'true',
    };
    // console.log(playerInfo);
    const prevBookmark = localStorage.getItem('bookmark');
    console.log(prevBookmark);
    const oldBookmark = JSON.parse(prevBookmark);
    console.log(oldBookmark);
    if (oldBookmark) {
      const isExist = oldBookmark.find((p) => p.idPlayer === idPlayer);
      //   console.log(isExist);
      if (isExist) {
        alert('Already Added to Bookmark');
        return;
      } else {
        localStorage.setItem(
          'bookmark',
          JSON.stringify([...oldBookmark, playerInfo])
        );
      }
      //   localStorage.setItem(
      //     'bookmark',
      //     JSON.stringify([...oldBookmark, playerInfo])
      //   console.log('ase');
    } else {
      localStorage.setItem('bookmark', JSON.stringify([playerInfo]));
      //   console.log('nai');
    }
  };

  return (
    <div className="card" data-aos="zoom-in">
      <img className="palyer-img" src={strCutout} alt="" />
      <h6>{strPlayer}</h6>
      <p>
        {strDescriptionEN
          ? strDescriptionEN.slice(0, 70) + '...'
          : strDescriptionEN}
      </p>
      <button className="card-btn">Details</button>
      <button onClick={handleAddToCart} className="card-btn">
        Add To Cart
      </button>
      <button onClick={handleBookmark} className="card-btn">
        Bookmark
      </button>
    </div>
  );
};

export default SinglePlayer;
