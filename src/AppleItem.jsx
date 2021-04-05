import './styles/appleItem.scss'

import apple from './images/apple.png'
const AppleItem = props => {
    const { item, eatApple } = props
    return (
        <div className="appleItem">
                <div className="apple"><img src={apple} alt=""/></div>
                <div className="info">
                    <div className="name">红苹果 - {item.id}号</div>
                    <div className="weight">{item.weight}克</div>
                </div>
                <div className="btn-div">
                    <button onClick={() => eatApple(item.id)}> 吃掉 </button>
                </div>
            </div>
    )
}
export default AppleItem