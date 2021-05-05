import { Avaliacao } from "./Avaliacao"
import { Produto } from "./Produto"

export class Usuario{
    public id:number
    public usuario:string
    public nome: string
    public cnpj: string
    public email:string
    public telefone:string
    public senha:string
    public cep:string
    public bairro:string
    public rua:string
    public numero:string
    public produto:Produto[]
    public avaliacao:Avaliacao[]
}