import React, { useEffect, useState } from 'react'
import './style.css'
export default function CollegeIndex() {
    const [data, setData] = useState([]);


    const url = "http://universities.hipolabs.com/search?country=india";
    const updateData = async () => {
        let i = 0;
        const res = await fetch(url);
        // console.log(res)
        const data = await res.json();
        console.log(data)
        // console.log(data[100].domains);
        setData(data)
    }
    useEffect(() => {
        updateData();
    }, []);
    let no = 1;
    return (
        <>
            <div className='College_data'>
                <h1>College Information In India</h1>
                <table border={1}>
                    {/* <th>
                        <tr>
                            <th>Name</th>
                            <th>City</th>

                        </tr>
                    </th> */}
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Website</th>
                            <th>SNO.</th>

                        </tr>
                        {


                            data
                                .map((ele, index) => {

                                    return (

                                        <tr>
                                            <td>{no++}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.country}</td>
                                            <td><a target="_blank" href={ele.web_pages}>{ele.web_pages}</a></td>
                                            {/* <td>{ele.state - province}</td> */}
                                        </tr>

                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
            {/* sorting 

.sort((a, b) => {
                                if (a.name < b.name) return -1
                                if (a.name > b.name) return 1;
            return 0;
                            }) */}
        </>
    )
}
