import React from 'react'

function ToolsColumn({ tool }) {

    const tools = tool.tools

    return (
        <div className='p-5'>
            <div className="text-2xl">
                {tool.title}
            </div>
            <div className='flex flex-col text-center items-center' >
                {
                    tools.map((item, index) => (
                        <div key={index} className="border-0 border-solid border-b-2 border-black p-2.5 w-1/2 text-center ">{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default ToolsColumn