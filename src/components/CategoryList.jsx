import Category from './Category';
import '../css/categoryList.css'

const CategoryList = (props) => {
  const { title, list } = props;

  return (
    <div>
      <h2>{title}</h2>
      <div className="category-list">
        {list.map((category, index) => (
          <Category key={index} title={category.title}  />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;














