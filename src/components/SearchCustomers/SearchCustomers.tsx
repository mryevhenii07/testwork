import { FC } from 'react';
import s from './SearchCustomers.module.css';
import SearchImg from '../../assets/images/search.png';
interface Props {
  value: string;
  setValue: (str: string) => void;
}

const SearchCustomers: FC<Props> = ({ value, setValue }) => {
  return (
    <div className={s.wrap}>
      <img src={SearchImg} alt="img" width={18} />
      <input
        type="text"
        name=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="search"
      />
    </div>
  );
};

export default SearchCustomers;
