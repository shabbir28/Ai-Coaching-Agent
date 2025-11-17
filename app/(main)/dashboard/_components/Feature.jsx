"use client";
import { useUser } from '@stackframe/stack'
import React from 'react'

const Feature = () => {
    const user= useUser();
  return (
    <div>
    <div>
        <h2 className='font-medium text-gray-500'>My workspace</h2>
        <h2 className='text-3xl font-bold'>Welcome Back, {user?.displayName}</h2>
    </div>
    
    </div>
  )
}

export default Feature
