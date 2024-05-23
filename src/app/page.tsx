'use client'

import { Button } from "@/components/Button";
import Image from "next/image";
import { useState } from "react";

export default function Page() {

  const Change = () =>{ setMudarCor(!mudarCor)}

  const [mudarCor,setMudarCor] = useState(false)

  return (
      <div className={`
      h-screen  w-screen 
      ${mudarCor == false? 'bg-black text-white':'bg-white text-black'}
      
      `}>
      
          <h1 className="mb-5 text-2xl ml-5 pt-5 ">Título da página</h1>
          <p className="mb-5 text-1xl ml-5">Conteúdo da página</p>
       

        <Button onClick={Change} />
    <br />
        <button
        onClick={()=>setMudarCor(!mudarCor)}
        className={`
        mt-4 rounded-md cursor-pointer border border-blue-300 p-3 ml-5
        ${mudarCor == false ? 'bg-blue-400':'bg-black text-white'}
        `}
        >Teste</button>


      </div>
  );
}
