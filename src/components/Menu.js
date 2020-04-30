import React,{useEffect, useState} from 'react';


const table = [
  {
       body: [
      "Burrito 130",
      "Tacos (3) 125",
      "Burrito Bowl 130",
      "Quesadilla 125",
      "Nachos 125"
      ],
      number: 1,
      name: "Choose your style:"
  },
  {
      body: [
      "Roasted Chicken",
      "Beef (+15,-)",
      "Carnoso Beef",
      "Pulled Pork",
      "Vegetarian",
      "White rice",
      "Black beans"
      ],
      number: 2,
      name: "Choose your filling"
  },
  {
      body: [
      "Pico de Gallo",
      "Lettuce",
      "Cheese",
      "Cream chipotle"
      ],
      number: 3,
      name: "Choose your toppings"
  },
  {
      body: [
      "Red salsa (mild)",
      "Green salsa (medium plus)",
      "Chipotle salsa (spicy)",
      "Habanero (super spicy)"
      ],
      number: 4,
      name: "Choose your salsa"
  }
];

export default () => {
  const [transformMenu, setTransformMenu] = useState();

  const onScrollMenu = () => {
    if(window.scrollY > 2100) {
      setTransformMenu(true);
    } else {
      setTransformMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScrollMenu);

    return () => {
      window.removeEventListener("scroll", onScrollMenu);
    }
  })
  return (
    <div className={`menu ${transformMenu ? "menu-transform" : ""}`}>
      <span>Menu</span>
      {
        table.map(t => <div className={`menu-table menu-table-${t.number}`}>
          <div className="menu-table-header">
            <span>{t.number}</span>
            <span>{t.name}</span>
          </div>
          <div className="menu-table-body">
            {t.body.map(c => <span className="menu-table-body-child">{c}</span>)}
          </div>
        </div>)
      }
      <button>Fodora</button>
    </div>
  );
}
