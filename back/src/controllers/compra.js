const con = require('../dao/connect')
const Compra = require('../models/compra')

const teste = (req, res) => {
    res.json("Inventário Respondendo").end()
}

const criar = (req, res) => {
    let compra = new Compra(req.body)
    con.query(compra.create(), (err, result) => {
        if (err == null) {
            res.status(201).end() // Alterado para status 201 (Created)
        } else {
            console.log(err) // Movido para dentro do bloco else
            res.status(500).json(err).end()
        }
    })
}

const listar = (req, res) => {
    let compra = new Compra(req.params)
    con.query(compra.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
            else{
                res.json(err).status(400).end()
            }
    })
}

const alterar = (req, res) => {
    let compra = new Compra(req.body)
    con.query(compra.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let compra = new Compra(req.params)
    con.query(compra.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    teste,
    criar,
    listar,
    alterar,
    excluir
}