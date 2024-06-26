// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/icons/fivaLogo.svg';
import logoutIcon from '../assets/icons/logout.svg';

const Header = ({ isWalletConnected, address, connectWallet, disconnectWallet }) => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      {isWalletConnected ? (
        <button className="connect-wallet" onClick={disconnectWallet}>
          <img src={logoutIcon} alt="Logout" className="logout-icon" /> {address}
        </button>
      ) : (
        <button className="connect-wallet" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </header>
  );
};

export default Header;
