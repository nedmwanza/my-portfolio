import { NextResponse } from "next/server";

export async function Payment(req){
     
    try{
        const {phone, amount} = await req.json();

        const formData = new FormData();
        formData.append("phone", phone);
        formData.append("amount", amount);
        formData.append("airtel", 1);
        formData.append("registration", process.env.REG_NUMBER);
        formData.append("token", process.env.CTECH_API_TOKEN)

        const response = await fetch(
            "https://api-sandbox.ctechpay.com/student/mobile/?endpoint=mobile",
            {
               method: POST,
               body: formData, 
            }
        )

        const data = await JSON.parse(response);

        return NextResponse.json(data);
    }catch(error){
        convertSegmentPathToStaticExportFilename.error("Failled", error);
        return NextResponse.json(
            {error: "Failled"},
            {error: 500},
        )
    }
}