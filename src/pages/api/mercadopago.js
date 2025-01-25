import { MercadoPagoConfig, Preference } from 'mercadopago';

export async function POST({ request }) {
  try {
    const data = await request.json();
    
    // Configura las credenciales
    const client = new MercadoPagoConfig({ 
      accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN 
    });

    // Crea la preferencia
    const preference = new Preference(client);
    const result = await preference.create({
      body: {
        items: [
          {
            title: data.title,
            unit_price: Number(data.price),
            quantity: Number(data.quantity || 1),
            currency_id: 'ARS',
          }
        ],
        back_urls: {
          success: `${process.env.PUBLIC_URL}/success`,
          failure: `${process.env.PUBLIC_URL}/failure`,
          pending: `${process.env.PUBLIC_URL}/pending`
        },
        auto_return: "approved",
        binary_mode: true,
      }
    });
    
    return new Response(JSON.stringify({
      id: result.id,
      init_point: result.init_point
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });

  } catch (error) {
    console.error('Error en la API de Mercado Pago:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      stack: error.stack 
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
