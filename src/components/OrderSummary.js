import React from 'react'
import { useNavigate } from 'react-router';

function OrderSummary() {
    const backButtonFun = useNavigate()
    return (
        <>
            <div>OrderSummary</div>

            {/* -1 to back to page which have called us */}
            <button onClick={() => backButtonFun(-1)}>Back to Home</button>
        </>
    )
}

export default OrderSummary
