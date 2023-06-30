import { Link } from 'react-router-dom';
import './Item.css';


const Item = ({id, title, img, price, stock}) => {

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {title}
                </h2>
            </header>
            <picture>
                <img src={img} alt={title} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Price: ${price} USD
                </p>
                <p className='Info'>
                    Available stock: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link className='Option'>See more</Link>
            </footer>
        </article>
    )
};

export default Item;