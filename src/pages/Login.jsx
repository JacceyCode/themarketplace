import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 py-20">
      <section className="flex w-full items-center justify-center gap-10">
        <section className="flex h-12 w-60 cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-400 text-base tracking-wide duration-300 hover:border-blue-600">
          <IconContext.Provider value={{ size: "32px" }}>
            <FcGoogle />
          </IconContext.Provider>
          <span className="text-sm text-gray-900">Sign in with Google</span>
        </section>
        <button className="rounded-md bg-black px-8 py-3 text-base tracking-wide text-white duration-300 hover:bg-gray-800">
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
    </section>
  );
}

export default Login;
