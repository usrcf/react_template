// src/components/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import infoIcon from '../assets/icons/infoIcon.svg';
import dashboardBalanceIcon from '../assets/icons/dashboardBalanceIcon.svg';
import pnlIcon from '../assets/icons/pnlIcon.svg';
import capitalIcon from '../assets/icons/capitalIcon.svg';
import yieldIcon from '../assets/icons/yieldIcon.svg';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('positions');
  const [activeSubTab, setActiveSubTab] = useState('all');

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>My Dashboard</h2>
        <span>0x32CU...t6egt <img src="../assets/icons/editIcon.svg" alt="Edit" /></span>
      </div>
      <div className="dashboard-info">
        <div className="info-item">
          <img src={dashboardBalanceIcon} alt="Balance" />
          My Current Balance
          <img src={infoIcon} alt="Info" className="info-icon" />
          <span className="info-value">$0.00</span>
        </div>
        <div className="info-item">
          <img src={pnlIcon} alt="P&L" />
          My Net P&L
          <span className="info-value">$0.00</span>
        </div>
        <div className="info-item">
          <img src={capitalIcon} alt="Capital" />
          My Total Capital
          <img src={infoIcon} alt="Info" className="info-icon" />
          <span className="info-value">$0.00</span>
        </div>
        <div className="info-item">
          <img src={yieldIcon} alt="Yield" />
          My Claimable Yield
          <span className="info-value">$0.00</span>
        </div>
      </div>
      <button className="common-button">Claim Yield & Rewards</button>
      <div className="dashboard-tabs">
        <button
          className={activeTab === 'positions' ? 'active' : ''}
          onClick={() => setActiveTab('positions')}
        >
          My Positions
        </button>
        <button
          className={activeTab === 'orders' ? 'active' : ''}
          onClick={() => setActiveTab('orders')}
        >
          My Orders
        </button>
      </div>
      {activeTab === 'positions' && (
        <div className="sub-tabs">
          <button
            className={activeSubTab === 'all' ? 'active' : ''}
            onClick={() => setActiveSubTab('all')}
          >
            All Assets
          </button>
          <button
            className={activeSubTab === 'pt' ? 'active' : ''}
            onClick={() => setActiveSubTab('pt')}
          >
            PT
          </button>
          <button
            className={activeSubTab === 'yt' ? 'active' : ''}
            onClick={() => setActiveSubTab('yt')}
          >
            YT
          </button>
          <button
            className={activeSubTab === 'lp' ? 'active' : ''}
            onClick={() => setActiveSubTab('lp')}
          >
            LP
          </button>
        </div>
      )}
      {activeTab === 'positions' && activeSubTab === 'all' && (
        <div className="positions-content">
          {/* Content for All Assets */}
          <div className="position-item">
            <span>Balance</span>
            <span>APY</span>
          </div>
        </div>
      )}
      {activeTab === 'orders' && (
        <div className="orders-content">
          {/* Content for Orders */}
          <div className="order-item">
            {/* Order details */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
