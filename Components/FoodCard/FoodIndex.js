import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FoodData from './FoodData';
import MenuBar from './MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style.scss'
const value = [...new Set(FoodData.map((ele) => {
    return ele.id;
}))]

export default function FoodIndex(props) {

    // console.log(value)
    return (
        <>
            <div className='mt-5 d-flex flex-row p-2 bd-highlight container-fluid col-5'>

                <div className>


                    {
                        props.item.map((ele) => {
                            return (
                                <div >
                                    <div className='mt-5'>
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
                    }
                </div>
            </div>
        </>
    )

}
