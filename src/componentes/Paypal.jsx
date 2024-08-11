
import React, { useEffect, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';


const PayPalButton = ({totalPagar}) => {
  const [formattedTotalPagar, setFormattedTotalPagar] = useState(parseFloat(totalPagar).toFixed(2));

  useEffect(() => {
    // Actualiza el estado cuando `totalPagar` cambia
    setFormattedTotalPagar(parseFloat(totalPagar).toFixed(2));
  }, [totalPagar]);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: formattedTotalPagar, // Monto a cobrar
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert('Transaction completed by ' + details.payer.name.given_name);
    });
  };

  return (
    <div>
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </div>
  );
};

export default PayPalButton;
