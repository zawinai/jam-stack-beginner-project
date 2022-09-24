import React, { useState } from 'react'
import { useContext } from 'react'
import { useFetchUser } from '../lib/authContext'
import { fetcher } from '../lib/api'


const Modal = ({modal, setModal, id, setEditReview, editReview, editTitle, setEditTitle, editRating, setEditRating ,handleEdit }) => {

  return (
     <div className={`${modal ? 'visible' : 'invisible'} relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true`}>

     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
   
     <div className="fixed inset-0 z-10 overflow-y-auto">
       <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
   
         <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
           <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
             <div className="flex flex-col">
                 <div className="mx-auto flex gap-1 h-12 w-12 flex-shrink-0 items-center justify-center sm:mx-0 sm:h-10 sm:w-10">
                  <h1>
                    Edit
                  </h1>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                  </svg>
                 </div>

                <form className="flex flex-col gap-5 min-h-full w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8" onSubmit={handleEdit}>
                  <div className='flex flex-row items-center'>
                  {
                       Array(10).fill().map((v, index) => (
                                 <svg xmlns="http://www.w3.org/2000/svg" fill={`${`${editRating >= index + 1 ? 'currentColor' : 'white' }`}`} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500" key={index} values={editRating} onClick={() => setEditRating(index + 1)}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                 </svg>
                       ))
                  }
                  </div>
                <input type="text" name="price" id="title" className="block outline-none px-3 py-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Edit title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>                 
                  <textarea cols={20} rows={10} className="block p-2.5 px-3 py-2 w-full text-sm text-gray-900 bg-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add new review..." value={editReview} onChange={(e) => setEditReview(e.target.value)} />
                </form>
             </div>
           </div>
           <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
             <button type="Submit" className="inline-flex w-full justify-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"  onClick={() => handleEdit()}>Submit</button>
             <button type="Cancel" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setModal(false)}>Cancel</button>
           </div>
         </div>
       </div>
     </div>
   </div>
  )
}

export default Modal