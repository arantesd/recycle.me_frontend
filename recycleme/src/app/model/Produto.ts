import { Usuario } from "./Usuario"

export class Produto{
    public id:number
    public nome:string
    public preco:number
    public quantidade:number
    public peso:number
    public tipo_prod:string
    public foto:string
    public categoria:string 
    public usuario:Usuario
}