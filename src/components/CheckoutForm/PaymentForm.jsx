import React from 'react';
import { Typography, Button, Divider} from '@material-ui/core';
import { Elements, CardElement, ElementConsumer } from '@stripe/react-stripe-js';
import { loadStrip } from '@stripe/stripe-js';

import Review from './Review'


export const PaymentForm = ({checkoutToken}) => {
  return ( 
    <>
        <Review checkoutToken={checkoutToken} />
    
    </>
  )
};
