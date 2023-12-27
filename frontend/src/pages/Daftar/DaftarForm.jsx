import React, { useState, useRef } from "react";
import "tailwindcss/tailwind.css";
import logoGooglePlay from "../../assets/Icons/logo-google-play.png";
import { baseStyle } from "../../assets/styles";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from "../../context/AuthContext";

const DaftarPage = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
  const [notif, setNotif] = useState("");
  const notification = useRef();
  const { signup } = useAuth();
  const navigate = useNavigate();

  function showNotif(status) {
    if (status === "success") {
      notification.current.classList.add("bg-green-500");
    } else if (status === "error") {
      notification.current.classList.add("bg-rose-500");
    }
    setTimeout(() => {
      notification.current.style.top = "-100%";
    }, 3000);
    notification.current.style.top = "3rem";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== konfirmasiPassword) {
      setNotif("Kata sandi harus sama");
      showNotif("error");
      return;
    }
    console.log("all good");
    try {
      // Call signup function
      const userData = await signup(email, password);

      const addUser = await fetch("http://127.0.0.1:3000/addUser", {
        method: "POST",
        body: JSON.stringify({
          id: userData.user.uid,
          username: nama,
          email: userData.user.email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (addUser.ok) {
        console.log("User data successfully added to the database.");
        setTimeout(() => {
          // return <Navigate to={"/login"} replace />;
          return navigate("/profile");
        }, 3000);
        showNotif("success");
        setNotif("success signup");
      } else {
        console.error(
          "Error adding user data to the database:",
          addUserResponse.statusText
        );
        setNotif(addUserResponse.statusText);
        showNotif("error");
        // Handle error
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setNotif("error during signup");
      showNotif("error");
    }
  };

  return (
    <section className={`${baseStyle}`}>
      <div className=" min-h-screen flex items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
        <div>
          <div>
            <h2 className="mt-[45px] text-[27px] font-bold text-black justify-center items-center text-center">
              Bersama Panti Peduli, Sejahterakan <br /> Kehidupan Anak Panti di
              Indonesia
            </h2>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px justify-center items-center text-center ml-[37px]">
              <div>
                <label htmlFor="nama" className="sr-only text-[24px]">
                  Nama
                </label>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  autoComplete="nama"
                  required
                  className="mb-[15px] rounded-[8px] relative block w-[400px] h-[35px]] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only text-[24px]">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mb-[15px]   rounded-[8px] relative block w-[400.1px] h-[35px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only text-[24px]">
                  Kata Sandi
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="mb-[15px]  rounded-[8px] relative block w-[400px] h-[35px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Kata Sandi"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="konfirmasi-password"
                  className="sr-only text-[24px]"
                >
                  Konfirmasi Kata Sandi
                </label>
                <input
                  id="konfirmasi-password"
                  name="konfirmasiPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="mb-[15px]  rounded-[8px] relative block w-[400px] h-[35px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Konfirmasi Kata Sandi"
                  value={konfirmasiPassword}
                  onChange={(e) => setKonfirmasiPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="ml-[37px] w-[400px] h-[50px] flex justify-center py-2 px-4 border border-transparent text-[24px]  rounded-md text-white bg-pink hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Daftar
              </button>
            </div>
          </form>

          <div className="mt-6">
            <p className="ml-[37px] text-[22px] text-center text-sm leading-none font-normal text-slate-400">
              Sudah memiliki akun? yuk login{" "}
              <Link to="/login" className="text-indigo-600 font-bold">
                Disini
              </Link>
            </p>
            <div className=" bg-slate-400 h-px w-full mt-3"></div>
            <p className="ml-[37px] text-center text-sm leading-none font-normal text-slate-400 mt-3">
              Download Aplikasi
            </p>
            <div className="ml-[190px] mt-3 w-[120px] h-[79px]">
              <img src={logoGooglePlay} alt="logo-google-play" />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={notification}
        className="fixed -top-full left-10 rounded-lg duration-300"
      >
        <p className="text-lg px-5 py-3 text-white font-bold">{notif}</p>
      </div>
    </section>
  );
};

export default DaftarPage;
