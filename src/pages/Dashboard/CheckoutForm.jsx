import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment------>
    // const { paymentIntent, error: confirmError } =
    //   await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: card,
    //       billing_details: {
    //         email: user?.email || "Anonymous",
    //         name: user?.name || "Anonymous",
    //       },
    //     },
    //   });

    // if (confirmError) {
    //   console.log("confirm error", confirmError);
    // } else {
    //   console.log("payment intent", paymentIntent);
    //   if (paymentIntent.status === "succeeded") {
    //     setTransactionId(paymentIntent.id);

        // now save the payment info in the database
        // const paymentInfo = {
        //   email: user.email,
        //   price: totalPrice,
        //   transactionId: paymentIntent.id,
        //   date: new Date(),
        //   cartIds: cart.map((item) => item._id),
        //   menuItemIds: cart.map((item) => item.menuId),
        //   status: "pending",
        // };

        // const res = await axiosSecure.post("/payments", paymentInfo);
        // console.log("payment info saved", res.data);
        // refetch();
        // if (res.data?.paymentResult?.insertedId) {
        //   Swal.fire({
        //     position: "center",
        //     icon: "success",
        //     title: "Payment Successful",
        //     text: `Your Transaction Id: ${paymentIntent?.id}`,
        //     showConfirmButton: true,
        //   });
        //   navigate("/dashboard/myBookings");
        // }
    //   }
    // }
  };

  return (
    <form className="lg:w-1/2 md:w-11/12 w-11/12  bg-teal-500 rounded-xl mt-20 p-20 mx-auto" onSubmit={handleSubmit}>
      <CardElement className="border-2 p-4 bg-white rounded-xl"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p className="text-sm font-semibold text-red-500">{error}</p>
      <button
        className="btn btn-outline text-white btn-block mt-4"
        type="submit"
        // disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
