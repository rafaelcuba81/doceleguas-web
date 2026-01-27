import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY not configured");
    }

    const notificationEmailBody = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #5c9c98; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #5c9c98; }
            .value { margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nuevo Mensaje de Contacto</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nombre completo:</div>
                <div class="value">${formData.fullName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${formData.email}</div>
              </div>
              ${formData.phone ? `
              <div class="field">
                <div class="label">Teléfono:</div>
                <div class="value">${formData.phone}</div>
              </div>
              ` : ''}
              ${formData.company ? `
              <div class="field">
                <div class="label">Empresa:</div>
                <div class="value">${formData.company}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Asunto:</div>
                <div class="value">${formData.subject}</div>
              </div>
              <div class="field">
                <div class="label">Mensaje:</div>
                <div class="value">${formData.message}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const confirmationEmailBody = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #5c9c98; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 5px 5px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>¡Gracias por contactarnos!</h1>
            </div>
            <div class="content">
              <p>Hola ${formData.fullName},</p>
              <p>Hemos recibido tu mensaje correctamente. Nuestro equipo lo revisará y te responderá a la brevedad posible.</p>
              <p><strong>Resumen de tu mensaje:</strong></p>
              <p><strong>Asunto:</strong> ${formData.subject}</p>
              <p><strong>Mensaje:</strong><br>${formData.message}</p>
              <p>Si tienes alguna pregunta urgente, no dudes en contactarnos directamente.</p>
              <p>Saludos cordiales,<br><strong>Equipo Doce Leguas</strong></p>
            </div>
            <div class="footer">
              <p>Este es un correo automático, por favor no respondas a este mensaje.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Doce Leguas <onboarding@resend.dev>",
        to: ["rafa.queralta@doceleguas.com"],
        subject: `Nuevo contacto: ${formData.subject}`,
        html: notificationEmailBody,
        reply_to: formData.email,
      }),
    });

    if (!notificationRes.ok) {
      const error = await notificationRes.text();
      throw new Error(`Resend API error (notification): ${error}`);
    }

    const notificationData = await notificationRes.json();

    let confirmationSuccess = false;
    let confirmationError = null;

    try {
      console.log(`Sending confirmation email to: ${formData.email}`);

      const confirmationRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Doce Leguas <onboarding@resend.dev>",
          to: [formData.email],
          subject: "Confirmación de recepción - Doce Leguas",
          html: confirmationEmailBody,
        }),
      });

      const confirmationResponseText = await confirmationRes.text();
      console.log(`Confirmation email response status: ${confirmationRes.status}`);
      console.log(`Confirmation email response: ${confirmationResponseText}`);

      if (!confirmationRes.ok) {
        confirmationError = confirmationResponseText;
        console.error(`Confirmation email failed with status ${confirmationRes.status}: ${confirmationResponseText}`);
      } else {
        confirmationSuccess = true;
        console.log('Confirmation email sent successfully');
      }
    } catch (error) {
      confirmationError = error instanceof Error ? error.message : "Unknown error";
      console.error(`Exception sending confirmation email:`, error);
    }

    return new Response(
      JSON.stringify({
        success: true,
        notificationSent: true,
        confirmationSent: confirmationSuccess,
        confirmationError: confirmationError,
        data: notificationData
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
