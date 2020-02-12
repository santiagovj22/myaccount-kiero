const mysqlConnection = require('../lib/database');

class AccountService {
    async getPersonalData (req,res){
        const id = req.params.id_usuarios;
        mysqlConnection.query('Select * From usuarios WHERE id_usuarios = ?', 
        [id], (err, rows, fields) => {
           if(!err){
                 res.json(rows).status(200);
            } else {
             return res.send(err).status(400);
          }
        });  
    }

    async getData (req,res) {
        mysqlConnection.query('Select * From usuarios', (err,rows) =>{
            if(!err){
                res.json(rows).status(200);
            } else {
                res.send(err).status(400);
            }
        });
    }
    //  async getPersonalByOrders (req,res){
    //      const status = req.params.estado;
    //      mysqlConnection.query('Select * From ordenes WHERE id_usuario = ? AND estado = ?', 
    //         [status], (err,rows)  => {
    //             if(!err){
    //                 res.json(rows).status(200);
    //             } else {
    //                 return res.send(err).status(400);
    //            }
    //         }
    //      );
    //  }
}

module.exports = new AccountService();