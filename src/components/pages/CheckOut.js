import '../css/CheckOut.css'
import { Link } from 'react-router-dom'
import { OrderedState } from '../context/Context'

function CheckOut() {

    const { ordersList: { items, totalCount } } = OrderedState()
    return (
        <section id='checkout__section'>
            <div className='checkout__orders__ctr'>

                <div className='title__edit__wpr'>
                    <h3 className='order__title'>Checkout</h3>
                    <Link to='/' className='clear__btn'>Cancel</Link>
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
                            <div className='ordered__item__price'>
                                <h2 className='ordered__item__price'>$ {item?.totalPrice}</h2>
                            </div>
                        </div>

                    </div>
                })}

                <div className='totalprice__checkoutbtn__wpr'>
                    <div className='totalprice__txt__amt__wpr'>
                        <h3 className='totalprice__txt'>Total</h3>
                        <h3 className='totalprice__amt'>$ {totalCount}</h3>
                    </div>
                    <span to='/checkout' className='checkout__btn'>Pay</span>
                </div>

            </div>
        </section>
    )
}

export default CheckOut