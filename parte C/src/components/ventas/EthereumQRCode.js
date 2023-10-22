// src/components/EthereumQRCode.js
import React from 'react';
import QRCode from 'react-qr-code';

const EthereumQRCode = ({ address, amount }) => {
  return (
    <div>
      <QRCode value={`ethereum:${address}?value=${amount}`} />
    </div>
  );
};

export default EthereumQRCode;
