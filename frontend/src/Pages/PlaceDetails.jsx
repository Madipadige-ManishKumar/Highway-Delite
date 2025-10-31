import React, { useState } from 'react';
import { MapPin, ChevronLeft, Minus, Plus } from 'lucide-react';

export default function PlaceDetails() {
  const [selectedDate, setSelectedDate] = useState('Oct 22');
  const [selectedTime, setSelectedTime] = useState('07:00 am');
  const [quantity, setQuantity] = useState(1);

  const dates = ['Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'];
  const times = [
    { time: '07:00 am', status: 'sale' },
    { time: '9:00 am', status: 'fast' },
    { time: '11:00 am', status: 'last' },
    { time: '1:00 pm', status: 'sold out' }
  ];

  const basePrice = 999;
  const subtotal = basePrice * quantity;
  const taxes = 59;
  const total = subtotal + taxes;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6" fill="currentColor" />
            <span className="text-xl font-semibold">highway delta</span>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded font-semibold transition">
            Search
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          <ChevronLeft className="w-5 h-5" />
          <span>Details</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
              alt="Kayaking through mangroves"
              className="w-full h-80 object-cover"
            />
            
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">Kayaking</h1>
              <p className="text-gray-600 mb-6">
                Curated small-group experience. Certified guide. Safety first with gear included. 
                Helmet and Life jackets along with an expert will accompany in kayaking.
              </p>

              {/* Date Selection */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3">Choose date</h2>
                <div className="flex gap-2 flex-wrap">
                  {dates.map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`px-4 py-2 rounded border ${
                        selectedDate === date
                          ? 'bg-yellow-400 border-yellow-400 font-semibold'
                          : 'bg-white border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3">Choose time</h2>
                <div className="flex gap-2 flex-wrap">
                  {times.map((item) => (
                    <button
                      key={item.time}
                      onClick={() => item.status !== 'sold out' && setSelectedTime(item.time)}
                      disabled={item.status === 'sold out'}
                      className={`px-4 py-2 rounded border relative ${
                        selectedTime === item.time && item.status !== 'sold out'
                          ? 'bg-red-500 text-white border-red-500'
                          : item.status === 'sold out'
                          ? 'bg-gray-200 border-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-white border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {item.time}
                      {item.status !== 'sold out' && (
                        <span className={`ml-2 text-xs ${
                          selectedTime === item.time ? 'text-white' : 
                          item.status === 'sale' ? 'text-red-500' : 
                          item.status === 'fast' ? 'text-orange-500' : 'text-red-600'
                        }`}>
                          {item.status}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">All times are in IST (GMT +5:30)</p>
              </div>

              {/* About Section */}
              <div>
                <h2 className="text-lg font-semibold mb-3">About</h2>
                <p className="text-gray-600">
                  Scenic routes, trained guides, and safety briefing. Minimum age 10.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Starts at</span>
                  <span className="text-xl font-bold">₹999</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Quantity</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-semibold w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Taxes</span>
                    <span>₹{taxes}</span>
                  </div>
                </div>

                <div className="border-t pt-4 flex justify-between items-center text-xl font-bold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

                <button onClick={()=>{
                    alert("hello")
                }} className="w-full bg-yellow-500 text-gray-500 py-3 rounded-lg font-semibold ">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
     
    </div>
  );
}