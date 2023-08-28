import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios(
    'https://64ec2ba2f9b2b70f2bf9ea93.mockapi.io/contacts'
  );
  return data;
};
