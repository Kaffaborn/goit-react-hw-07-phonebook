import axios from 'axios';

export const postContacts = async newContact => {
  const { data } = await axios.post(
    'https://64ec2ba2f9b2b70f2bf9ea93.mockapi.io/contacts',
    newContact
  );

  return data;
};
