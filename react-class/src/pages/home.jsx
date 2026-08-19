import { useEffect, useState } from "react";
import {toast, ToastContainer} from "react-toastify"


const Home=() =>{
      const year = new Date().getFullYear()

      const[characters, setCharacter]=useState([])

    useEffect(() =>{
     const fetchData = async () => {
      const response = await fetch ("https://dragonball-api.com/api/characters")
     const data = await response.json()
     console.log("Data to be rendered:", data.items)
     setCharacter(data.items)
     toast.success("Data fetched sucessfully")
    }

fetchData()
    },[])

  return (
    <>
    <ToastContainer positions="top-left" autoClose={3000}
    theme="dark" closeOnClick={true} draggable={true}
    pauseOnHover={true} rtl={false} limit={1}
    hideProgressBar={false} newestOnTop={false}  closeButton={true} />
    <h1 className="text-red-800 text-4xl text-center">Hello World</h1>

    <p className="text-center">
   Copyright &copy; {year}
    </p>

     <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">

    {characters.map((character,index) =>(
      <div key={index}>
    <div className="w-16">
  <img src={character.image} alt ={character.name} className="object-cover"/>
    </div>
    {character.name}
    </div>
  ))}
  </section>
    </>
  )
}

export default Home