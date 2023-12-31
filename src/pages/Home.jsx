import React, { useState } from 'react'

const Home = () => {

        const [color, setColor] = useState("olive")


    return (
        <>
            <div className='w-full h-screen' style={{ backgroundColor: color }}>


                <div className='text-white font-bold text-pretty text-7xl text-center py-20'>
                    Set your favourite Background
                </div>
                


                <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 items-center px-2 '>
                        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 '>

                          <button className='px-4 py-1 rounded-full outline-none shadow-lg duration-300 hover:text-white' style={{
                            backgroundColor: "red"
                          }} onClick={()=>setColor("red")}>
                            Red
                          </button>
                          <button className='px-4 py-1 rounded-full outline-none shadow-lg duration-300 hover:text-white' style={{
                            backgroundColor: "green"
                          }} onClick={()=>setColor("green")}>
                            green
                          </button>
                          <button className='px-4 py-1 rounded-full outline-none shadow-lg duration-300 hover:text-white' style={{
                            backgroundColor: "yellow"
                          }} onClick={()=>setColor("yellow")}>
                            yellow
                          </button>
                          <button className='px-4 py-1 rounded-full outline-none shadow-lg duration-300 hover:text-white' style={{
                            backgroundColor: "blue"
                          }} onClick={()=>setColor("blue")}>
                            blue
                          </button>
                          <button className='px-4 py-1 rounded-full outline-none shadow-lg duration-300 hover:text-white' style={{
                            backgroundColor: "pink"
                          }} onClick={()=>setColor("pink")}>
                            pink
                          </button>
                          <button className='px-4 py-1 rounded-full outline-none shadow-lg duration-300 hover:text-white' style={{
                            backgroundColor: "orange"
                          }} onClick={()=>setColor("orange")}>
                            orange
                          </button>
                          <button className='px-4 py-1 rounded-full outline-none shadow-lg duration-300 hover:text-white' style={{
                            backgroundColor: "brown"
                          }} onClick={()=>setColor("brown")}>
                            brown
                          </button>

                        </div>
 
               </div>

            </div>


        </>

    )
}

export default Home
