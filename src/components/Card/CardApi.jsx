import React from "react";
import { useState, useEffect } from "react";
import { Card, ListGroup, Pagination } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "nes.css/css/nes.min.css";
import "./Card.css";

export function CardApi() {
  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState(1);

  const FetchApi = async function FetchApi(page) {
      try {
        let arr = [];
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const character = await response.json();
        character.results.map((data) => {
          arr.push(data);
        })
       return setCharacter(arr)
      } catch (err) {
        console.log(err);
      }
  };

  useEffect(async () => {
    await FetchApi(page);
  }, []);
  
  return (
    <div className="home">
               <div className="container">
            <div className='pagination' style={{ display: 'block', width: 700, padding: 30 }}>
               <Pagination>
                  <Pagination.Prev onClick={() => {
                     setPage(page - 1);
                  }} />
                  <Pagination.Ellipsis />
                  <Pagination.Item>{page}</Pagination.Item>
                  <Pagination.Ellipsis />
                  <Pagination.Next onClick={() => {
                     setPage(page + 1);
                  }} />
               </Pagination>
            </div>
         </div>
      {
        character.map((data) => {
          return (
            <Card key={`${data.id}`} className="nes-text character is-disabled" >
              <Card.Title className="nes-text ">{`${data.name}`}</Card.Title>
              <Card.Img variant="top" src={`${data.image}`} />
              <Card.Body className="info nes-text">
                <ListGroup className="list-group-flush nes-text">
                  <ListGroup.Item>{`${data.gender}`}</ListGroup.Item>
                  <ListGroup.Item>{`${data.species}`}</ListGroup.Item>
                  <ListGroup.Item>{`${data.location.name}`}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
              <Card.Footer>
                {
                  (() => {

                    if (data.status === "Alive") {
                      return (
                        <small className="nes-text is-success">alive</small>
                      )
                    }

                    else if (data.status === "Dead") {
                      return (
                        <small className="nes-text is-error">dead</small>
                      )
                    }

                    else {
                      return (
                        <small className="nes-text is-disabled">unknow</small>
                      )
                    }
                  })()//this run the function anonymous of up
                }
              </Card.Footer>
            </Card>
          )
        })
      };
    </div>
  );
};
