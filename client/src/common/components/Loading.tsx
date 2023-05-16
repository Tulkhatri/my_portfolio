import { useState } from 'react';
// import loadingImage from '../../assets/images/loding-travel.gif'
const [loading, setLoading] = useState('')
// const Loading: any = ({ loading, setLoading }) => {//kun page ma loading dekhaune ho teha bata props pathaune ahile  yeha yetikai gareko xa
const Loading: any = () => {
    return (
        loading && <div className="loading">
            {/* <img src={loadingImage} alt='Loading...' /> */}
            <div>Loading...</div>
        </div>

    )
}
export default Loading;
