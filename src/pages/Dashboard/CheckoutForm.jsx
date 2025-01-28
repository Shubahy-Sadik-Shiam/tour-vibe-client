import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const { data: booking = {} } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/booking/${id}`);
      return res.data;
    },
  });
  const price = booking.price;

  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, price]);

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
    //   console.log("payment error", error);
      setError(error.message);
    } else {
    //   console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment------>
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Anonymous",
            name: user?.displayName || "Anonymous",
          },
        },
      });

    if (confirmError) {
    //   console.log("confirm error", confirmError);
      setConfirmError(confirmError.message);
    } else {
    //   console.log("payment intent", paymentIntent);
      setConfirmError("");
      if (paymentIntent.status === "succeeded") {
        // now save the payment info in the database
        const paymentInfo = {
          email: user.email,
          price: price,
          transactionId: paymentIntent.id,
          date: new Date(),
        };

        const res = await axiosSecure.post("/payments", paymentInfo);
        if (res.data.insertedId) {
          axiosSecure
            .patch(`/status/${booking._id}`, { status: "in review" })
            .then((response) => {
              if (response.data.modifiedCount > 0) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Payment Successful",
                  text: `Your Transaction Id: ${paymentIntent?.id}`,
                  showConfirmButton: true,
                });
                navigate("/dashboard/myBookings");
              }
            });
        }
      }
    }
  };

  return (
    <form
      className="lg:w-1/2 md:w-11/12 w-11/12  bg-teal-500 rounded-xl mt-20 p-20 mx-auto"
      onSubmit={handleSubmit}
    >
      <CardElement
        className="border-2 p-4 bg-white rounded-xl"
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
      <p className="text-sm font-semibold text-red-500">{confirmError}</p>
      <button
        className="btn btn-outline text-white btn-block mt-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
