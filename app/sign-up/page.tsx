import React from 'react'
import { SignupForm } from '../_components/SignUpForm'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="max-sm:ml-8 relative ~top-10/24 flex flex-col items-center justify-center text-center">
      <SignupForm />
    </div>
  );
}