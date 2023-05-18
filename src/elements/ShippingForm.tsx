import React from 'react'
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/Context';

export default function ShippingForm() {
    const ctx = React.useContext(StoreContext);
    const nameRef = React.useRef<HTMLInputElement>(null);
    const emailRef = React.useRef<HTMLInputElement>(null);
    const mobileNumberRef = React.useRef<HTMLInputElement>(null);
    const addressRef = React.useRef<HTMLInputElement>(null);
    const pinCodeRef = React.useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [error, setError] = React.useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value.length > 0) {
            setError('');
        }
    }

    function submitForm(event: React.FormEvent) {
        event.preventDefault();
        if (nameRef.current?.value === '' || emailRef.current?.value === '' || mobileNumberRef.current?.value === '' || addressRef.current?.value === '' || pinCodeRef.current?.value === '') {
            setError('Form field(s) should not be empty.');
            return;
        }
        ctx.checkout();
        navigate('/shopping/checkout/success');
    }

    function cancelForm() {
        navigate('/cart');
    }

    return (
        <div className="shippingFormDiv">
            <h1>Shipping Details</h1>
            <hr style={{ margin: '10px 0' }} />

            {error && <span style={{ color: 'red' }}>* {error}</span>}

            <form action="" onSubmit={submitForm}>
                <label>Name</label>
                <input onChange={handleChange} ref={nameRef} type="text" name="" id="" placeholder='Enter name' />
                <label>Email</label>
                <input onChange={handleChange} ref={emailRef} type="email" name="" id="" placeholder='Enter email' />
                <label>Mobile No.</label>
                <input onChange={handleChange} ref={mobileNumberRef} type="number" name="" id="" placeholder='Enter Mobile no.' min={0} maxLength={10} />
                <label>Address</label>
                <input onChange={handleChange} ref={addressRef} type="text" name="" id="" placeholder='Enter address' />
                <label>Pin Code</label>
                <input onChange={handleChange} ref={pinCodeRef} type="number" name="" id="" placeholder='Enter pin' min={0} maxLength={6} />
                <div className="action">
                    <button onClick={cancelForm} type='button'>Cancel</button>
                    <button type='submit' className='submitBtn'>Submit</button>
                </div>
            </form>
        </div>
    )
}