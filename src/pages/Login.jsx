import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addUser, removeUser } from "../redux/dMarketPlaceSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const signIn = dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          }),
        );
        if (user.emailVerified && signIn.payload) navigate("/");
        // setTimeout(() => {
        //   navigate("/");
        // }, 1500);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sign in failed, try again!");
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Log Out Successful!");
        const signOut = dispatch(removeUser());
        if (!signOut.payload) navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        toast.error("Log Out failed!");
      });
  };

  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 py-20">
      <section className="flex w-full items-center justify-center gap-10">
        <section
          onClick={handleGoogleLogin}
          className="flex h-12 w-60 cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-400 text-base tracking-wide duration-300 hover:border-blue-600"
        >
          <IconContext.Provider value={{ size: "32px" }}>
            <FcGoogle />
          </IconContext.Provider>
          <span className="text-sm text-gray-900">Sign in with Google</span>
        </section>
        <button
          onClick={handleSignOut}
          className="rounded-md bg-black px-8 py-3 text-base tracking-wide text-white duration-300 hover:bg-gray-800"
        >
          Sign Out
        </button>
      </section>

      <section className="flex w-full items-center justify-center gap-10">
        <section className="flex h-12 w-60 cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-400 text-base tracking-wide duration-300 hover:border-blue-600">
          <IconContext.Provider value={{ size: "32px" }}>
            <FaGithub />
          </IconContext.Provider>
          <span className="text-sm text-gray-900">Sign in with Github</span>
        </section>
        <button className="rounded-md bg-black px-8 py-3 text-base tracking-wide text-white duration-300 hover:bg-gray-800">
          Sign Out
        </button>
      </section>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
}

export default Login;
