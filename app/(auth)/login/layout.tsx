import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div className="flex  flex-col items-center  justify-center h-screen w-[100vw] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      {children}
    </div>
  )
}
