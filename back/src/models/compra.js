class Compra {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.descricao = i.descricao
        this.quantidade = i.quantidade
        this.data = i.data
        this.imagem = i.imagem
        this.valor = i.valor
    }

    create() {
        return `INSERT INTO compra VALUES('${this.id}','${this.nome}','${this.descricao}',${this.quantidade}, '${this.data}', '${this.imagem}', ${this.valor})`;
    }
    

    read() {
        if (this.id == undefined)
            return `SELECT * FROM compra`
        else
            return `SELECT * FROM compra WHERE id = '${this.id}'`
    }

    update() {
        return `UPDATE compra SET nome = '${this.nome}', descricao = '${this.descricao}', quantidade = ${this.quantidade}, data = '${this.data}', imagem = '${this.imagem}', valor = ${this.valor} WHERE id = '${this.id}'`;
    }    
    delete() {
        return `DELETE FROM compra WHERE id = '${this.id}'`
    }
}

module.exports = Compra