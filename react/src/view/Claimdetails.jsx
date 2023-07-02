import React from 'react';
import PageComponent from '../Components/PageComponent';
import * as FaIcons from 'react-icons/fa';

function Claimdetails() {
  return (
    <PageComponent title="Details de Reclamation">

<div class="container mx-auto max-w-4xl mt-6 bg-white shadow-2xl p-12 rounded-xl">
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Client:</label>
              <div class="mt-2">
              <p>DRS</p>
            </div>
            </div>


          <div class="sm:col-span-3">
            <label for="produit" class="block text-sm font-medium leading-6 text-gray-900">Produit:</label>
            <div class="mt-2">
            <p>Hp imprimant</p>
            </div>
          </div>

         
            <div class="sm:col-span-3">
          <label for="S/N" class="block text-sm font-medium leading-6 text-gray-900">Numero de serie:</label>
              <div class="mt-2">
              <p>HGF456789</p>

               </div>
            </div>
          
          <div class="sm:col-span-4">
            <label for="date" class="block text-sm font-medium leading-6 text-gray-900">Date:</label>
            <div class="mt-2">
            <p>35/06/2023</p>
            </div>
          </div>
          <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
            <div class="mt-2">
            <p>Problème de trait</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button type="submit" class="flex items-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600">
    Edit
    <FaIcons.FaEdit className="ml-1" />
  </button>
  <button type="submit" class="flex items-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600">
    Delete
    <FaIcons.FaTrash className="ml-1" />
  </button>
</div>
  </form>
</div>

 
    </PageComponent>
  );
}

export default Claimdetails;
