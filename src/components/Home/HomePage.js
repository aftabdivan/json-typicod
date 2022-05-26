import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Modal, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const [profiles, setProfiles] = useState([]);
    const [albumdetails, setAlbumdetails] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const nav_to_albums = useNavigate()

    useEffect(() => {
        GET_USER_DATA();
    }, []);

    const GET_USER_DATA = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setProfiles(res.data);
    };

    const GET_ALBUMS_DETAILS = async (id) => {
        const responce = await axios.get(
            `https://jsonplaceholder.typicode.com/albums/?userId=${id}`
        );
        setAlbumdetails(responce.data);
        setShow(true);
        localStorage.setItem("id", JSON.stringify(id))
    };

    const SHOW_PHOTOS = async () => {
        nav_to_albums('/albums')
    };

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Show Albums</th>
                    </tr>
                </thead>
                <tbody>
                    {profiles.map((item) => {
                        return (
                            <>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.username}</td>
                                    <td>
                                        <button
                                            onClick={() => GET_ALBUMS_DETAILS(item.id)}
                                            className="btn btn-primary"
                                        >
                                            Show
                                        </button>
                                    </td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>albums details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>UseId</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {albumdetails.map((item) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{item.userId}</td>
                                            <td>{item.title}</td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => SHOW_PHOTOS()}>show photos</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default HomePage;
