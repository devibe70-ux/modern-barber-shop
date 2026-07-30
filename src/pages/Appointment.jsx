import React, { useState } from 'react';
import { SERVICES, TEAM_MEMBERS, SHOP_INFO } from '../data/mockData';
import { Calendar, Clock, Scissors, User, CheckCircle2, ChevronRight, ArrowLeft, Phone, CreditCard, ShieldCheck } from 'lucide-react';

export default function Appointment({ setActiveTab, setSelectedBookingData }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState('');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(null);

  // Time slots for booking
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:30 PM', '02:30 PM', '03:30 PM', '04:30 PM',
    '05:30 PM', '06:30 PM', '07:15 PM'
  ];

  const allServices = SERVICES.flatMap(cat => cat.items);

  const handleSelectService = (service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleSelectBarber = (barber) => {
    setSelectedBarber(barber);
    setStep(3);
  };

  const handleSelectSlot = (time) => {
    setSelectedTime(time);
    setStep(4);
  };

  const handleDetailsChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const handleCompleteBooking = async (e) => {
    e.preventDefault();

    const bookingPayload = {
      id: `APT-${Math.floor(100000 + Math.random() * 900000)}`,
      service: selectedService,
      barber: selectedBarber || { name: 'First Available Barber' },
      date: selectedDate,
      time: selectedTime,
      customer: customerDetails,
      totalAmount: selectedService ? selectedService.price : '$45',
      status: 'Confirmed'
    };

    try {
      // Send to backend endpoint
      await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingPayload)
      });
    } catch (err) {
      console.log('Backend appointment logger fallback:', err);
    }

    setBookingConfirmed(bookingPayload);
    if (setSelectedBookingData) {
      setSelectedBookingData(bookingPayload);
    }
  };

  if (bookingConfirmed) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-[#181818] border border-[#D4AF37]/50 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs text-[#D4AF37] font-extrabold uppercase tracking-widest block mb-1">
              Booking Confirmation #{bookingConfirmed.id}
            </span>
            <h1 className="text-3xl font-serif-heading font-bold text-white">
              APPOINTMENT RESERVED!
            </h1>
            <p className="text-gray-400 text-xs mt-2">
              A confirmation text & email receipt have been dispatched to your details.
            </p>
          </div>

          {/* Ticket Summary Box */}
          <div className="bg-[#121212] border border-[#2B2B2B] rounded-xl p-6 text-left space-y-4 text-xs">
            <div className="flex justify-between items-center pb-3 border-b border-[#222]">
              <span className="text-gray-400">Selected Service</span>
              <span className="text-white font-bold">{bookingConfirmed.service?.name} ({bookingConfirmed.totalAmount})</span>
            </div>

            <div className="flex justify-between items-center pb-3 border-b border-[#222]">
              <span className="text-gray-400">Assigned Craftsman</span>
              <span className="text-[#D4AF37] font-bold">{bookingConfirmed.barber?.name}</span>
            </div>

            <div className="flex justify-between items-center pb-3 border-b border-[#222]">
              <span className="text-gray-400">Date & Time</span>
              <span className="text-white font-bold">{bookingConfirmed.date} at {bookingConfirmed.time}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-400">Client Name</span>
              <span className="text-gray-200">{bookingConfirmed.customer.name} ({bookingConfirmed.customer.phone})</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                if (setActiveTab) setActiveTab('payment');
              }}
              className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#F59E0B] text-black font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg shadow flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              <span>Pre-Pay or View Invoice</span>
            </button>

            <button
              onClick={() => {
                if (setActiveTab) setActiveTab('home');
              }}
              className="w-full sm:w-auto bg-[#222] hover:bg-[#2C2C2C] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg border border-[#333]"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-extrabold px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full inline-flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          <span>Online Lounge Reservation</span>
        </span>
        <h1 className="text-4xl font-serif-heading font-extrabold text-white">
          BOOK AN APPOINTMENT
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm">
          Select your desired service, master barber, and convenient time slot below.
        </p>
      </div>

      {/* Stepper Progress Bar */}
      <div className="grid grid-cols-4 gap-2 border-b border-[#262626] pb-4">
        {[
          { num: 1, title: 'Service' },
          { num: 2, title: 'Barber' },
          { num: 3, title: 'Date & Time' },
          { num: 4, title: 'Confirmation' },
        ].map((s) => (
          <div
            key={s.num}
            onClick={() => {
              if (s.num < step) setStep(s.num);
            }}
            className={`flex items-center gap-2 text-xs font-semibold py-2 px-3 rounded-lg cursor-pointer transition-colors ${
              step === s.num
                ? 'bg-[#D4AF37] text-black'
                : step > s.num
                ? 'bg-[#222] text-[#D4AF37] border border-[#D4AF37]/30'
                : 'bg-[#181818] text-gray-500'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center font-bold text-[10px]">
              {s.num}
            </span>
            <span className="hidden sm:inline">{s.title}</span>
          </div>
        ))}
      </div>

      {/* STEP 1: Select Service */}
      {step === 1 && (
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-xl font-serif-heading font-bold text-white flex items-center gap-2">
            <Scissors className="w-5 h-5 text-[#D4AF37]" />
            Step 1: Choose Your Grooming Service
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allServices.map((service) => (
              <div
                key={service.id}
                onClick={() => handleSelectService(service)}
                className="bg-[#181818] border border-[#2B2B2B] hover:border-[#D4AF37] p-5 rounded-xl cursor-pointer transition-all flex justify-between items-center group"
              >
                <div>
                  <h3 className="text-white font-bold text-base group-hover:text-[#D4AF37] transition-colors">
                    {service.name}
                  </h3>
                  <span className="text-xs text-amber-500 font-medium">{service.duration}</span>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <span className="text-xl font-extrabold text-[#D4AF37] block mb-1">{service.price}</span>
                  <span className="text-[10px] bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded font-bold uppercase">
                    Select
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STEP 2: Select Barber */}
      {step === 2 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setStep(1)}
              className="text-xs text-gray-400 hover:text-white flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Services
            </button>
            <span className="text-xs text-[#D4AF37] font-semibold">
              Selected Service: {selectedService?.name}
            </span>
          </div>

          <h2 className="text-xl font-serif-heading font-bold text-white flex items-center gap-2">
            <User className="w-5 h-5 text-[#D4AF37]" />
            Step 2: Choose Your Craftsman
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Any Available Barber Option */}
            <div
              onClick={() => handleSelectBarber({ name: 'First Available Barber', role: 'Next Open Chair' })}
              className="bg-[#181818] border border-[#2B2B2B] hover:border-[#D4AF37] p-5 rounded-xl cursor-pointer transition-all text-center group flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mx-auto mb-3">
                  <User className="w-8 h-8" />
                </div>
                <h3 className="text-white font-bold text-sm group-hover:text-[#D4AF37]">
                  First Available Barber
                </h3>
                <span className="text-[11px] text-gray-400 block mt-1">Fastest Seating</span>
              </div>
              <span className="mt-4 bg-[#D4AF37] text-black text-[10px] uppercase font-extrabold py-1 rounded">
                Select
              </span>
            </div>

            {TEAM_MEMBERS.map((barber) => (
              <div
                key={barber.id}
                onClick={() => handleSelectBarber(barber)}
                className="bg-[#181818] border border-[#2B2B2B] hover:border-[#D4AF37] p-4 rounded-xl cursor-pointer transition-all group flex flex-col justify-between"
              >
                <div>
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-white font-bold text-sm group-hover:text-[#D4AF37]">
                    {barber.name}
                  </h3>
                  <span className="text-[10px] text-[#D4AF37] font-semibold block mb-1">{barber.role}</span>
                </div>
                <span className="mt-3 bg-[#222] group-hover:bg-[#D4AF37] group-hover:text-black text-gray-300 text-[10px] uppercase font-extrabold py-1.5 rounded text-center transition-colors">
                  Select Barber
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STEP 3: Select Date & Time Slot */}
      {step === 3 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setStep(2)}
              className="text-xs text-gray-400 hover:text-white flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Barber Selection
            </button>
            <span className="text-xs text-[#D4AF37] font-semibold">
              Barber: {selectedBarber?.name}
            </span>
          </div>

          <h2 className="text-xl font-serif-heading font-bold text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#D4AF37]" />
            Step 3: Select Date & Available Time Slot
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4 bg-[#181818] border border-[#2B2B2B] p-5 rounded-xl space-y-3">
              <label className="block text-xs font-semibold text-gray-300">
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-[#121212] border border-[#333] focus:border-[#D4AF37] rounded-lg px-3 py-2.5 text-xs text-white outline-none"
              />
            </div>

            <div className="md:col-span-8 bg-[#181818] border border-[#2B2B2B] p-5 rounded-xl space-y-4">
              <span className="text-xs font-semibold text-gray-300 block">
                Available Time Slots for {selectedDate}
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => handleSelectSlot(slot)}
                    className="py-2.5 px-2 bg-[#121212] hover:bg-[#D4AF37] hover:text-black border border-[#2E2E2E] rounded-lg text-xs font-bold text-gray-200 transition-all"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: Customer Details & Confirmation Form */}
      {step === 4 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setStep(3)}
              className="text-xs text-gray-400 hover:text-white flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Time Selection
            </button>
          </div>

          <h2 className="text-xl font-serif-heading font-bold text-white flex items-center gap-2">
            <User className="w-5 h-5 text-[#D4AF37]" />
            Step 4: Customer Details & Reservation
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-[#181818] border border-[#2B2B2B] p-6 rounded-2xl space-y-4">
              <form onSubmit={handleCompleteBooking} className="space-y-4 text-xs">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={customerDetails.name}
                    onChange={handleDetailsChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-gray-200 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">
                      Phone Number <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={customerDetails.phone}
                      onChange={handleDetailsChange}
                      placeholder="(555) 000-0000"
                      className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-gray-200 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">
                      Email Address <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={customerDetails.email}
                      onChange={handleDetailsChange}
                      placeholder="alex@example.com"
                      className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-gray-200 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    Special Cut Requests / Notes
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    value={customerDetails.notes}
                    onChange={handleDetailsChange}
                    placeholder="e.g. Prefer low skin drop fade with textured crop on top..."
                    className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-gray-200 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-[#F59E0B] text-black font-extrabold text-xs uppercase tracking-wider py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 fill-black" />
                  <span>Confirm Appointment Reservation</span>
                </button>
              </form>
            </div>

            {/* Booking Ticket Summary */}
            <div className="lg:col-span-5 bg-[#141414] border border-[#D4AF37]/30 p-6 rounded-2xl space-y-4">
              <h3 className="text-white font-serif-heading text-lg font-bold border-b border-[#262626] pb-2">
                RESERVATION SUMMARY
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-[#222]">
                  <span className="text-gray-400">Service</span>
                  <span className="text-white font-bold">{selectedService?.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222]">
                  <span className="text-gray-400">Duration</span>
                  <span className="text-amber-500 font-medium">{selectedService?.duration}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222]">
                  <span className="text-gray-400">Barber</span>
                  <span className="text-[#D4AF37] font-semibold">{selectedBarber?.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222]">
                  <span className="text-gray-400">Date</span>
                  <span className="text-gray-200">{selectedDate}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222]">
                  <span className="text-gray-400">Time Slot</span>
                  <span className="text-gray-200 font-bold">{selectedTime}</span>
                </div>

                <div className="flex justify-between items-center pt-3 text-sm font-bold">
                  <span className="text-gray-300">Total Price</span>
                  <span className="text-2xl text-[#D4AF37]">{selectedService?.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
