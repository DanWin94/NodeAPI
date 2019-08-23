const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message :'Handling GET request to /calender'
    });
});

router.post('/',(req, res, next)=>{
    res.status(200).json({
        message :'Handling POST request to /calender'
    });
});

router.get('/:calenderDate',(req, res, next)=>{
    const calendarDate = req.params.calenderDate;
    if(calendarDate==='02122019'){
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

module.exports = router;