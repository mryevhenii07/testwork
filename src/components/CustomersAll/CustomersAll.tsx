import { useState, FC } from 'react';
import CustomersList from '../CustomersList/CustomersList';
import SearchCustomers from '../SearchCustomers/SearchCustomers';
import s from './CustomersAll.module.css';

const CustomersAll: FC = () => {
  const [value, setValue] = useState('');
  
  return (
    <div className={s.wrapperCustomersAll}>
      <div className={s.wrapAllSearch}>
        <div>
          <h2 className={s.titleAllCustomers}>All Customers</h2>
          <p className={s.titleActiveMembers}>Active Members</p>
        </div>
        <div>
          <SearchCustomers
            setValue={setValue}
            value={value}
          />
        </div>
      </div>
      <CustomersList value={value}  />
    </div>
  );
};

export default CustomersAll;
