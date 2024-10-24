import React from "react";

export default function authlayot({children}: Readonly<{
    children: React.ReactNode
}>){

    return (<>
        <main className="flex h-screen w-full items-center justify-center px-4">
            
            {children}
        </main>
    </>)
}