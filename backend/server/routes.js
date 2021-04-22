const routes = require('express').Router();
const user = require('../src/models/User')

routes.get('/User', async (req, res) =>  {
    try{
        const usuarios = await user.find();
        return res.status(200).json(usuarios);
    }
    catch (err){
        console.log(err)
        return res.status(400).json(err);
    }
});

routes.get('/User/:name', async (req, res) => {
    try {        
        const userSchema = await user.findOne({name: req.params.name}).exec();
        return res.status(200).json(userSchema)
    }
    catch(err){
        console.log(err);
        return res.status(400).json(err);
    }   

});

routes.post('/User', async (req, res) => {
    try{
        const {codInterno, name, passWord, email} = req.body;
        const createdUser = await user.create({codInterno, name, passWord, email});
        return res.status(200).json(createdUser);
    }
    catch(err){
        console.log(err);
        return res.status(400).json(err);
    }
});

module.exports = routes;