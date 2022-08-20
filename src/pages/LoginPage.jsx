import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import useLocalStorage from 'hooks/useLockalStorage';
import { logInUser } from 'redux/auth/authOptions';
import { Form, Label, Input, Btn } from '../components/Form.styled';

export default function LoginPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

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
    <div>
      <h2>login Page</h2>
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
    </div>
  );
}
