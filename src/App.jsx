import { useEffect } from "react";
import Jumbotron from './components/Jumbotron';
import ButtonFilter from './components/ButtonFilter';
import useAxios from "./hooks/UseAxios"
import ListApi from "./components/ListApi";

function App() {
    const { fetchData, response, loading } = useAxios('entries');

    useEffect(() => {
        fetchData({ category: 'Animals' });
    }, []);

    return (
    <div className="App">
        <Jumbotron fetchData={fetchData} />
        <div className="container mx-auto max-w-4xl">
            <ButtonFilter fetchData={fetchData} />
            <ListApi response={response} loading={loading} />
        </div>
    </div>
    );
}

export default App;
