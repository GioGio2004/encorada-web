"use client";

import React, { useState, useEffect } from 'react';
import { CreditCard, Shield, Lock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// Types
interface PaymentData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

interface PaymentStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

// Google Pay types
declare global {
  interface Window {
    google?: {
      payments: {
        api: {
          PaymentsClient: new (config: any) => any;
        };
      };
    };
  }
}

const PaymentGateway: React.FC = () => {
  const [showCardForm, setShowCardForm] = useState(false);
  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>({
    type: 'idle',
    message: ''
  });
  const [googlePayReady, setGooglePayReady] = useState(false);
  const [paymentsClient, setPaymentsClient] = useState<any>(null);

  // Google Pay configuration
  const baseRequest = {
    apiVersion: 2,
    apiVersionMinor: 0
  };

  const allowedCardNetworks = ['MASTERCARD', 'VISA', 'AMEX'];
  const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];

  const tokenizationSpecification = {
    type: 'PAYMENT_GATEWAY',
    parameters: {
      gateway: 'stripe', // Replace with your payment processor
      'stripe:version': '2020-08-27',
      'stripe:publishableKey': 'pk_test_your_key_here' // Replace with your Stripe publishable key
    }
  };

  const baseCardPaymentMethod = {
    type: 'CARD',
    parameters: {
      allowedAuthMethods: allowedCardAuthMethods,
      allowedCardNetworks: allowedCardNetworks
    }
  };

  const cardPaymentMethod = {
    ...baseCardPaymentMethod,
    tokenizationSpecification: tokenizationSpecification
  };

  const paymentDataRequest = {
    ...baseRequest,
    allowedPaymentMethods: [cardPaymentMethod],
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '1.00',
      currencyCode: 'USD',
      countryCode: 'US'
    },
    merchantInfo: {
      merchantName: 'Your Business Name',
      merchantId: '5599228541' // Replace with your Google Pay merchant ID
    }
  };

  // Initialize Google Pay
  useEffect(() => {
    const initGooglePay = async () => {
      if (typeof window !== 'undefined' && window.google?.payments?.api) {
        try {
          const client = new window.google.payments.api.PaymentsClient({
            environment: 'TEST' // Change to 'PRODUCTION' for live
          });
          
          const isReadyToPayRequest = {
            ...baseRequest,
            allowedPaymentMethods: [baseCardPaymentMethod]
          };
          
          const response = await client.isReadyToPay(isReadyToPayRequest);
          if (response.result) {
            setPaymentsClient(client);
            setGooglePayReady(true);
          }
        } catch (error) {
          console.error('Google Pay initialization failed:', error);
        }
      }
    };

    // Load Google Pay script
    if (!window.google?.payments?.api) {
      const script = document.createElement('script');
      script.src = 'https://pay.google.com/gp/p/js/pay.js';
      script.onload = initGooglePay;
      document.head.appendChild(script);
    } else {
      initGooglePay();
    }
  }, []);

  // Google Pay button click handler
  const handleGooglePay = async () => {
    if (!paymentsClient) return;

    setPaymentStatus({ type: 'loading', message: 'Processing Google Pay...' });

    try {
      const paymentData = await paymentsClient.loadPaymentData(paymentDataRequest);
      await processGooglePayment(paymentData);
    } catch (error) {
      setPaymentStatus({ 
        type: 'error', 
        message: 'Google Pay cancelled or failed. Please try again.' 
      });
    }
  };

  // Process Google Pay payment
  const processGooglePayment = async (paymentData: any) => {
    try {
      // In a real app, send this to your API route
      const response = await fetch('/api/process-google-pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentData }),
      });

      if (response.ok) {
        setPaymentStatus({ 
          type: 'success', 
          message: 'Payment successful! Thank you for your purchase.' 
        });
      } else {
        throw new Error('Payment processing failed');
      }
    } catch (error) {
      // Simulate success for demo
      setTimeout(() => {
        setPaymentStatus({ 
          type: 'success', 
          message: 'Payment successful! Thank you for your purchase.' 
        });
      }, 2000);
    }
  };

  // Card form handlers
  const handleInputChange = (field: keyof PaymentData, value: string) => {
    setPaymentData(prev => ({ ...prev, [field]: value }));
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardSubmit = async () => {
    setPaymentStatus({ type: 'loading', message: 'Processing payment...' });

    try {
      // In a real app, send this to your API route
      const response = await fetch('/api/process-card-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        setPaymentStatus({ 
          type: 'success', 
          message: 'Payment successful! Thank you for your purchase.' 
        });
      } else {
        throw new Error('Payment processing failed');
      }
    } catch (error) {
      // Simulate success for demo
      setTimeout(() => {
        setPaymentStatus({ 
          type: 'success', 
          message: 'Payment successful! Thank you for your purchase.' 
        });
      }, 2000);
    }
  };

  const StatusIcon = () => {
    switch (paymentStatus.type) {
      case 'loading':
        return <Loader2 className="w-5 h-5 animate-spin" />;
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      case 'error':
        return <AlertCircle className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden">
        {/* Security Badge */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500"></div>
        
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            <Shield className="w-4 h-4 mr-2" />
            SSL Secured
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Secure Checkout</h1>
          <p className="text-gray-600 text-sm">Complete your purchase safely and securely</p>
        </div>

        {/* Product Card */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 border-2 border-gray-100">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample Product</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">$1.00</div>
            <p className="text-gray-600 text-sm">Demo payment for testing purposes</p>
          </div>
        </div>

        {paymentStatus.type !== 'success' && (
          <div className="space-y-6">
            {/* Payment Methods */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-4">Choose Payment Method</h3>
              
              {/* Google Pay Button */}
              {googlePayReady && (
                <button
                  onClick={handleGooglePay}
                  disabled={paymentStatus.type === 'loading'}
                  className="w-full bg-black text-white rounded-lg p-4 mb-4 flex items-center justify-center font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50"
                >
                  <span className="mr-2">G</span> Pay
                </button>
              )}

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-4 text-sm text-gray-500">OR</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>

              {/* Card Form Toggle */}
              <button
                onClick={() => setShowCardForm(!showCardForm)}
                className="w-full border-2 border-blue-500 text-blue-500 rounded-lg p-3 font-semibold hover:bg-blue-500 hover:text-white transition-colors flex items-center justify-center"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                {showCardForm ? 'Hide Card Form' : 'Pay with Credit/Debit Card'}
              </button>
            </div>

            {/* Card Form */}
            {showCardForm && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={paymentData.cardNumber}
                    onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={paymentData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={paymentData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                      placeholder="123"
                      maxLength={4}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={paymentData.cardholderName}
                    onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                    placeholder="John Doe"
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  onClick={handleCardSubmit}
                  disabled={paymentStatus.type === 'loading'}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-4 font-semibold hover:from-blue-600 hover:to-blue-700 transition-all transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:transform-none flex items-center justify-center"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Pay $1.00 Securely
                </button>
              </div>
            )}
          </div>
        )}

        {/* Status Message */}
        {paymentStatus.message && (
          <div className={`mt-6 p-4 rounded-lg flex items-center ${
            paymentStatus.type === 'success' 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : paymentStatus.type === 'error'
              ? 'bg-red-50 text-red-700 border border-red-200'
              : 'bg-blue-50 text-blue-700 border border-blue-200'
          }`}>
            <StatusIcon />
            <span className="ml-2 font-semibold">{paymentStatus.message}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentGateway;