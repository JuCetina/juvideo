import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [ videos, setVideos ] = useState({ data: { movies: [] } });

    useEffect(() => {
         fetch(API)
         .then(response => response.json())
         .then(data => setVideos(data));
        }, []);

    // console.log(videos);
    return videos;
}

export default useInitialState;