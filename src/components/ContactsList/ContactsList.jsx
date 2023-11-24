import { ListItem } from "components/ListItem/ListItem";
import { Loader } from "components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectError, selectFilteredContacts, selectIsLoading } from "redux/contacts/selectors";
export const ContactsList = () => {
    const filteredContacts = useSelector(selectFilteredContacts)
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    return (
        <ul>
          {isLoading && !error ? (
            <Loader />
          ) : filteredContacts.length === 0 && !error ? (
            <p>The Phonebook is empty. Add your first contact.</p>
          ) : (
            filteredContacts.map(({ id, name, number }) => (
                <ListItem key={id} name={name} number={number} id={id}></ListItem>
            ))
          )}
        </ul>
      );
    }
