import React from "react";
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal(){
    const [{basket}, dispatch] = useStateValue();

/*
    const calculateBasketValue = () => {
        /* let initValue = 0;
        basket.forEach(element => {
            initValue += element.price;
        });
        return initValue; */ /*
        const currentValue = basket.reduce((acc, object) => {
            return acc + object.price
        }, 0)
        return currentValue;
    } */


    return(
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({`${basket.length}`} items):
                            <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type='checkbox'/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal