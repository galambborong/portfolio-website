import axios from 'axios';

export const submitFormContent = async (
  name: string,
  email: string,
  message: string
) => {
  const { data } = await axios.post('https://formspree.io/f/xknpkpdy', {
    name,
    email,
    message
  });
  console.log(data, '<<<');
  return data;
};
