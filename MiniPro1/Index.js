import React from 'react'
// import { Card } from '../MiniPro1/Card'
import ItemCard from './ItemCard';
import CardData from './CardData';

function myFun(val) {
    return (
        <>
            <div className='cards'>
                <ItemCard

                    key={val.id}
                    name={val.name}
                    desc={val.des}
                    img={val.img} />
            </div>
        </>

    )
}
const Index = () => {

    return (
        <>

            {CardData.map(myFun)}

        </>
    )

}

export default Index
