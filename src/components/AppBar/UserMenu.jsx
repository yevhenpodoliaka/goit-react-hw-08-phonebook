import { useSelector } from "react-redux";
import { getUserEmail } from "redux/auth/authSelector";
import { useDispatch } from "react-redux";
import { logOutUser } from "redux/auth/authOptions";
export default function UserMenu() {
  const dispatch=useDispatch()
  const email = useSelector(getUserEmail)

    return (
      <>
        <div >
          <img src='' alt="" width="32"  />
          <span >welcome , {email}</span>
          <button
            type="button"
            onClick={() => { dispatch(logOutUser()) }}
          >
           LogOut
          </button>
        </div>
      </>
    );
}