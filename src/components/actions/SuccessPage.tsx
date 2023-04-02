import React from 'react';
import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <div className="successPageDiv">
        <h1 style={{textAlign: 'center', margin: '1rem 0'}}>Thank you for completing your shopping. Go to <Link to={'/'}>Home page</Link></h1>
    </div>
  )
}

export default SuccessPage;