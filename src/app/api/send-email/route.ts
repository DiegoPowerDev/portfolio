import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, correo, comentario } = body;

    // Validación básica
    if (!nombre || !correo || !comentario) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Configurar el transportador de nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USER,
        pass: process.env.NEXT_PUBLIC_MAIL_PASS,
      },
    });

    // Configurar el contenido del correo
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_MAIL_USER,
      to: process.env.NEXT_PUBLIC_MAIL_USER,
      subject: `Nuevo mensaje de ${nombre} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10B981; border-bottom: 2px solid #10B981; padding-bottom: 10px;">
            Nuevo mensaje desde tu Portfolio
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Nombre:</strong> 
              <span style="color: #666;">${nombre}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Correo:</strong> 
              <span style="color: #666;">${correo}</span>
            </p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;">
              <strong style="color: #333;">Mensaje:</strong>
            </p>
            <p style="color: #666; line-height: 1.6; margin: 0;">
              ${comentario}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px;">
            <p>Este mensaje fue enviado desde tu portfolio web.</p>
            <p>Puedes responder directamente a: ${correo}</p>
          </div>
        </div>
      `,
      replyTo: correo, // Permite responder directamente al remitente
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Correo enviado exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
