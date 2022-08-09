import React from "react";
import StripeCheckout from "react-stripe-checkout";



export class Pay extends React.Component {
    render() {
        const onToken = (token) => {

        }
        return (
            <div className="pay">
                <StripeCheckout 
                name="2206-gs-aries" 
                image="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
                token={onToken}
                stripeKey="pk_test_51LTdrBEznKcG9iRQKsASTEcnODkBdMnxKufVh3fgXBtpx0SaQLhf8AzeoqcdMDi88zEaCnb56RjuTXWmhqWrOfOV00uzKuRoFF">
        <button className="pay_button">pay</button>

        </StripeCheckout>     
          </div>
        )
    }
}
export default Pay