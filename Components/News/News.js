import React from 'react'
import Newsitem from '../../NewsItem'
import Data from './SampleData'
import './News.css'
function News() {

    return (

        Data.map((element) => {
            return (
                <div className="grid_containter">
                    <Newsitem desc={element.description} Imgurl={element.urlToImage} name={element.author} heading={element.title} url={element.url} time={element.publishedAt} />
                </div>

                // <p>{element.title}</p>

            )
        }
        )

    )
}

export default News
