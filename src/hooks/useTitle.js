const { useEffect } = require("react")

const useTitle = title =>{
    useEffect( () => {
        document.title = `${title} - Tour Place`;
    }, [title])
}

export default useTitle;