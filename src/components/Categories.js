import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";

const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const sort = ["популярности", "цене", "алфавиту"];

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedSort, setSelectedSort] = useState(0);
  const [visiblePopup, setVisiblePopup] = useState(false);

  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          {categories.map((cat, index) => (
            <li
              className={selectedCategory === index ? "active" : null}
              onClick={() => setSelectedCategory(index)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
      <ClickAwayListener onClickAway={() => setVisiblePopup(false)}>
        <div className="sort">
          <div className="sort__label">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
              />
            </svg>
            <b>Сортировка по:</b>
            <span onClick={() => setVisiblePopup(!visiblePopup)}>
              {sort[selectedSort]}
            </span>
          </div>
          {visiblePopup ? (
            <div className="sort__popup">
              <ul>
                {sort.map((s, index) => (
                  <li
                    className={index === selectedSort ? "active" : null}
                    onClick={() => {
                      setSelectedSort(index);
                      setVisiblePopup(false);
                    }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default Categories;
