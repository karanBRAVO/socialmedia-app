function Button({ imgSrc, text, handleClick }) {
  return (
    <>
      <button
        className="bg-black m-4 border-2 border-black rounded-md flex flex-row items-center justify-center p-1"
        onClick={handleClick}
      >
        <div className="p-1">
          <img src={imgSrc} alt="Btn-Image" />
        </div>
        <div className="p-1">
          <span className="text-white">{text}</span>
        </div>
      </button>
    </>
  );
}

export default Button;
