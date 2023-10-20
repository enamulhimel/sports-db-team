import React, { useEffect, useState } from 'react';
import './Home.css';
import Players from '../Players/Players';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  //   console.log(players);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data?.player));
  }, [search]);

  const handleDeleteCart = (id) => {
    const leftPlayer = cart.filter((pd) => pd.idPlayer !== id);
    setCart(leftPlayer);
    toast('Wow Delete From Cart!!!');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div>
      <div className="home-container">
        <div className="left-container">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="search-input"
          />
          <button className="search-btn">Search</button>
          <div className="players-container">
            <Players players={players} cart={cart} setCart={setCart}></Players>
          </div>
        </div>
        <div className="right-container">
          <div className="cart">
            <h1>This is player Cart</h1>
            {cart?.map((p) => (
              <div className="cart-info-container">
                <li>{p.strPlayer}</li>
                <button
                  onClick={() => handleDeleteCart(p.idPlayer)}
                  className="delete-btn"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
