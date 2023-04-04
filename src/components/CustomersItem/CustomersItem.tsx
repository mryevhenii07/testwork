import { FC } from 'react';
import s from './CustomersItem.module.css';

import { MyCustomers } from '../../types/interface';
interface Props extends MyCustomers {}

const CustomersItem: FC<Props> = ({ name, company, phoneNumber, email, country, status }) => {
  return (
    <li className={s.items}>
      <div className={s.item}>{name}</div>
      <div className={s.item}>{company}</div>
      <div className={s.item}>{phoneNumber}</div>
      <div className={s.item}>{email}</div>
      <div className={s.item}>{country}</div>
      <div className={status === 'Inactive' ? `${s.inactive}` : `${s.active}`}> {status}</div>
    </li>
  );
};

export default CustomersItem;

// const items = [
//   {
//     id: 1,
//     name: 'Customer Name',
//     company: 'Microsoft',
//     phoneNumber: '(225) 555-0118',
//     email: 'jane@microsoft.com',
//     country: 'United States',
//     status: 'Active',
//   },
//   {
//     id: 2,
//     name: 'Floyd Miles',
//     company: 'Yahoo',
//     phoneNumber: '(205) 555-0100',
//     email: 'floyd@yahoo.com',
//     country: 'Kiribati',
//     status: 'Inactive',
//   },
//   {
//     id: 3,
//     name: 'Ronald Richards',
//     company: 'Adobe',
//     phoneNumber: '(302) 555-0107',
//     email: 'ronald@adobe.com',
//     country: 'Israel',
//     status: 'Inactive',
//   },
//   {
//     id: 4,
//     name: 'Marvin McKinney',
//     company: 'Tesla',
//     phoneNumber: '(252) 555-0126',
//     email: 'marvin@tesla.com',
//     country: 'United States',
//     status: 'Active',
//   },
//   {
//     id: 5,
//     name: 'Jerome Bell',
//     company: 'Google',
//     phoneNumber: '(629) 555-0129',
//     email: 'jerome@google.com',
//     country: 'Réunion',
//     status: 'Active',
//   },
//   {
//     id: 6,
//     name: 'Kathryn Murphy',
//     company: 'Microsoft',
//     phoneNumber: '(406) 555-0120',
//     email: 'kathryn@microsoft.com',
//     country: 'Curaçao',
//     status: 'Active',
//   },
//   {
//     id: 7,
//     name: 'Jacob Jones',
//     company: 'Yahoo',
//     phoneNumber: '(208) 555-0112',
//     email: 'jacob@yahoo.com',
//     country: 'Brazil',
//     status: 'Active',
//   },
//   {
//     id: 8,
//     name: 'Kristin Watson',
//     company: 'Facebook',
//     phoneNumber: '(704) 555-0127',
//     email: 'kristin@facebook.com',
//     country: 'Åland Islands',
//     status: 'Inactive',
//   },
// ];
