import { observer } from 'mobx-react'
import AppleItem from './AppleItem'

import './styles/appleBasket.scss'

const AppleBasket = observer(
    props => {
        const { list, current, eated, pickApple, picking, eatApple } = props.store
        return (
            <div className="appleBusket">
                    <div className="title">苹果篮子</div>
    
                    <div className="stats">
                        <div className="section">
                            <div className="head">当前</div>
                            <div className="content">{current.num}个苹果，{current.total}克
                            </div>
                        </div>
                        <div className="section">
                            <div className="head">已吃掉</div>
                            <div className="content">{eated.num}个苹果，{eated.total}克</div>
                        </div>
                    </div>
    
                    <div className="appleList">
                        {
                            list.length ?
                            list.map(v => !v.eat ? <AppleItem key={v.id} item={v} eatApple={eatApple} /> : null ) :
                            <div className="empty-tip" key="empty">苹果篮子空空如也</div>
                        }
                    </div>
    
                    <div className="btn-div">
                        <button className={picking ? 'disabled' : ''} onClick={pickApple} >{picking ? '正在采摘...' : '摘苹果'}</button>
                    </div>
                </div>
        )
    }
)

export default AppleBasket