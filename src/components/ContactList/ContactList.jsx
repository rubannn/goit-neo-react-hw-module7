import styles from './ContactList.module.css';
import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";
import { selectFilteredContacts, selectLoading } from '../../redux/contactsSlice';

export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectLoading);

    return (
        <>
        <ul className={styles.container}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact {...contact} />
                </li>
            ))}
            </ul>
            {isLoading && <div>Loading contacts...</div>}
        </>
    );
}
