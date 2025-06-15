import {format} from "date-fns"

export default class Note{
    constructor(name, addedDate = format (new Date(), 'MM/dd/yyyy'))
    {
        this.name = name;
        this.date = addedDate;
    }
    getNote = () =>{
        return this.name;
    }
    setNote = (name) =>{
        this.name = name;
    }
}