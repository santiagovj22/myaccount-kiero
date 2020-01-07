const mysqlConnection = require('../lib/database');

class PostService{ 

 async savePost (req, res)  {
    const {id_publicacion, id_categoria, titulo, precio, descripcion, url_imagen, cantidad, ubicacion, tipo_publicacion} = req.body;
    const data = [id_publicacion, id_categoria, titulo,precio,descripcion, url_imagen, cantidad, ubicacion, tipo_publicacion];
    const insertPost=`INSERT INTO publicaciones(id_publicacion, id_categoria,titulo, precio, descripcion, url_imagen, cantidad, ubicacion, tipo_publicacion) VALUES(?,?,?,?,?,?,?,?,?)`;
    mysqlConnection.query(insertPost,data, (err, results,fields) => {
        if(err) {
            return res.send(err).status(400);
        } else {
            res.send({message:'post has been save'}).status(200);
        }
    } 
    );
}

  async getData (req,res)  {
    mysqlConnection.query('SELECT * FROM publicaciones', (err,rows) => {
        if(err) throw err
        res.json(rows).status(200);
        }
    );
}

async findById (req,res) {
    const id = req.params.id_publicacion;
    const readQuery = 'SELECT * FROM publicaciones WHERE id_publicacion = ?';
    mysqlConnection.query(readQuery ,
        [id], (err, rows) => {
            if(!err) {
                res.json(rows).status(200);
            } else {
                res.send(err).status(400);
            }
        });
}

  async updatePost (req,res) {
    const id = req.params.id_publicacion;
     mysqlConnection.query('UPDATE publicaciones SET ? WHERE id_publicacion = ?' , 
     [req.body,id] ,(error, result) => {
         if(error){
             return res.send(error).status(400);
         } else {
             res.send({message:'post has been updated'}).status(200);
         }
     } );
 }

  async deletePost(req,res)  {
     const id = req.params.id_publicacion;
     mysqlConnection.query('DELETE FROM publicaciones WHERE id_publicacion = ?' ,
     id, (error, result) => {
         if(error) {
             return res.send(error).status(400);
         } else {
             res.send({message:'post has been delete'});
         }
     });
 };
}

module.exports = new PostService();