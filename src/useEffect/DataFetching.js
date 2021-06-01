import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DataFetching(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            console.log(response)
            setPosts(response.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    },[])

    return(
        <div>
            {
                posts.map((post)=>{
                    return(
                        <li key={post.id}>{post.title}</li>
                    )
                })
            }
        </div>
    )
}
export default DataFetching