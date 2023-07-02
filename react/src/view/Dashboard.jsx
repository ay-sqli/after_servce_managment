import React from 'react';
import { useStateContext } from '../Contexts/ContextProvider';
import ClaimListItem from '../Components/DashboardListItem';
import PageComponent from '../Components/PageComponent';

function Dashboard() {
  const { claim } = useStateContext();
  return (
    <> 
    <header>
  </header>
  <main>
  <PageComponent title="Nombre total d'appareils:" Nbre="4"> 
    <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 justify-center mt-12 h-lg">
     
                {claim.map((claimItem) => (

                    <ClaimListItem claim={claimItem} key={claimItem.id} />

                 ))}

    </div>
    </div>
    </PageComponent>
  </main>

  </>
  )
}

export default Dashboard