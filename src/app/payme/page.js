'use client';
import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-4">
        Smart Digital Solutions
      </h1>

      <p className="text-gray-600 max-w-xl mb-8">
        Secure, fast, and reliable payment solutions for modern applications.
      </p>

      <button
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
        onClick={() => alert("Proceed to payment")}
      >
        Pay Now
      </button>
    </section>
  );
}
