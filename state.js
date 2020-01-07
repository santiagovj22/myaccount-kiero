const mysqlConnection = require('./database');

function change(){

   const  {respuestas, estado} = req.body;
   let state = req.body,estado;
   mysqlConnection.query('UPDATE usuarios SET ? WHERE id_usuario = ?' , 
    [respuestas,estado], (err,req,res ) => {
        try{ 
        if(state !== 0){
            let change = req.params.estado;
            if(!err){
                res.send({message:change})
            } 
        }
    } catch (e){
        return console.log(err);
    }
    }
   );
};



module.exports = change;