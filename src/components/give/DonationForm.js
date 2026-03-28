"use client";

import { useState } from "react";

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const givingOptions = [
  {
    id: "general",
    label: "General Fund",
    description: "Support our overall ministry",
  },
  {
    id: "missions",
    label: "Global Missions",
    description: "Reach the world with the Gospel",
  },
  {
    id: "food-pantry",
    label: "Food Pantry",
    description: "Feed families in need",
  },
  {
    id: "building",
    label: "Building Fund",
    description: "Expand our facilities",
  },
  {
    id: "youth",
    label: "Youth Ministry",
    description: "Invest in the next generation",
  },
];

export default function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [givingOption, setGivingOption] = useState("general");
  const [frequency, setFrequency] = useState("one-time");

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = customAmount || selectedAmount;

    // Here you would integrate with PayPal
    // For now, we'll show an alert
    alert(
      `Processing ${frequency} donation of $${amount} to ${givingOptions.find((opt) => opt.id === givingOption)?.label}`,
    );

    // PayPal integration would go here
    // Example: redirect to PayPal with the donation details
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-lg shadow-xl p-6 md:p-8 lg:p-10">
          <form onSubmit={handleSubmit}>
            {/* Frequency Selection */}
            <div className="mb-8">
              {/* <label className="block text-gray-900 font-semibold mb-4 text-lg">
                Giving Frequency
              </label> */}
              {/* <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFrequency("one-time")}
                  className={`py-3 px-6 rounded-sm font-semibold transition-all ${
                    frequency === "one-time"
                      ? "bg-brand-primary text-white"
                      : "bg-white text-gray-700 border-2 border-gray-300 hover:border-brand-primary"
                  }`}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency("monthly")}
                  className={`py-3 px-6 rounded-sm font-semibold transition-all ${
                    frequency === "monthly"
                      ? "bg-brand-primary text-white"
                      : "bg-white text-gray-700 border-2 border-gray-300 hover:border-brand-primary"
                  }`}
                >
                  Monthly Giving
                </button>
              </div> */}
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-gray-900 font-semibold mb-4 text-lg">
                Select Amount
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountClick(amount)}
                    className={`py-3 px-4 rounded-sm font-semibold transition-all ${
                      selectedAmount === amount && !customAmount
                        ? "bg-brand-primary text-white"
                        : "bg-white text-gray-700 border-2 border-gray-300 hover:border-brand-primary"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 font-semibold text-lg">
                  $
                </span>
                <input
                  type="number"
                  placeholder="Custom Amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary text-lg"
                  min="1"
                />
              </div>
            </div>

            {/* Giving Option */}
            <div className="mb-8">
              <label className="block text-gray-900 font-semibold mb-4 text-lg">
                Where would you like to give?
              </label>
              <div className="space-y-3">
                {givingOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-start p-4 rounded-sm border-2 cursor-pointer transition-all ${
                      givingOption === option.id
                        ? "border-brand-primary bg-brand-primary/5"
                        : "border-gray-300 hover:border-brand-primary"
                    }`}
                  >
                    <input
                      type="radio"
                      name="givingOption"
                      value={option.id}
                      checked={givingOption === option.id}
                      onChange={(e) => setGivingOption(e.target.value)}
                      className="mt-1 w-5 h-5 text-brand-primary focus:ring-brand-primary"
                    />
                    <div className="ml-3">
                      <div className="font-semibold text-gray-900">
                        {option.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {option.description}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white px-12 py-4 rounded-sm font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Continue to PayPal
              </button>
              <p className="text-sm text-gray-600 mt-4">
                You will be redirected to PayPal to complete your secure
                donation
              </p>
            </div>

            {/* PayPal Logo */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-3">Secured by</p>
              <div className="flex justify-center items-center gap-2">
                <svg className="w-24 h-8" viewBox="0 0 124 33" fill="none">
                  <path
                    d="M46.211 6.749h-6.839a.95.95 0 0 0-.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zm.789 6.405c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.468 1.044.332 1.906zM66.654 13.075h-3.275a.57.57 0 0 0-.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.803l1.77-11.209a.568.568 0 0 0-.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zM84.096 13.075h-3.291a.954.954 0 0 0-.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0-.912-.678h-3.234a.57.57 0 0 0-.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0-.468-.895z"
                    fill="#253B80"
                  />
                  <path
                    d="M94.992 6.749h-6.84a.95.95 0 0 0-.938.802l-2.766 17.537a.569.569 0 0 0 .562.658h3.51a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zM115.434 13.075h-3.273a.567.567 0 0 0-.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.803l1.771-11.209a.571.571 0 0 0-.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zM119.295 7.23l-2.807 17.858a.569.569 0 0 0 .562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 0 0-.562-.659h-3.16a.571.571 0 0 0-.562.482z"
                    fill="#179BD7"
                  />
                  <path
                    d="M7.266 29.154l.523-3.322-1.165-.027H1.061L4.927 1.292a.316.316 0 0 1 .314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 0 1 1.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 0 1-1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 0 0-.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 0 1-.096.035H7.266z"
                    fill="#253B80"
                  />
                  <path
                    d="M23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545H9.326c-.661 0-1.218.48-1.321 1.132L6.596 26.83l-.399 2.533a.704.704 0 0 0 .695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.667 4.667 0 0 0-1.336-1.03z"
                    fill="#179BD7"
                  />
                  <path
                    d="M21.754 7.151a9.757 9.757 0 0 0-1.203-.267 15.284 15.284 0 0 0-2.426-.177h-7.352a1.172 1.172 0 0 0-1.159.992L8.05 17.605l-.045.289a1.336 1.336 0 0 1 1.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 0 0-1.017-.429 9.045 9.045 0 0 0-.277-.087z"
                    fill="#222D65"
                  />
                  <path
                    d="M9.614 7.699a1.169 1.169 0 0 1 1.159-.991h7.352c.871 0 1.684.057 2.426.177a9.757 9.757 0 0 1 1.481.353c.365.121.704.264 1.017.429.368-2.347-.003-3.945-1.272-5.392C20.378.682 17.853 0 14.622 0h-9.38c-.66 0-1.223.48-1.325 1.133L.01 25.898a.806.806 0 0 0 .795.932h5.791l1.454-9.225 1.564-9.906z"
                    fill="#253B80"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-brand-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Secure Donation
            </h3>
            <p className="text-sm text-gray-600">
              Your information is protected with industry-standard encryption
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-brand-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Tax Deductible</h3>
            <p className="text-sm text-gray-600">
              All donations are tax-deductible to the fullest extent allowed by
              law
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-brand-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              100% Goes to Ministry
            </h3>
            <p className="text-sm text-gray-600">
              Every dollar you give directly supports our mission and ministry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
