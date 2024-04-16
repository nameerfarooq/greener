import leaf2 from "../../assets/icons/leaf2.png";
const ListItem = ({ text }) => {
  return (
    <div className="list-item">
      <div className="icon">
        <img src={leaf2} alt="" />
      </div>
      <div className="text-14">{text} </div>
    </div>
  );
};

export default ListItem;
