"use client";

import { useState } from "react";

export default function PayMePage() {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePayment = async () => {
    if (!amount || !phone) {
      setMessage("Please enter amount and phone number.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/ctech/airtel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          phone,
        }),
      });

      const data = await res.json();

      if (data?.status?.success) {
        setMessage("Payment request sent. Check your Airtel phone.");
      } else {
        setMessage(data?.status?.message || "Payment failed.");
      }
    } catch {
      setMessage("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-6 px-4">
      <h1 className="text-3xl font-bold">Pay with Airtel Money</h1>

      {/* Amount */}
      <input
        type="number"
        placeholder="Amount (MWK)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full max-w-sm px-4 py-3 border rounded-lg focus:outline-none focus:ring"
      />

      {/* Phone */}
      <input
        type="tel"
        placeholder="Airtel Phone (e.g. 099xxxxxxx)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full max-w-sm px-4 py-3 border rounded-lg focus:outline-none focus:ring"
      />

      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white px-8 py-3 rounded-lg font-semibold w-full max-w-sm"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>

      {message && <p className="text-sm text-center">{message}</p>}
    </section>
  );
}
