import React, { useState, useEffect } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';
import './TestTokens.css';
import './CommonButton.css';

const TestTokens = () => {
  const walletAddress = useTonAddress();
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (walletAddress) {
      setAddress(walletAddress);
    } else {
      setAddress('Connect your wallet');
    }
  }, [walletAddress]);

  return (
    <div className="test-tokens">
      <h2>Get Test Tokens</h2>
      <p>Complete details before submitting.</p>
      <div className="input-group">
        <label>Wallet Address</label>
        <input type="text" value={address} readOnly />
      </div>
      <div className="input-group">
        <label>Amount</label>
        <input type="number" placeholder="0" />
      </div>
      <button className="common-button">Send me SY tsTON</button>
    </div>
  );
};

export default TestTokens;
