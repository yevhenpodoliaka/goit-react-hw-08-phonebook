import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logInUser } from '../../redux/auth/authOptions';
import { Form, Label, Input, Btn } from '../Form.styled';

export default function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('all form fields must be filled out');
      return;
    }
    dispatch(logInUser({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
   
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Btn type="submit">login</Btn>
      </Form>
  
  );
}
