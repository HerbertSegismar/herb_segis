import React from 'react'
import { SignupFormDemo } from '../_components/SignUpForm'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="relative ~top-10/24 flex flex-col items-center justify-center text-center">
      <SignupFormDemo />
    </div>
  );
}