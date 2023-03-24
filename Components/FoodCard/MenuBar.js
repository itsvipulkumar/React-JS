import { Button } from '@mui/material'
import React, { useState } from 'react'
import FoodData from './FoodData';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FoodIndex from './FoodIndex';

const MenuBar = () => {
    const [item, setItem] = useState(FoodData);

    const clickEvent = (category) => {
        const filterdItem = FoodData.filter((ele) => {
            return ele.type == category;
        })
        setItem(filterdItem)
    }
    return (
        <>
            <nav className='navs'>
                <div>
                    <Button onClick={() => clickEvent("hot")} >HOT</Button>
                    <Button onClick={() => clickEvent("cold")}>Cold</Button>
                    <Button onClick={() => clickEvent("fastfood")}>Pizza</Button>
                    <Button onClick={() => clickEvent("combo")}>Combo</Button>

                </div>


            </nav>
            <FoodIndex item={item} />

            {/* {
                item.map((ele) => {
                    return (
                        <div >
                            <div>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={ele.img}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {ele.Name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {ele.desc}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </div>
                    )
                })
            } */}
        </>
    )
}
export default MenuBar
