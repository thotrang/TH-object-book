export class Book{

    title: string;
    author: string;
    alreadyRead: boolean;

    constructor(title:string,author:string,alreadyRead: boolean,){
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
    get Title(){
        return this.title;
    }
    get Author(){
        return this.author;
    }
    get AlreadyRead(){
        return this.alreadyRead;
    }
    set Title(title){
        this.title=title;
    }
    set Author(author){
        this.author=author;
    }
    set AlreadyRead(alreadyRead){
        this.alreadyRead=alreadyRead;
    }
}