import React from 'react'

const SubTableItems = ({email , date  , mongoId , deleteEmail}) => {
    const subDate = new Date(date);
  return (
    <tr className='border-b border-gray-300'>
        <td className='px-6 py-4 text-xs text-blue-600 tracking-tight text-center'>
            {email ? email : "No Email"}
        </td>

        <td className='px-6 py-4 text-xs text-blue-600 tracking-tight text-center'>
            {subDate.toDateString() || "No Email"}
        </td>

        <td onClick={() => deleteEmail(mongoId)} className='px-6 py-4 text-xs text-blue-600 tracking-tight text-center cursor-pointer'>
            X
        </td>
    </tr>

    
  )
}

export default SubTableItems