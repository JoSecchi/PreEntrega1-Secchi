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
                    Price: ${price}
                </p>
                <p className='Info'>
                    Available stock: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <button className='Option'>See more</button>
            </footer>
        </article>
    )
};

export default Item;