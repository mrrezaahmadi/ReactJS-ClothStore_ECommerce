import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
	const priceForStripe = price * 100;
	const PUBLISHABLE_KEY =
		"pk_test_51HGgEgCOPAdoZzZWLo6B12Y9VKAW99r6lPqKbkNycXuQDi2D1yq5l7WZy7uovSDemETJStXjGq71whozb74MOANE00iFSvOttf";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Clothing Store Co."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={PUBLISHABLE_KEY}
		/>
	);
}

export default StripeCheckoutButton;
