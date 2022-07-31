import '../css/Orders.css'
import { Link } from 'react-router-dom'
import { OrderedState } from '../context/Context'

function Orders() {

    const { ordersList: { items, totalCount }, dispatch } = OrderedState()

    return (
        <section id='orders__section'>

            <div className='orders__ctr'>

                <div className='title__edit__wpr'>
                    <h3 className='order__title'>My Orders</h3>
                    <span onClick={() => dispatch({ type: 'REMOVE_ALL_ITEMS' })} className='clear__btn'>Clear</span>
                </div>

                <hr />

                {items?.map((item) => {
                    return <div key={item?.id} className='ordered__item__ctr'>

                        <div className='ordered__item__img__name__quantity__wpr'>
                            <div className='ordered__item__img__wpr'>
                                <img className='ordered__item__img' src="https://freepngimg.com/thumb/salad/23962-5-salad-transparent-background.png" alt='' />
                            </div>

                            <div className='ordered__item__name__quantity__wpr'>
                                <h3 className='ordered__item__name'>{item?.item}</h3>
                                <h3 className='ordered__item__quantity'>{item?.quantity}</h3>
                            </div>
                        </div>

                        <div className='ordered__item__count__price__wpr'>
                            <div className='ordered__item__count__wpr'>
                                <button onClick={() => dispatch({ type: 'DEC_ITEM__COUNT', payload: item.id })} className='ordered__item__minus__btn'>-</button>
                                <h3 className='ordered__item__count'>{item.totalItems}</h3>
                                <button onClick={() => dispatch({ type: 'INC_ITEM__COUNT', payload: item.id })} className='ordered__item__plus__btn'>+</button>
                            </div>

                            <div className='ordered__item__price'>
                                <h2 className='ordered__item__price'>$ {item?.totalPrice}</h2>
                                <span onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })} className='remove__item'>x</span>
                            </div>
                        </div>

                    </div>
                })}

                <div className='totalprice__checkoutbtn__wpr'>
                    <div className='totalprice__txt__amt__wpr'>
                        <h3 className='totalprice__txt'>Total</h3>
                        <h3 className='totalprice__amt'>$ {totalCount}</h3>
                    </div>
                    <Link to={totalCount !== "0.00" ? '/checkout' : '#'} className={`checkout__btn ${totalCount === "0.00" && 'checkout__disable'}`}>Checkout</Link>
                </div>

            </div>

        </section>
    )
}

export default Orders