import { useEffect } from "react";
import useAxios from "../hooks/UseAxios"
import LoadingSkeleton from "./LoadingSkeleton";

const ButtonFilter = ({ fetchData: fetchAPi }) => {
    const { fetchData, response: { categories }, loading } = useAxios("categories")

    useEffect(() => {
        fetchData()
    }, []);

    const clickFilterButton = e => {
        fetchAPi({ category: e.target.value });
    }

    if(loading) {
        const style = {
            outerDiv: "animate-pulse my-5 inline-block text-center",
            innerDiv: "h-7 w-20 bg-gray-300 m-1 rounded-sm inline-block",
        }
        return <LoadingSkeleton number={35} style={style}/>
    }

    return (
        <div className="text-center my-5">
            {
                categories && categories.map( category => (
                    <button
                        key={category}
                        className="bg-pink-400 text-white m-1 py-1 px-2 rounded-sm hover:bg-pink-500"
                        onClick={clickFilterButton}
                        value={category}
                    >{category}
                    </button>
                ))
            }
        </div>
    );
};

ButtonFilter.propTypes = {};

export default ButtonFilter;