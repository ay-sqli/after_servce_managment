import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';


function AddClaim() {
  const [claim, setClaim] = useState({
    client:"",
    Product:"",
    date_claim:"",
    description:"",
    status: false,

  })
  return (
    <>
 <div class="container flex justify-center items-center mt-8 mx-auto max-w-xl bg-sky-400 shadow-2xl p-8 rounded-t-full">
  <h1 class="text-white text-center text-2xl">Ajouter une réclamation</h1>
  <FaIcons.FaPlusCircle className="ml-4 text-2xl" />
</div>

<div class="container mx-auto max-w-4xl bg-white shadow-2xl p-12 rounded-xl">
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        
        <div class="sm:col-span-3">
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Client</label>
              <div class="mt-2">
            <input type="text" name="client" id="client" autocomplete="given-client" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" placeholder='ex: Plasmatio'/>
               </div>
            </div>


          <div class="sm:col-span-3">
            <label for="produit" class="block text-sm font-medium leading-6 text-gray-900">Produit</label>
            <div class="mt-2">
              <select id="produit" name="produit" autocomplete="produit-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm sm:leading-6">
                <option className="text-gray-500">Selectioner Le produit</option>
                <option>Imprimante</option>
                <option>Moniteur</option>
                <option>Unite centrale</option>
              </select>
            </div>
          </div>

         
            <div class="sm:col-span-3">
          <label for="S/N" class="block text-sm font-medium leading-6 text-gray-900">Numero de serie</label>
              <div class="mt-2">
            <input type="text" name="S/N" id="S/N" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" placeholder='ex: GPX213456'/>
               </div>
            </div>
          
          <div class="sm:col-span-4">
            <label for="date" class="block text-sm font-medium leading-6 text-gray-900">Date</label>
            <div class="mt-2">
              <input type="date" name="date" id="date" autocomplete="off" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
            </div>
          </div>
          <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
            <div class="mt-2">
              <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" placeholder="Decrire La Reclamation..."></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button type="submit" class="flex items-center rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    Save
    <FaIcons.FaPaperPlane className="ml-1" />
  </button>
</div>
  </form>
</div>


    </>
  )
}

export default AddClaim