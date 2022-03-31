import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TABS } from '../../consts';
import { choosenTabRender } from '../choosen-tab/choosen-tab';


function Tabs(): JSX.Element {
  const [currentTab, setCurrentTab] = useState(1);


  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            TABS.map((el) => (
              <li
                className={`film-nav__item ${el.id === currentTab ? 'film-nav__item--active' : ''}`}
                key={el.id}
                onClick={() => {
                  setCurrentTab(el.id);

                }}
              >
                <Link
                  to={''}
                  className="film-nav__link"
                >
                  {el.name}
                </Link>

              </li>
            ))
          }


        </ul>
      </nav>
      {choosenTabRender(currentTab)}
    </>
  );
}

export default Tabs;
