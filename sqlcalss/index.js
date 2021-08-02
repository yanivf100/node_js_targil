const express = require('express')
const path = require('path')
const acc_repo = require('./acc-repo')
const port = 8080
const app = express()


// for POST json 
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/accounts', async(req, res) => {
    const accounts = await acc_repo.getAllAccounts(); 
    res.status(200).json({ accounts })
});

app.get('/accounts/:acc_id', async(req, res) => {
    const acc_id = req.params.acc_id
    const accounts = await acc_repo.getAccountsByOwnerId(acc_id); 
    res.status(200).json({ accounts })
    console.log(acc_id);
});

app.delete('/accounts/:acc_id', async(req, res) => {
    try
    {
        const acc_id = req.params.acc_id
        const result = await acc_repo.deleteAccount(acc_id)
        res.status(200).json({
            res: 'success',
            url: `localhost:8080/accounts/${acc.ID}`,
            result
        })
    }
    catch(e) {
        res.status(400).send({
            status: 'fail',
            message: e.message
        })
    }
});

app.put('/accounts/:acc_id', async(req, res) => {
    try
    {
        const acc_id = req.params.acc_id
        acc = req.body
        const result = await acc_repo.updateAccount(acc, acc_id)
        res.status(201).json({
            res: 'success',
            url: `localhost:8080/accounts/${acc.ID}`,
            result
        })
    }
    catch(e) {
        res.status(400).send({
            status: 'fail',
            message: e.message
        })
    }
});

app.post('/accounts', async (req, res) => {
    try
    {
        acc = req.body
        const result = await acc_repo.addAccount(acc)
        res.status(201).json({
            res: 'success',
            url: `localhost:8080/accounts/${result[0]}`,
            result
        })
    }
    catch(e) {
        res.status(400).send({
            status: 'fail',
            message: e.message
        })
    }


})

app.listen(port, () => console.log(`Listening to port ${port}`));