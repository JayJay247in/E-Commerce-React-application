import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'

const SuperCoin = () => {
    const [superCoins, setSuperCoins] = useState(0);
    const cartItems = useSelector((state) => state.cart.cartItems);

    const totalAmount = cartItems.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
    }, 0);

    useEffect(() => {
        if (totalAmount >= 300) {
            setSuperCoins(30);
        } else if (totalAmount >= 200) {
            setSuperCoins(20);
        } else if (totalAmount >= 100) {
            setSuperCoins(10);
        } else {
            setSuperCoins(0);
        }
    }, [totalAmount]);

    return (
        <div>
            You have earned: {superCoins} Super Coins!
        </div>
    );
};

export default SuperCoin;