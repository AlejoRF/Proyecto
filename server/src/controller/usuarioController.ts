import {Request , Response} from 'express';

import database from '../database';

class UsuarioController{

    //listar todos los usuarios
    public async list(req: Request, res: Response){
      await database.query('SELECT * FROM usuario', function(err,result, fields){
        if(err)throw err;
        res.json(result);
      });
      
    }
    //Listado por nombre
    public async getOne(req:Request, res: Response): Promise<void>{
        const { nombre } = req.params;
        await database.query('SELECT * FROM usuario WHERE nombre=?', [nombre], function(err,result,fields){
            if(err)throw err;
            res.json(result);
        });       
      
    }
    //Crear-Agregar    
    public async create(req:Request, res: Response): Promise<void>{
        await database.query("INSERT INTO usuario(nombre,apellido,login,clave, estado) VALUES ('"+req.body.nombre+"','"+req.body.apellido+"','"+req.body.login+"','"+req.body.clave+"','"+req.body.estado+"')",function(err,result,fields){
            //if(err)throw err;
            res.json({message: 'Nuevo Usuario Creado'}); 
            //res.json(result);
        });                          
   }

    //Actualizar
    public async update(req:Request, res: Response): Promise<void>{
        const { id } = req.params;
        await database.query('UPDATE usuario set ? where id=?', [req.body,id]);
        res.json({text:'Usuario Actualizado'});
        console.log(req.body);
    }
    
}

const usuarioController =new UsuarioController();
export default usuarioController;