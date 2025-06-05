// types/payze.ts
// Define all TypeScript interfaces for Payze payment gateway integration

export interface PayzeConfig {
  apiKey: string;           // Payze API key from dashboard
  apiSecret: string;        // Payze API secret for authentication
  baseUrl: string;          // Payze API base URL (sandbox/production)
  merchantId: string;       // Your merchant identifier
}

export interface PaymentRequest {
  amount: number;           // Payment amount in minor units (e.g., cents)
  currency: string;         // Currency code (e.g., 'USD', 'GEL')
  description: string;      // Payment description
  orderId: string;         // Unique order identifier
  customerEmail?: string;   // Optional customer email
  customerPhone?: string;   // Optional customer phone
  successUrl: string;      // URL to redirect after successful payment
  failureUrl: string;      // URL to redirect after failed payment
  callbackUrl: string;     // Webhook URL for payment status updates
}

export interface PayzePaymentResponse {
  success: boolean;         // Whether the API call was successful
  transactionId: string;    // Unique transaction identifier from Payze
  paymentUrl: string;      // URL to redirect user for payment
  status: PaymentStatus;   // Current payment status
  message?: string;        // Optional message from Payze
}

export interface PaymentStatus {
  status: 'pending' | 'completed' | 'failed' | 'cancelled'; // Payment state
  transactionId: string;   // Transaction identifier
  amount: number;          // Payment amount
  currency: string;        // Payment currency
  orderId: string;        // Order identifier
  timestamp: string;      // ISO timestamp of status update
}

export interface WebhookPayload {
  event: string;           // Event type (payment.completed, payment.failed, etc.)
  transactionId: string;   // Transaction identifier
  orderId: string;        // Order identifier
  status: string;         // Payment status
  amount: number;         // Payment amount
  currency: string;       // Payment currency
  signature: string;      // Webhook signature for verification
  timestamp: string;      // Event timestamp
}

export interface PaymentVerificationResponse {
  isValid: boolean;       // Whether payment verification passed
  status: PaymentStatus; // Payment status details
  error?: string;        // Optional error message
}