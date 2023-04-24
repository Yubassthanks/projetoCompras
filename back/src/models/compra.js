class Compra {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.descricao = i.descricao
        this.quantidade = i.quantidade
        this.imagem = i.imagem
        this.valor = i.valor
    }

    create() {
        return `INSERT INTO compra VALUE('${this.id}','${this.nome}','${this.descricao}',${this.quantidade}, '${this.imagem}',${this.valor})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM compra`
        else
            return `SELECT * FROM compra WHERE id = '${this.id}'`
    }

    update() {
        return `UPDATE compra SET nome = '${this.nome}', descricao = '${this.descricao}', valor = ${this.valor} WHERE id = '${this.id}'`
    }

    delete() {
        return `DELETE FROM compra WHERE id = '${this.id}'`
    }
}

module.exports = Compra