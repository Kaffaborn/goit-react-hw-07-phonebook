import axios from 'axios';

export const deleteContacts = async contactId => {
  const { data } = await axios.delete(
    `https://64ec2ba2f9b2b70f2bf9ea93.mockapi.io/contacts/${contactId}`
  );

  return data;
};
