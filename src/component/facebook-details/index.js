import React, { useState, useEffect } from 'react'
import { facebookData } from './data'

function FacebookDetail() {
    const [filterBy, setFilterBy] = useState("0")
    const [searchText, setSearchText] = useState("")
    const [filtered, setFiltered] = useState(facebookData)
    const [facebookDatas, setFacebookDatas] = useState(facebookData)
    

    useEffect(() => {
        filterEntries()
    }, [searchText])

    const filterEntries = () => {
        switch (filterBy){
            case "1":
                setFiltered(facebookDatas.filter((item) => item.Last_name.toLowerCase().startsWith(searchText.toLowerCase())))
                break;
            case "2":
                setFiltered(facebookDatas.filter((item) => item.Date_of_Birth.startsWith(searchText)))
                break;
            case "3":
                setFiltered(facebookDatas.filter((item) => item.Gender.toLowerCase().startsWith(searchText.toLowerCase())))
                break;
            case "4":
                setFiltered(facebookDatas.filter((item) => item.Country.toLowerCase().startsWith(searchText.toLowerCase())))
                break;
            default:
                setFiltered(facebookDatas.filter((item) => item.First_name.toLowerCase().startsWith(searchText.toLowerCase())))
                break;
        }
    }

    return (
        <div>
            <div>
                <div className='page-heading'>
                    <h1>FACEBOOK USERS INFO</h1>
                </div>
                <div>
                    <select className='selectone' onChange={(e) => setFilterBy(e.target.value) } value={filterBy}>
                        <option value="0">FirstName</option>
                        <option value="1">LastName</option>
                        <option value="2">Year of Birth</option>
                        <option value="3">Gender</option>
                        <option value="4">Country</option>
                    </select>
                    <input  className='search' placeholder='Search'value= {searchText} onChange={(e) => setSearchText(e.target.value)}/>
                </div>

                <div>

                    <table>
                        <thead className='heading'>
                            <tr>
                                <th>Profile Picture</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Date of Birth</th>
                                <th>Gender</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filtered.map((facebook) => (
                                    <tr key={facebook.id}>
                                        <td><img src={facebook.profile_picture} alt="img"></img></td>
                                        <td>{facebook.First_name}</td>
                                        <td>{facebook.Last_name}</td>
                                        <td>{new Date(facebook.Date_of_Birth).toDateString()}</td>
                                        <td>{facebook.Gender}</td>
                                        <td>{facebook.Country}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    )
}

export default FacebookDetail