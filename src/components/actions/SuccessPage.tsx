import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { CircularProgress } from '@mui/material';

function SuccessPage() {
  let content: JSX.Element = <div style={{ textAlign: 'center', margin: '2rem 0', padding: '1rem' }}><CircularProgress size={50} /></div>

  const [pageContent, setPageContent] = React.useState(content);

  setInterval(() => {
    setPageContent(
      <div style={{ textAlign: 'center', margin: '2rem 0', padding: '1rem' }} className="successPageDiv">
        <IoIosCheckmarkCircle size={50} color='green' />
        <h2 style={{ textAlign: 'center', margin: '1rem 0' }}>Thank you for completing your shopping. Your order is in process. You can go to <Link to={'/'}>Home page</Link></h2>
      </div>
    )
  }, 4000)

  return pageContent;
}

export default SuccessPage;