import { FC } from 'react';
import CustomersItem from '../CustomersItem/CustomersItem';
import s from './CastomersList.module.css';
import users from '../../client/customersAll.json';

const categories = ['Customer Name', 'Company', 'Phone Number', 'Email', 'Country', 'Status'];
interface Props {
  value: string;
}

const CustomersList: FC<Props> = ({ value }) => {
  const filterUsers = users.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
  return (
    <div className={s.wrap}>
      <ul className={s.categoriesList}>
        {categories.map((category, index) => (
          <li className={s.categoriesItem} key={index}>
            {category}
          </li>
        ))}
      </ul>

      <ul className={s.wrapCusItem}>
        {filterUsers.map((user) => (
          <CustomersItem key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

export default CustomersList;
