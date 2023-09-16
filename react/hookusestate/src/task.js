import { useState } from "react";

export default function Details()
{
    const [data,setData] = useState({

        name:"Alok",
        article:{
            title:"XYZ",
            img:"xyz.jpg"
        },
        age:"12"
    })

    function changeName(e)
    {
        setData({
            ...data,
            name:e.target.value,
           
        })
    }
    function changeage(e)
    {
        setData({
            ...data,
            age:e.target.value
           
        })
    }
    function changeTitle(e)
    {
        setData({
            ...data,
           article:
           {...data.article,
            title:e.target.value}
        })
    }
    function changeimg(e)
    {
        setData({
             ...data, 
              article:
              {...data.article,
                img:e.target.value}
        })
    }

    return(
        <>
        <input 
        value={data.name}
        onChange={changeName}
        />

        <input 
        value={data.article.title}
        onChange={changeTitle}
        />

        <input 
        value={data.article.img}
        onChange={changeimg}

       
        />

        <input 
        value={data.age}
        onChange={changeage}

       
        />
        
        <p>Name : {data.name}</p>
        <p>Title : {data.article.title}</p>
        <p>Image :{data.article.img}</p>
        <p>age :{data.age}</p>
        </>
    )
}