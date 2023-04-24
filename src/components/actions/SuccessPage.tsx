import React from 'react';
import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <div className="successPageDiv">
        <h2 style={{textAlign: 'center', margin: '1rem 0'}}>Thank you for completing your shopping. Your order is in process. Go to <Link to={'/'}>Home page</Link></h2>
    </div>
  )
}

export default SuccessPage;