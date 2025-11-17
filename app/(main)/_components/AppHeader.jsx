import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'

const AppHeader = () => {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center'>
      <Image src={'/logo.svg'} alt='Logo' width={120} height={40}/>
      <UserButton/>
    </div>
  )
}

export default AppHeader
