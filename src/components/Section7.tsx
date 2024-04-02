import { PlusIcon } from '@/assets/icons'
import React from 'react'

type Props = {}

const Section7 = (props: Props) => {
  return (
    <div className='p-10'>
      <div className="flex max-w-screen-lg mx-auto">
        <div className="flex flex-col flex-1">
          <p className='text-4xl font-bold'>Frequently <br /> asked Questions</p>
          <p>Still you have any questions? Contact our Team via support@skillbridge.com</p>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="border rounded-lg flex bg-gray-200 justify-between p-4">
            <p>
            How do I access the NEET test papers?
            </p>
            <PlusIcon className='w-6 h-6' />
          </div>
          <div className="border rounded-lg flex bg-gray-200 justify-between p-4">
            <p>
            Are the explanations provided in Kannada only?
            </p>
            <PlusIcon className='w-6 h-6' />
          </div>
          <div className="border rounded-lg flex bg-gray-200 justify-between p-4">
            <p>
            How often are the test papers updated?
            </p>
            <PlusIcon className='w-6 h-6' />
          </div>
          <div className="border rounded-lg flex bg-gray-200 justify-between p-4">
            <p>
            Can I discuss doubts with other students?
            </p>
            <PlusIcon className='w-6 h-6' />
          </div>
          <div className="border rounded-lg flex bg-gray-200 justify-between p-4">
            <p>
            Will I receive feedback on my performance?
            </p>
            <PlusIcon className='w-6 h-6' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7