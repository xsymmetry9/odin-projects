import {format, isAfter} from "date-fns"

export default class Task{
    constructor(name, dueDate, isCompleted = false)
    {
        this.name = name;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
    }
    getName = () =>{
        return this.name;
    }
    setName = (name) =>{
        this.name = name;
    }
    getStatus = () =>{
        return this.isCompleted;
    }
    setStatus = (isDone) =>{
        this.isCompleted = isDone;
    }
    getDate = () =>{
        let newDate = format(new Date(this.dueDate), "PP");
        return newDate;
    }
    setDate = (date) =>{
        this.dueDate = date;
    }
    getNewDate = () =>{
        let year = new Date(this.dueDate).getFullYear();
        let month = new Date(this.dueDate).getMonth();
        let day = new Date(this.dueDate).getDate();
        return `${year}-${month}-${day}`;
    }
    isToday = () =>{
        const today = new Date();

        if(today.getFullYear() === new Date(this.dueDate).getFullYear() &&
        today.getMonth() === new Date(this.dueDate).getMonth() &&
        today.getDate() === new Date(this.dueDate).getDate())
        {
            return true;
        }
        else{
            return false;
        }
    }

    isAfter = () =>{
        const today = new Date();
        return isAfter(new Date(this.dueDate), today);
    }     
      
}