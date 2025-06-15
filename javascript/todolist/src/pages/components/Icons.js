import upcoming from "../../images/upcoming.png"
import inbox from "../../images/inbox.png";
import today from "../../images/today.png";
import trash from "../../images/trash.png";
import check from "../../images/check.png";
import edit from "../../images/edit.png";
import hamburger from "../../images/icon-hamburger.svg"
import close from "../../images/close.png"

export default class Icon {
    static getImage = (name) =>{

        switch (name){
            case "upcoming":
                return upcoming;
            case "inbox":
                return inbox;
            case "today":
                return today;
            case "trash":
                return trash;
            case "checkMark":
                return check;
            case "edit":
                return edit;
            case "menu":
                return hamburger;
            case "close":
                return close;
            default: console.log("no Icons!");
            
        }
    } 

}