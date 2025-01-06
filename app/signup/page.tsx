import React from 'react'
import { SignupFormDemo } from '../_components/SignUpForm'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='w-screen h-screen flex items-center justify-center z-50'>
        <SignupFormDemo />
    </div>
  )
}