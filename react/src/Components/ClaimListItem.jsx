import React from 'react';
import {FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ClaimListItem({ claim }) {
  if (!claim || !claim.id || !claim.client_id || !claim.product_id || !claim.claim_date || !claim.Description || claim.Status === undefined || claim.Status === null || claim.Status === '') {
    return null; // Return null or display a placeholder for invalid Claim objects
  }
  console.log(claim);

  let statusColor = '';
  if (claim.Status === true) {
    statusColor = <span className='text-lime-500 font-light'>Complete</span>;
  }else{
    statusColor = <span className='text-red-500 font-light'>En cours</span>;

  }

  return (

<>
<Link to="/Claim/Claimdetails">
<div className='flex flex-col py-4 px-8 mb-6 shadow-md rounded-lg bg-white hover:bg-slate-50 hover:bg-gray-h-[470px]' style={{ position: 'relative' }}>
  <div className='flex justify-between items-center'>
    <ul className="flex flex-col gap-4">
      <li className='text-lg font-bold'>Id:<span className='font-light'>{claim.id}</span></li>
      <li className='text-lg font-bold'>Description:<span className='font-light' dangerouslySetInnerHTML={{ __html: claim.Description }}></span></li>
      <li className='text-lg font-bold'>Date:<span className='font-light'>{claim.claim_date}</span></li>
      <li className='text-lg font-bold'>Status:{statusColor}</li>
    </ul>
  </div>
  
  <div className='absolute bottom-5 right-7'>
    <FaArrowRight color='black' className=' text-2xl hover:opacity-60' />
  </div>
</div>
</Link>


</>

  );
}

export default ClaimListItem;
