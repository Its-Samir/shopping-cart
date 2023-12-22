function DropdownCartItem(props: {
  title: string;
  quantity: number;
  img: string;
  length: number;
}) {
  return (
    <>
      <div className="dropdownCartItem">
        <img src={props.img} alt={props.title} />
        <div style={{ textAlign: "right" }}>
          <h2>{props.title}</h2>
          <p>Quantity: {props.quantity}</p>
        </div>
      </div>
      {props.length > 1 && <hr className="dropdownCartItemHrLine" />}
    </>
  );
}

export default DropdownCartItem;
