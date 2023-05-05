// import React from 'react';

import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import './Cards.css'
import LazyLoad from "react-lazyload";



const Cards = () => {
    // eslint-disable-next-line no-unused-vars
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-hunter-serve.vercel.app/chefData')
            .then(res => res.json())
            .then(data => {
                setChefData(data.chefs);
                // console.log(data.chefs); // Logs the fetched data to the console
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <div>
                {chefData.map(chefInfo => (
                    <p key={chefInfo.id}>
                        <div>
                            <Row xs={1} md={2} lg={3} className="g-4 mt-4">
                               <Col>
                                    <Card >
                                        <LazyLoad>
                                             <Card.Img variant="top" src={chefInfo.chef_url} className="image" />
                                        </LazyLoad>

                                       
                                        <Card.Body>
                                            <Card.Title>{chefInfo.name}</Card.Title>
                                            <Card.Text>
                                               <div className="d-flex justify-content-between">
                                               <p>Experience:  {chefInfo.years_of_experience} Years</p>
                                                <p>Number of Recipe: {chefInfo.num_recipes}</p>
                                               </div>
                                                <div className="d-flex justify-content-between">
                                                <p><AiFillLike style={{ fontSize: '2rem', color: 'blue' }} />{chefInfo.likes}</p>
                                               <Link to={`/chefData/${chefInfo.id}`}> <Button className="fw-bold" variant="success" >
                                                View Recipes Button
                                                </Button>
                                                </Link>
                                                </div>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>


                    </p>
                ))}
            </div>



        </div>
    );
};

export default Cards;