import { SignIn } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const SignInPage = (props: Props) => {
  return (
    <main className='flex h-screen w-full items-center justify-center' >
        <SignIn/>
    </main>
  )
}

export default SignInPage