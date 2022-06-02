export declare class Book {
    title: string;
    author: string;
    alreadyRead: boolean;
    constructor(title: string, author: string, alreadyRead: boolean);
    get Title(): string;
    get Author(): string;
    get AlreadyRead(): boolean;
    set Title(title: string);
    set Author(author: string);
    set AlreadyRead(alreadyRead: boolean);
}
