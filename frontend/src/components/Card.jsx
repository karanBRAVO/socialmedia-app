const card_width = 30;
const card_height = 300;
const card_desc_height = 80;

const Card = () => {
  return (
    <>
      <div style={{ margin: "5px" }}>
        <div
          style={{
            background: "black",
            width: `${card_width}vw`,
            height: `${card_height}px`,
          }}
        >
          <h2 style={{ color: "blue" }}>Contains Images/Gifs/Videos</h2>
        </div>
        <div
          style={{
            background: "gray",
            width: `${card_width}vw`,
            height: `${card_desc_height}px`,
          }}
        >
          <h2 style={{ color: "black" }}>Contains Buttons/description</h2>
        </div>
      </div>
    </>
  );
};

export default Card;
