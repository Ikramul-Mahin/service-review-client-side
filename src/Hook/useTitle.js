import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Super|Tutor`
    }, [title])
}
export default useTitle 