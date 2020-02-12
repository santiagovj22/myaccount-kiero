const mysqlConnection = require("../lib/database");

 class QuestionService { 

     async save (req,res)  {

        const {pregunta, respuesta, estado} = req.body;
        const preguntar = [pregunta, respuesta, estado];
        
        const insertQuestion = `INSERT INTO preguntas(pregunta, respuesta, estado) VALUES (?,?,?)`;
        mysqlConnection.query(insertQuestion,preguntar, (err, results, fields) => {
            if(!err) {
                res.send({message:'Add question succesfull'}).status(200);
            } else {
                return res.send(err);
            }
        });
    };
    
   async find (req,res)  {
        mysqlConnection.query('SELECT * FROM preguntas', (err,rows) => {
            if(err) throw err;
            res.json(rows).status(200);
        });
    }

    async findByIdQuestion (req,res) {
        const id = req.params.id_cliente;
        mysqlConnection.query('Select pregunta From preguntas WHERE id_cliente = ?',
            [id], (err,rows) => {
                if(err){
                    res.send(err).status(400);
                } else {
                    res.send(rows).status(200);
                }
            }
        );
    }

    async update(req,res)  {
        const id = req.params.id_cliente;
        mysqlConnection.query('UPDATE preguntas SET ? WHERE id_cliente = ?',
            [req.body,id], (err, result) => {
                if (!err){
                    res.send({message:'Question update succesfully'}).status(200);
                } else{
                    res.send(err).status(400);
                }
            }    
        );
    };

     async delete (req,res)  {
        const id = req.params.id_cliente;
        mysqlConnection.query('DELETE FROM preguntas WHERE id_cliente = ?' , id ,(error,result) => {
            if (error){
                console.error(err.message);
            } else {
                res.send({message:'Question Delete succesfully'});
            }
        });
    };
}

module.exports = new QuestionService();