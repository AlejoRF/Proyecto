"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    //listar todos los usuarios
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM usuario', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    //Listado por nombre
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            yield database_1.default.query('SELECT * FROM usuario WHERE nombre=?', [nombre], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    //Crear-Agregar    
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO usuario(nombre,apellido,login,clave, estado) VALUES ('" + req.body.nombre + "','" + req.body.apellido + "','" + req.body.login + "','" + req.body.clave + "','" + req.body.estado + "')", function (err, result, fields) {
                //if(err)throw err;
                res.json({ message: 'Nuevo Usuario Creado' });
                //res.json(result);
            });
        });
    }
    //Actualizar
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE usuario set ? where id=?', [req.body, id]);
            res.json({ text: 'Usuario Actualizado' });
            console.log(req.body);
        });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
