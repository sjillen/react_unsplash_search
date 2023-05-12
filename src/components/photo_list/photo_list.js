import React from "react";
import Container from "react-bootstrap/Container";
import "./photo_list.css";

const PhotoList = ({ list }) => {
  return (
    <Container fluid className="list-container">
      {list?.length
        ? list.map((item) => {
            return (
              <div
                key={item.photoId}
                className="list-item"
                style={{
                  backgroundImage: `url(${item.url})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
              ></div>
            );
          })
        : null}
    </Container>
  );
};

export default PhotoList;
