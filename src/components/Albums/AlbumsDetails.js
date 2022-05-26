import React, { useState } from 'react'
import { Table } from "react-bootstrap";

const AlbumsDetails = () => {

    const [albumdetails, setAlbumdetails] = useState([])

    return (
        <>

            <h1>albums details</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID  </th>
                        <th>UseId</th>
                        <th>Title</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        albumdetails.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.userId}</td>
                                        <td>{item.title}</td>

                                    </tr>

                                </>
                            )
                        })
                    }


                </tbody>
            </Table>

        </>
    )
}

export default AlbumsDetails