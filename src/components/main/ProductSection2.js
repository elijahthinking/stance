import listDate from "../../assets/data/Item.json";
import "./ProductSection.scss";

const ProductSection2 = () => {
  const bestItems = listDate.filter((item) => item.category === "pick");
  return (
    <section id="paceypick">
      <h2>PACEY PICK</h2>
      <ul>
        {bestItems.map((item, idx) => (
          <li key={idx}>
            <img
              src={require(`../../assets/images/Shoes/${item.image}`)}
              alt={item.sub1}
            />
            <div className="best-txt">
              <h2>{item.id}</h2>
              <p>{item.title}</p>
              <p>{item.sub1}</p>
              <div className="price">
                <p>{item.price1}</p>
                <p>{item.price2}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductSection2;
