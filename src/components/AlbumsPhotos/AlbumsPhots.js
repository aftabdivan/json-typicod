import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AlbumsPhots = () => {
    const [albumDetails, setAlbumDetails] = useState([]);
    const back = useNavigate();

    useEffect(() => {
        GET_ALBUMS_DETAILS();
    }, []);

    const GET_ALBUMS_DETAILS = async () => {
        const albumsid = localStorage.getItem("id");
        const resp = await axios.get(
            `https://jsonplaceholder.typicode.com/photos/?albumId=${albumsid}`
        );
        console.log(resp.data);
        setAlbumDetails(resp.data);
    };
    const back_to_home = () => {
        back("/");
        localStorage.clear()
    };
    return (
        <>
            <Button className="btn btn-primary" onClick={back_to_home}>
                Back
            </Button>
            <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-between", marginTop: "20px" }} className="card-wrapper" >

                {albumDetails.map((item) => {
                    return (
                        <>
                            <Card style={{ flex: "0 0 24%", maxWidth: "24%", marginBottom: "20px" }}>                                <Card.Img variant="top" src={item.url} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default AlbumsPhots;
