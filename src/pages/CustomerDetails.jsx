import { useParams } from "react-router-dom"
import { useEffect } from "react"

function CustomerDetails() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  const {id} = useParams()

  return (
    <div>{id}</div>
  )
}

export default CustomerDetails