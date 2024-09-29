import { IconType } from "react-icons";
import { HiBeaker } from "react-icons/hi2";
import { FaMasksTheater } from "react-icons/fa6";
import { FaYinYang } from "react-icons/fa";
import { FaRegLaughSquint } from "react-icons/fa";
import { MdOutlineTempleBuddhist } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiBarracksTent } from "react-icons/gi";


export interface BookType{
    id:string, 
    label:string,
    icon:IconType
}

export const BOOK_TYPES:Array<BookType> = [
    { id: 'fiction', label: 'Fiction' , icon: HiBeaker},
    { id: 'philosophy', label: 'Philosophy' , icon: FaYinYang},
    { id: 'drama', label: "Drama" , icon: FaMasksTheater},
    { id: 'history', label: "History" , icon: MdOutlineTempleBuddhist},
    { id: 'humor', label: "Humor" , icon: FaRegLaughSquint},
    { id: 'adventure', label: "Adventure", icon: GiBarracksTent },
    { id: 'politics', label: "Politics" , icon: FaPeopleRoof}
];