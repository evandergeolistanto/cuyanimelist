"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = () => {
        const keyword = searchRef.current.value
        router.push(`/search/${keyword}`)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }
  return (
    <div className="relative">
        <input 
            placeholder="Search"
            className="w-full p-2 rounded-md"
            ref={searchRef}
            onKeyDown={handleKeyPress}
        />
        <button className="absolute top-2 end-2" onClick={handleSearch}>
            <MagnifyingGlass size={24} />
        </button>
    </div>
  )
}

export default InputSearch