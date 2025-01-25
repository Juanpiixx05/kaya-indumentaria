import React, { useState } from 'react';

const MercadoPagoButton = ({ title, price, quantity = 1 }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      console.log('Iniciando pago...', { title, price, quantity });

      const response = await fetch('/api/mercadopago', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          price,
          quantity,
        }),
      });

      const data = await response.json();
      console.log('Respuesta del servidor:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Error al procesar el pago');
      }

      if (data.init_point) {
        window.open(data.init_point, '_blank');
      } else {
        throw new Error('No se pudo obtener el link de pago');
      }
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      alert('Hubo un error al procesar el pago. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className={`
        bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
        transition-colors duration-200
        ${loading ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {loading ? 'Procesando...' : 'Pagar con Mercado Pago'}
    </button>
  );
};

export default MercadoPagoButton;
