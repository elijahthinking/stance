import "./BottomBlog.scss";
import listDate from "../../assets/data/Keyword.json";

const BottomBlog = () => {
  return (
    <section id="keyword">
      <h2>#HOT PEACY KEYWORD</h2>
      <ul>
        {listDate.map((item, idx) => (
          <li key={idx}>
            <img
              src={require(`../../assets/images/keyword/${item.image}`)}
              alt={item.title}
            />
            <h2>#{item.title}</h2>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BottomBlog;
