const mysqlConnection = require('../lib/database');

class ProductService {

    async getProductById (req,res) {
        const {id_producto, id_cliente, precio, cantidad, estado, fecha} = req.body;
        [id_producto, id_cliente,precio,cantidad,estado,fecha]
        const id = req.params.id_producto;
        const getQuery = `Select id_product From productos`;
        mysqlConnection(getQuery, [id],  (err, rows) => {
            if(!err){
                res.json(rows).status(200);
            } else {
                res.send({message:err.message});
            }
        });
    }

    async getProducts (req,res){
        mysqlConnection('Select * From productos', (err,rows) => {
            if(err) throw err
                res.json(rows).status(200);
            }
        );
    }
}

module.exports= new ProductService();