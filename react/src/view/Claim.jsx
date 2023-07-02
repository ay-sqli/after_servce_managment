import React from 'react';
import { useStateContext } from '../Contexts/ContextProvider';
import ClaimListItem from '../Components/ClaimListItem';
import PageComponent from '../Components/PageComponent';

function Claim() {
  const { claim } = useStateContext();
  console.log(claim);

  if (!claim || claim.length === 0) {
    return null; // Return null or display a placeholder when claim array is empty or null
  }

  return (
    
    <div>
      <PageComponent title="Toutes les Reclamations">
        <div className="flex justify-center font-mono">
          <div className="grid grid-cols-1 mb-10 gap-5 sm:grid-cols-2 md:grid-cols-3 justify-center mt-20">
            {claim.map((claimItem) => (

              <ClaimListItem claim={claimItem} key={claimItem.id} />

            ))}
          </div>
        </div>
      </PageComponent>
    </div>
  );
}

export default Claim;
