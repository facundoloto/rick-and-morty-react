import React from "react";
import { useState, useEffect } from "react";
import { Card, ListGroup, Pagination } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "nes.css/css/nes.min.css";
import "./CardApi.css";

export function CardApi() {
  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const FetchApi = async function FetchApi() {

    if (page => 1 && page <= 42) {
      try {
        setDisabled(true);
        let arr = [];
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const data = await response.json();
        data.results.map((data) => {
          arr.push(data);
        });
        setCharacter(arr);
        setDisabled(false);
      } catch (err) {
        alert(err);
      }
    }

  };

  useEffect(() => { FetchApi() }, [page])

  return (
    <div className="home">
      <div className="container">
        <div className='pagination'>
          <Pagination>
            <Pagination.Prev onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }} disabled={disabled}
            />
            <Pagination.Ellipsis />
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next onClick={() => {
              if (page < 42) {
                setPage(page + 1);
              }
            }
            } disabled={disabled}
            />
          </Pagination>
        </div>
      </div>
      <div className="container-card">
        {
          character.map((data) => {
            return (
              <Card key={`${data.id}`} className="nes-text character is-disabled" >
                <Card.Title className="nes-text ">{`${data.name}`}</Card.Title>
                <Card.Img variant="top" src={`${data.image}`} />
                <Card.Body className="info ">
                  <ListGroup>
                    <ListGroup.Item variant="dark">Gender:{`${data.gender}`}</ListGroup.Item>
                    <ListGroup.Item variant="dark">Type:{`${data.species}`}</ListGroup.Item>
                    <ListGroup.Item variant="dark">Location:{`${data.location.name}`}</ListGroup.Item>
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
    </div>
  );
};
