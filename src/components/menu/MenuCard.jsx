function MenuCard(props) {
  const priceAndTitleStyle = "text-lg font-medium text-offblack";

  return (
    <article className="flex flex-col gap-2 bg-white rounded-lg shadow-md">
      
      <div className="flex flex-col gap-1">
        <h3 className={priceAndTitleStyle}>{props.itemTitle}</h3>
        <p className="text-sm font-light text-offblack">
          {props.itemDescription}
        </p>
      </div>
      <span className={priceAndTitleStyle}>{props.itemPrice}</span>
    </article>
  );
}

export default MenuCard;
