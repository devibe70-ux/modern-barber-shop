import React, { useState } from 'react';
import { CreditCard, ShieldCheck, CheckCircle, Download, Printer, Lock, Scissors, Sparkles, Building2 } from 'lucide-react';
import { SHOP_INFO } from '../data/mockData';

export default function Payment({ selectedBookingData }) {
  const [paymentType, setPaymentType] = useState('shop'); // 'shop' or 'card'
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '4242 •••• •••• 4242',
    expDate: '12/28',
    cvc: '***',
    name: 'Alex Morgan'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const defaultItem = selectedBookingData || {
    id: 'INV-849201',
    service: { name: 'The Executive Cut', price: '$45' },
    barber: { name: 'Marcus Vance' },
    date: new Date().toISOString().split('T')[0],
    time: '02:30 PM',
    customer: { name: 'Alex Morgan', phone: '(555) 839-2041', email: 'alex@example.com' },
    totalAmount: '$45'
  };

  const handleProcessPayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-extrabold px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full inline-flex items-center gap-1.5">
          <CreditCard className="w-3.5 h-3.5" />
          <span>Checkout & Invoice Portal</span>
        </span>
        <h1 className="text-4xl font-serif-heading font-extrabold text-white">
          PAYMENT & INVOICE
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm">
          Pay in-store at the grooming lounge or pre-pay securely online for express checkout.
        </p>
      </div>

      {paymentSuccess ? (
        <div className="bg-[#181818] border border-emerald-500/50 rounded-2xl p-8 text-center space-y-6 shadow-2xl animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
            <CheckCircle className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs text-emerald-400 font-extrabold uppercase tracking-widest block mb-1">
              Payment Completed Successfully
            </span>
            <h2 className="text-3xl font-serif-heading font-bold text-white">
              DIGITAL RECEIPT GENERATED
            </h2>
            <p className="text-gray-400 text-xs mt-1">
              Transaction ID: TXN-{Math.floor(10000000 + Math.random() * 90000000)}
            </p>
          </div>

          {/* Digital Receipt Card */}
          <div className="bg-[#121212] border border-[#2B2B2B] rounded-xl p-6 text-left max-w-lg mx-auto space-y-3 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-[#222]">
              <span className="text-gray-400">Barber Lounge</span>
              <span className="text-white font-bold">{SHOP_INFO.name}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-[#222]">
              <span className="text-gray-400">Invoice Item</span>
              <span className="text-white font-semibold">{defaultItem.service?.name}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-[#222]">
              <span className="text-gray-400">Craftsman</span>
              <span className="text-[#D4AF37] font-semibold">{defaultItem.barber?.name}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-[#222]">
              <span className="text-gray-400">Date & Time</span>
              <span className="text-gray-300">{defaultItem.date} @ {defaultItem.time}</span>
            </div>
            <div className="flex justify-between items-center pt-2 text-base font-bold">
              <span className="text-gray-200">Amount Paid</span>
              <span className="text-[#D4AF37] text-xl">{defaultItem.totalAmount}</span>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => window.print()}
              className="bg-[#222] hover:bg-[#2C2C2C] text-white text-xs font-bold px-6 py-3 rounded-lg border border-[#3A3A3A] flex items-center gap-2"
            >
              <Printer className="w-4 h-4 text-[#D4AF37]" />
              Print Receipt
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Payment Method Selection */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#181818] border border-[#2B2B2B] rounded-2xl p-6 space-y-5">
              <h2 className="text-lg font-serif-heading font-bold text-white border-b border-[#262626] pb-3">
                Select Payment Method
              </h2>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentType('shop')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    paymentType === 'shop'
                      ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white'
                      : 'bg-[#121212] border-[#2A2A2A] text-gray-400 hover:border-[#444]'
                  }`}
                >
                  <Building2 className={`w-6 h-6 mb-2 ${paymentType === 'shop' ? 'text-[#D4AF37]' : 'text-gray-500'}`} />
                  <strong className="block text-xs font-bold">Pay at Shop Lounge</strong>
                  <span className="text-[10px] text-gray-400 block mt-0.5">Pay via Cash / Card upon arrival</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentType('card')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    paymentType === 'card'
                      ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white'
                      : 'bg-[#121212] border-[#2A2A2A] text-gray-400 hover:border-[#444]'
                  }`}
                >
                  <CreditCard className={`w-6 h-6 mb-2 ${paymentType === 'card' ? 'text-[#D4AF37]' : 'text-gray-500'}`} />
                  <strong className="block text-xs font-bold">Pre-Pay Online</strong>
                  <span className="text-[10px] text-gray-400 block mt-0.5">Instant Card & Apple Pay</span>
                </button>
              </div>

              {paymentType === 'shop' ? (
                <div className="p-4 rounded-xl bg-[#121212] border border-[#262626] space-y-2 text-xs text-gray-300">
                  <span className="text-[#D4AF37] font-bold block flex items-center gap-1">
                    <Sparkles className="w-4 h-4" /> No Advance Payment Required
                  </span>
                  <p className="text-gray-400 leading-relaxed text-[11px]">
                    Your appointment is fully reserved. Simply pay at the front desk when your haircut service is completed.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleProcessPayment} className="space-y-3 text-xs pt-2">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      required
                      value={cardDetails.name}
                      onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                      className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-lg px-4 py-2.5 text-gray-200 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      required
                      value={cardDetails.cardNumber}
                      onChange={(e) => setCardDetails({...cardDetails, cardNumber: e.target.value})}
                      className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-lg px-4 py-2.5 text-gray-200 outline-none font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        required
                        value={cardDetails.expDate}
                        onChange={(e) => setCardDetails({...cardDetails, expDate: e.target.value})}
                        className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-lg px-4 py-2.5 text-gray-200 outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-semibold mb-1">
                        CVC Code
                      </label>
                      <input
                        type="password"
                        required
                        value={cardDetails.cvc}
                        onChange={(e) => setCardDetails({...cardDetails, cvc: e.target.value})}
                        className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-lg px-4 py-2.5 text-gray-200 outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-[#D4AF37] hover:bg-[#F59E0B] text-black font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>{isProcessing ? 'Processing Payment...' : `Pre-Pay ${defaultItem.totalAmount} Now`}</span>
                    </button>
                  </div>
                </form>
              )}

              {paymentType === 'shop' && (
                <button
                  type="button"
                  onClick={handleProcessPayment}
                  className="w-full bg-[#D4AF37] hover:bg-[#F59E0B] text-black font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <CheckCircle className="w-4 h-4 fill-black" />
                  <span>Confirm Pay at Shop Option</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Invoice Breakdown */}
          <div className="lg:col-span-5">
            <div className="bg-[#181818] border border-[#D4AF37]/30 rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="flex justify-between items-center border-b border-[#262626] pb-3">
                <h3 className="text-white font-serif-heading font-bold text-base">
                  INVOICE SUMMARY
                </h3>
                <span className="text-[10px] bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-0.5 rounded font-mono font-bold">
                  {defaultItem.id}
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-[#222]">
                  <span className="text-gray-400">Service</span>
                  <span className="text-white font-bold">{defaultItem.service?.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222]">
                  <span className="text-gray-400">Craftsman</span>
                  <span className="text-[#D4AF37] font-semibold">{defaultItem.barber?.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222]">
                  <span className="text-gray-400">Scheduled Time</span>
                  <span className="text-gray-300">{defaultItem.date} @ {defaultItem.time}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222]">
                  <span className="text-gray-400">Client Name</span>
                  <span className="text-gray-300">{defaultItem.customer?.name}</span>
                </div>

                <div className="flex justify-between items-center pt-3 text-base font-extrabold">
                  <span className="text-gray-200">Grand Total Due</span>
                  <span className="text-2xl text-[#D4AF37]">{defaultItem.totalAmount}</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-gray-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>256-Bit Encrypted Secure Checkout</span>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
