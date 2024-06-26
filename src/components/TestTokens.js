import React from 'react';
import './TestTokens.css';
import './CommonButton.css';

const TestTokens = ({ isWalletConnected, walletAddress, amount, handleInputChange, handleSubmit }) => {
  return (
    <div className="test-tokens">
      <h2>Get Test Tokens</h2>
      <p>Complete details before submitting.</p>
      <label>
        Wallet Address
        <input
          type="text"
          value={isWalletConnected ? walletAddress : 'Connect your wallet'}
          disabled={!isWalletConnected}
          onChange={handleInputChange}
          name="walletAddress"
        />
      </label>
      <label>
        Amount
        <input
          type="number"
          value={amount}
          onChange={handleInputChange}
          name="amount"
        />
      </label>
      <button className="common-button" onClick={handleSubmit}>Send me SY tsTON</button>
    </div>
  );
};

export default TestTokens;
