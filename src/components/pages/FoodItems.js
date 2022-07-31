import FilterListIcon from '@mui/icons-material/FilterList';
import {Link} from 'react-router-dom'
import foodMenu from '../../Data/foodMenu.json'
import star from '../../asserts/icons/star.png'
import heart from '../../asserts/icons/heart.png'
import { OrderedState } from '../context/Context'
import '../css/FoodItems.css'

function Fooditems() {
    const { ordersList: { items, totalCount }, dispatch } = OrderedState()

    const bgColors = ['#FFE3A9','#CDF0EA','#F47C7C','#6E85B7','#8CC0DE','#FFE69A','#A2B38B','#D18CE0']
    return (
        <section id='fooditem__section'>
            <div className='filter__ctr'>
                <span className='filter__icn__txt__wpr'><FilterListIcon fontSize="small" />Filter</span>
            </div>

            <div className='sortby__ctr'>
                <span className='sortby__txt'>Sorted by :</span><span className='recommend__txt'>Recommended</span>
            </div>

            <div className='menu__ctr'>
                {foodMenu?.map((item,id) => {
                    return <div key={id} style={{backgroundColor:`${bgColors[item.id-1]}`,}} onClick={() => dispatch({ type: 'ADD_ITEM', payload: item.id })} className='item__card'>
                        <div className='rating__favorite__ctr'>
                            <span className='rating'><img className='rating__icn' src={star} alt='star' />{item?.rating}</span>
                            <span className='heart'><img className='heart__icn' src={heart} alt='heart' /></span>
                        </div>
                        <div className='img__wpr'>
                            <img className='item__img' src={item?.image} alt='fooditems' />
                        </div>
                        <div className='item__name__quantity__wpr'><span className='item__name'>{item?.item}</span><span style={{color:`${bgColors[item.id-1]}`,}} className='item__quantity'>{item?.quantity}</span></div>
                        <span className='item__price'>$ {item?.price}</span>
                    </div>
                })}
            </div>

            <div className='fooditem__orders__ctr'>

                <div className='title__edit__wpr'>
                    <h3 className='order__title'>My Orders</h3>
                    <span onClick={() => dispatch({type:'REMOVE_ALL_ITEMS'})} className='clear__btn'>Clear</span>
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
                                <button onClick={() => dispatch({ type:'DEC_ITEM__COUNT', payload: item.id })} className='ordered__item__minus__btn'>-</button>
                                <h3 className='ordered__item__count'>{item.totalItems}</h3>
                                <button onClick={() => dispatch({ type:'INC_ITEM__COUNT', payload: item.id })} className='ordered__item__plus__btn'>+</button>
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

            { items.length >= 1 && <div className='total__orders__wpr'>
                <Link to='/orders'>{items.length} Added</Link>
            </div>}

        </section>
    )
}

export default Fooditems