import { useId} from "react";
import s from './SearchBox.module.css'
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = ()=>{
  const dispatch=useDispatch();

  const idishki=useId();

  return (
    <div className={s.form}>
    
    <input onChange={(e)=>dispatch(changeFilter(e.target.value))} className={s.input}name="text" id={idishki} placeholder="Search contacts by name"></input>
    </div>
  )
};

export default SearchBox;
