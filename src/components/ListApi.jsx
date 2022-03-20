import React from 'react';
import CardApi from './CardApi';
import LoadingSkeleton from './LoadingSkeleton';

const ListApi = ({ response, loading }) => {

    if(loading) {
        const style = {
            outerDiv: "mt-2 grid md:grid-cols-3 gap-4 animate-pulse",
            innerDiv: "h-28 w-full bg-gray-300 m-1 rounded-sm",
        }
        return <LoadingSkeleton number={6} style={style} />
    }

    if(!response.entries) {
        return <p className="text-center text-gray-500 text-2xl mt-20">Something went wrong 😢</p>
    }
    
    return (
        <div className="mx-2 mb-10">
            <h3 className="font-semibold text-xl text-slate-600">List API</h3>
            <div className="grid gap-4 md:grid-cols-3">
                {response.entries && response.entries.map((apiObj, index) => <CardApi apiObj={apiObj} key={index} />)}
            </div>
        </div>
    );
};


export default ListApi;