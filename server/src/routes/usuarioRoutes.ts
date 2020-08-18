import  { Router } from 'express';

import  usuarioController  from '../controller/usuarioController'

class UsuarioRoutes{
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', usuarioController.list);
        this.router.get('/:nombre', usuarioController.getOne);
        this.router.post('/',usuarioController.create);
        this.router.put('/:id',usuarioController.update);
    } 
    
}
const usuarioRoutes = new UsuarioRoutes();

export default usuarioRoutes.router;