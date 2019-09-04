const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message :'Handling GET request to /products'
    });
});

router.post('/',(req, res, next)=>{
    const product={
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message :'Handling POST request to /products',
        createdProduct: product
    });
});

router.get('/:productID',(req, res, next)=>{
    const productID = req.params.productID;
    if(productID==='021'){
    res.status(200).json({
        message :'You passed the correct date'
    });
    }
    else{
        res.status(200).json({
            message:'You passed a date'
        })
    }
});

router.patch('/:productID',(req, res, next)=>{
    res.status(200).json({
        message :'Updating product'
    });
});

router.delete('/:productID',(req, res, next)=>{
    res.status(200).json({
        message :'deleting product'
    });
});

module.exports = router;