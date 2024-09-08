// src/components/PaymentForm.tsx
import React, { useState } from 'react';
import Web3 from 'web3';
import axios from 'axios';
// Assuming Privado SDK is installed and available
//import { Privado } from '@privado/privado';

const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [mpesaNumber, setMpesaNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('blockchain'); // Add payment method state
  const [loading, setLoading] = useState(false);

  // Initialize Privado for identity management
  //const privado = new Privado({
    //clientId: 'YOUR_PRIVADO_CLIENT_ID', // Replace with actual client ID
    //apiKey: 'YOUR_PRIVADO_API_KEY', // Replace with actual API key
 // });

  //const getUserIdentity = async () => {
    //try {
      //const identity = await privado.getUserIdentity();
      //console.log('User identity from Privado:', identity);
      //return identity;
    //} catch (error) {
    //  console.error('Error fetching identity:', error);
   // }
  //};

  // Initialize Web3 (assumes MetaMask or another Web3 provider is available)
  const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

  // Handle Blockchain Payment
  const handleBlockchainPayment = async () => {
    setLoading(true);
    try {
      const accounts = await web3.eth.requestAccounts();
      const fromAddress = accounts[0];
      const txHash = await web3.eth.sendTransaction({
        from: fromAddress,
        to: walletAddress,
        value: web3.utils.toWei(amount, 'ether'),
      });
      console.log('Transaction Successful: ', txHash);
    } catch (error) {
      console.error('Blockchain payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle MPesa Payment
  const handleMpesaPayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
        // MPesa API request body here (use actual token and credentials)
        BusinessShortCode: '174379', // example code, replace with real one
        Password: 'YOUR_PASSWORD',  // generated password
        Timestamp: '20240907123456', // replace with real timestamp
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: mpesaNumber,
        PartyB: '174379', // MPesa paybill number
        PhoneNumber: mpesaNumber,
        CallBackURL: 'https://example.com/callback',
        AccountReference: 'PaymentReference',
        TransactionDesc: 'Payment Description',
      });
      console.log('MPesa Payment Response:', response.data);
    } catch (error) {
      console.error('MPesa payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Fetch user identity through Privado
   // getUserIdentity();

    // Call the appropriate payment handler based on selected method
    if (paymentMethod === 'blockchain') {
      handleBlockchainPayment();
    } else if (paymentMethod === 'mpesa') {
      handleMpesaPayment();
    }
  };

  return (
    <div className="payment-form">
      <h2>Cross-Chain Payment Gateway</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount (ETH):</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        {paymentMethod === 'blockchain' && (
          <div>
            <label>Wallet Address:</label>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              required
            />
          </div>
        )}
        {paymentMethod === 'mpesa' && (
          <div>
            <label>Mpesa Number:</label>
            <input
              type="tel"
              value={mpesaNumber}
              onChange={(e) => setMpesaNumber(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label>Select Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="blockchain">Blockchain</option>
            <option value="mpesa">MPesa</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Submit Payment'}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
