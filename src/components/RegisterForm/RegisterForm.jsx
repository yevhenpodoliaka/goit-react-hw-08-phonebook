import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelector';
import { registerUser } from '../../redux/auth/authOptions';
import { useState } from 'react';
import { Form, Label, Input, Btn } from '../Form.styled';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    if (!name || !email || !password) {
      toast.error('all form fields must be filled out');
      return;
    }
    dispatch(registerUser({ name, email, password }));

    if (isLoggedIn) {
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        name
        <Input type="text" name="name" value={name} onChange={handleChange} />
      </Label>

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

      <Btn type="submit">to register</Btn>
    </Form>
  );
}
