import preloader from "../../../asets/Images/Bean Eater-1s-200px.svg";

const Preloader = (props) => {
  return (
    <div style={{ position: "absolute", margin: "0 auto " }}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
