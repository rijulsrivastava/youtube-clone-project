import { useEffect, useState } from "react"
import axios from "axios"
//below is the custom hook to fetch APIs
function useFetch(url) {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        //to fetch data when url changes
        async function fetchData() {
            try {
                setLoading(true)
                const data = await axios.get(url)
                console.log(data)
                setData(data.data)
            } catch (err) {
                console.log(err.message)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    return { data, loading, error, setData }
}
export default useFetch