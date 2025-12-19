import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { amount, phone } = await req.json();

    const formData = new FormData();
    formData.append("airtel", "1");
    formData.append("token", process.env.CTECH_API_TOKEN);
    formData.append("registration", process.env.REG_NUMBER); // your reg number
    formData.append("amount", amount);
    formData.append("phone", phone);

    const response = await fetch(
      "https://api-sandbox.ctechpay.com/student/mobile/?endpoint=mobile",
      {
        method: "POST",
        body: formData,
      }
    );

    const text = await response.text();

    // 👇 log raw response to debug
    console.log("CTECH RAW RESPONSE:", text);

    // Convert to JSON manually
    const data = JSON.parse(text);

    return NextResponse.json(data);
  } catch (error) {
    console.error("CTECH ERROR:", error);
    return NextResponse.json(
      { error: "Payment failed" },
      { status: 500 }
    );
  }
}
