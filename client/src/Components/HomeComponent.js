import React, { Component } from 'react';
import '../App.css';
import { Container} from 'reactstrap';


function Home() {
    return (
        <>
            <div>
                <Container>
                    <h1>Welcome to Certichain</h1>
                    <div>
                        <img src="https://images.unsplash.com/photo-1559588501-59a118c47e59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
                    </div>
                </Container>
            </div>
        </>
    );
}


export default Home;
