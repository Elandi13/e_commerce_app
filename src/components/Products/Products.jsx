import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles'

const products  = [
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: "https://media.cntraveler.com/photos/603e8e5eb3c7f5651f698239/16:9/w_2560%2Cc_limit/BestRunningSneakers-2021-Hoka-Lede.jpg"},
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$10', image:'https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg'}
]


const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>

    </main>
    )   

}

export default Products;