import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SuperCoin = () => {
    const [superCoins, setSuperCoins] = useState(0);
    const cartItems = useSelector((state) => state.cart.cartItems);

    useEffect(() => {
        console.log("Cart Items in SuperCoin:", cartItems);
    }, [cartItems]);

    const totalAmount = cartItems.reduce((total, item) => {
        return total + (item.price || 0) * (item.quantity || 0);
    }, 0);

    useEffect(() => {
        console.log("Total Amount in SuperCoin:", totalAmount);
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
        <div style={{ textAlign: 'center' }}>
            You have earned: {superCoins} Super Coins!
        </div>
    );
};

export default SuperCoin;