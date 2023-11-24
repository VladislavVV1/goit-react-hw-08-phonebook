import { useEffect } from 'react'
import { Section } from "../components/Section/section"
import { PhoneBookForm } from "../components/PhonebookForm/PhonebookForm";
import { ContactsList } from "../components/ContactsList/ContactsList";
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';

export const Contacts = () => {
    const contacts = useSelector(selectContacts)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchContacts())
    }, [dispatch])
    return (
        <>
        <Section title={'Phonebook'}> 
          <PhoneBookForm></PhoneBookForm>
        </Section>
      <br/>
        <Filter></Filter>
      
      {contacts[0]&& 
        <Section title={'Contacts'}> 
          <ContactsList></ContactsList>
        </Section>}
        </>
      )
}
