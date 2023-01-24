import React, { useContext } from 'react'
import { ContextApi } from '../Context/ContextApi'

export default function Informations() {
    const { ourData, toggleHide, } = useContext(ContextApi)

    return (
        <div>

            <div className='space-y-3  bg-gray-300 flex flex-col '>
                {
                    ourData.map((element, index) => {
                        return <div className='flex flex-col leading-loose bg-white m-2 rounded-lg text-sm' key={element.id}>
                            <div className='flex justify-around items-center  py-8 '>
                                <div>
                                    <p>Hello {element.username}</p>
                                </div>
                                <div>
                                    <h3 className='font-semibold'>CONTACT</h3>
                                    <p>{element.name}</p>
                                </div>
                                <div>
                                    <h3 className='font-semibold'>CITY</h3>
                                    <p>{element.address.city}</p>
                                </div>
                                <div>
                                    <h3 className='font-semibold'>STATE</h3>
                                    <p>{element.address.street}</p>
                                </div>
                                <div>
                                    <button className=" bg-red-500 text-white px-3 py-1 rounded-full" onClick={() => { toggleHide(element.id) }}>{element.btnTxt}</button>
                                </div>
                            </div>
                            <div id='toggleHidden' className='w-[80%] hidden m-auto my-5 transition duration-1000 ease-in-out'>
                                <div className='py-3'>
                                    <h3 className='font-semibold'>Description</h3>
                                    <p>{element.company.name} {element.company.catchPhrase} {element.company.bs}</p>
                                </div>
                                <div className='flex items-center '>
                                    <div className='w-[50%]'>
                                        <div>
                                            <h3 className='font-semibold'>Contact Person</h3>
                                            <p>{element.name}</p>
                                        </div>
                                        <div>
                                            <h3 className='font-semibold'>Designation</h3>
                                            <p>{element.company.bs}</p>
                                        </div>
                                        <div>
                                            <h3 className='font-semibold'>Emails</h3>
                                            <p>{element.email}</p>
                                        </div>
                                        <div>
                                            <h3 className='font-semibold'>Phone</h3>
                                            <p>{element.phone}</p>
                                        </div>
                                    </div>
                                    <div className='w-[50%]'>
                                        <div>
                                            <h3 className='font-semibold'>Address</h3>
                                            <p> {element.address.city}  {element.address.suite} {element.address.street}   {element.address.zipcode}</p>
                                        </div>
                                        <div>
                                            <h3 className='font-semibold'>City</h3>
                                            <p>{element.address.city}</p>
                                        </div>
                                        <div>
                                            <h3 className='font-semibold'>State</h3>
                                            <p>{element.address.street}</p>
                                        </div>
                                        <div>
                                            <h3 className='font-semibold'>Zipcode</h3>
                                            <p>{element.address.zipcode}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    )
}
