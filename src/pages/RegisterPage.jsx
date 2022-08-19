import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "redux/auth/authOptions";
import { Form, Label, Input, Btn } from '../components/Form.styled';







export default function RegisterPage() {
const dispatch=useDispatch()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

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
    if (!name||!email||!password) {
    return
  }
    dispatch(registerUser({name,email,password}))
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>RegisterPage</h2>

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
    </div>
  );
}
