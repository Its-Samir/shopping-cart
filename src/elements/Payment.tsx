import React, { useContext, useState } from "react";
import { StoreContext } from "../context/Context";
import { Button, CircularProgress } from "@mui/material";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Payment() {
    const ctx = useContext(StoreContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState("");
    const [cvvNumber, setCvvNumber] = useState("");
    const [date, setDate] = useState("");
    const [name, setName] = useState("");

    React.useEffect(() => {
        let title = document.querySelector("title")!;
        title.innerText = "Payment";
    }, []);

    function paymentSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (
            cardNumber.length < 12 ||
            cvvNumber.length < 3 ||
            date.length < 4 ||
            !name
        ) {
            return;
        }

        setLoading(true);

        ctx.payment();

        setTimeout(() => {
            navigate("/shopping/checkout/success");
            setLoading(false);
            ctx.checkout();
        }, 2000);
    }

    function cancelPayment() {
        navigate("/cart");
    }

    return (
        <div className="payment">
            <span onClick={cancelPayment} id="backIcon">
                <MdArrowBack size={30} /> <span>back</span>
            </span>

            <div className="leftDiv">
                {ctx.items.map((p) => (
                    <span key={p.id}>
                        <strong>Product:</strong> {p.title} - <strong>Quantity:</strong>{" "}
                        {p.quantity}
                    </span>
                ))}
            </div>

            <div className="rightDiv">
                <h2>Fill Payment Details (Demo details)</h2>
                <hr style={{ margin: "10px 0" }} />

                <form onSubmit={paymentSubmitHandler} action="" className="paymentForm">
                    <label>
                        Enter Card Number {cardNumber.length < 12 && "(required*)"}
                    </label>
                    <span style={{ fontSize: ".7rem" }}>
                        (Enter any demo number of 12 digit)
                    </span>
                    <input
                        onChange={(e) =>
                            e.target.value.length <= 12 && setCardNumber(e.target.value)
                        }
                        value={cardNumber}
                        type="number"
                        name=""
                        id=""
                        placeholder="Enter Card No."
                    />

                    <div className="otherDetails">
                        <div className="otherDetail">
                            <label>Enter CVV {cvvNumber.length < 3 && "(required*)"}</label>
                            <span style={{ fontSize: ".7rem" }}>
                                (Enter any demo CVV of 3 digit)
                            </span>
                            <input
                                onChange={(e) =>
                                    e.target.value.length <= 3 && setCvvNumber(e.target.value)
                                }
                                value={cvvNumber}
                                type="number"
                                name=""
                                id=""
                                placeholder="Enter CVV"
                            />
                        </div>
                        <div className="otherDetail">
                            <label>
                                Enter Expiry Date {date.length < 4 && "(required*)"}
                            </label>
                            <span style={{ fontSize: ".7rem" }}>
                                (Enter any demo date (like 04/23 is 0423) in 4 digit)
                            </span>
                            <input
                                onChange={(e) =>
                                    e.target.value.length <= 4 && setDate(e.target.value)
                                }
                                value={date}
                                type="number"
                                name=""
                                id=""
                                placeholder="Enter Expiry Date"
                            />
                        </div>
                    </div>

                    <label>Enter Card Holder Name {!name && "(required*)"}</label>
                    <span style={{ fontSize: ".7rem" }}>(Enter any name)</span>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter Card Holder Name"
                    />

                    <Button
                        disabled={
                            cardNumber.length < 12 ||
                            cvvNumber.length < 3 ||
                            date.length < 4 ||
                            !name
                        }
                        type="submit"
                        color="info"
                        variant="contained"
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : "Pay"}
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Payment;
