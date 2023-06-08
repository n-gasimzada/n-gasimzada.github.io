import React from 'react'
import Header from "../Header"
import Footer from "../Footer"

import axios from 'axios'
import ShopItems from '../ShopItems';


function Shop() {
    const [items, setItems] = React.useState([]);
    const [selectCategory, setSelectCategory] = React.useState(0)
    const category = ['Все', 'Пальто', 'Свитшоты', 'Кардиганы', 'Толстовки'];
    
    React.useEffect(() => {
        axios.get("http://localhost:3000/closes.json").then((res) => {
            setItems(res.data)
        })
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    <h2 className="content__title">Магазин</h2>
                    <div className="content-nav-list">
                        <p className="content-nav-list__item">Главная</p>
                        <p className="activate content-nav-list__item3">Магазин</p>
                    </div>
                </div>

                <div className="shop__category">
                    {category.map((obj, i) =>
                        <button 
                        key={i}
                        onClick={() => setSelectCategory(i)} 
                        className={selectCategory === i ? "shop__category-button active-shop" : "shop__category-button"}>{obj}</button>
                    )}
                </div>

                <div className="shop__items">
                    <h4 className="shop__items-title">Показано: 9 из 12 товаров</h4>
                    <ShopItems items={items} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shop