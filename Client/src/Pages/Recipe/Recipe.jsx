// import React from 'react';
import { useEffect, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { AiFillLike } from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import {

    useParams,

} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavSection from "../Shared/NavSection";
import Footer from "../Shared/Footer/Footer";
// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'



const Recipe = () => {
    const [chefData, setChefData] = useState(null);
    const { id } = useParams();
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading data from an API
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    function handleFavoriteClick(index) {
        // setIsFavoriteClicked(true);
        const newDisabledButtons = [...disabledButtons, index];
        setDisabledButtons(newDisabledButtons);
    }



    useEffect(() => {
        fetch('https://chef-recipe-hunter-serve.vercel.app/chefData')
            .then(res => res.json())
            .then(data => {
                setChefData(data.chefs);
            })
            .catch(error => console.log(error))
    }, []);

    if (!chefData) return <p>Loading data...</p>;

    const chef = chefData?.filter(d => d.id.toString() === id);
    console.log(chef);
    if (!chef) return <p>Data not found for ID {id}</p>;

    const notify = () => toast("The recipe is my favorite!");

    return (

        <div>
            <NavSection></NavSection>
            <div>

                {isLoading ? (
                    <div><Spinner></Spinner></div>
                ) : (
                    <div>
                        <div className="d-flex p-5">
                            <div className="ms-5">
                                <img src={chef[0].chef_url} alt="" className="h-100 w-50"/>

                            </div>
                            <div className="">
                                <h1>{chef[0].name}</h1>

                                <h3>Description:</h3>
                                <p>{chef[0].description}</p>

                                <h5>Experience: {chef[0].years_of_experience} Years</h5>
                                <h5>Number of Recipe: {chef[0].num_recipes}</h5>
                                <p><AiFillLike style={{ fontSize: '2rem', color: 'blue' }} />{chef[0].likes}</p>
                            </div>
                        </div>

                       
                        {chef[0].recipes.map((item, index) => (


                            <div key={index}>
                                <Row className="g-4">

                                    <Col>
                                        <Card>

                                            <Card.Body>

                                                <Card.Text>
                                                    <h3>Recipe name:{item.name}</h3>
                                                    <h5>Ingredients:</h5>
                                                    <p><ul>{item.ingredients}</ul></p>
                                                    <h5>Recipe Method:</h5>
                                                    <p>{item.method}</p>
                                                </Card.Text>

                                            </Card.Body>
                                            <Card.Footer className=' d-flex justify-content-between '>
                                                <div>
                                                    <Rating
                                                        placeholderRating={item?.rating}
                                                        readonly
                                                        emptySymbol={<FaRegStar></FaRegStar>}
                                                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                                                        fullSymbol={<FaStar></FaStar>}
                                                    />
                                                    <small className="ms-2">{item?.rating}</small>
                                                </div>
                                                <div>
                                                    <Button
                                                        onClick={() => {
                                                            notify();
                                                            handleFavoriteClick(index);
                                                        }}
                                                        className="fw-bold" variant="success"
                                                        // disabled={isFavoriteClicked}
                                                        disabled={disabledButtons.includes(index)}
                                                    >
                                                        Favorite
                                                    </Button>

                                                </div>
                                            </Card.Footer>
                                        </Card>

                                    </Col>

                                </Row>
                            </div>
                        ))}


                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />

                    </div>
                )}


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Recipe;