import { useState } from "react"

export const useCategories = () => {
  const [categories, setCategories] = useState([])


  return {
    categories
  }
}