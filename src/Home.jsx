import React, { useEffect, useState } from 'react'

const Home = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "GET",
            headers: { "content-type": "application/json" }
        }).then(res => {
            return res.json();
        }).then(responce => {
            setData(responce);
        })
    })

    return (
        <>

            <div className="mt-5 pt-5">
                <input onChange={(value) => setSearch(value.target.value)}
                    placeholder="Search"
                    type="text"
                    className="form-control my-5" />
                <button type="button" class="btn btn-primary" onClick={() => {
                    {
                        localStorage.clear()
                        window.location.reload(true)
                    }
                }}>Logout</button>
                <div className="container">
                    <div className="row">

                        {
                            data.filter((filtervalue) => filtervalue.title.toLowerCase().includes(search.toLocaleLowerCase()))
                                .map((data) => {

                                    return (
                                        <div className="col-md-4 col-lg-3">
                                            <div className="card" style={{ width: "18rem", height: "600px", margin: "20px" }}>
                                                <img src="https://cache1.pakwheels.com/system/car_generation_pictures/6008/original/Land_Cruiser_300_-_PNG.png?1635484577" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{data.title}</h5>
                                                    <p className="card-text">{data.body}</p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                })
                        }
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home