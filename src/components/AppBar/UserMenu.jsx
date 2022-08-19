import { useSelector } from "react-redux";
import { getUserEmail } from "redux/auth/authSelector";
import { useDispatch } from "react-redux";
import { logOutUser } from "redux/auth/authOptions";
import avatar from '../../images/avatar.png'
import { UserWrap, LogOutBtn } from './AppBar.styled';



export default function UserMenu() {
  const dispatch=useDispatch()
  const email = useSelector(getUserEmail)

    return (
      <>
        <UserWrap>
          <img src={avatar} alt="user avatar" width="32" />
          <span>welcome , {email}</span>
          <LogOutBtn
            type="button"
            onClick={() => {
              dispatch(logOutUser());
            }}
          >
            LogOut
          </LogOutBtn>
        </UserWrap>
      </>
    );
}