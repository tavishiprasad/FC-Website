import Fc1 from "../assets/fc1.png";
import bg from "../assets/bg.jpg";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="flex flex-col bg-white">
        <div className="Logo">
          <Link to="/">
            <img className="mx-72 mt-24 h-28 w-72" src={Fc1} />
          </Link>
        </div>
        <div className="px-[80px] pt-[100px] text-lg">
          <form
            className="grid grid-cols-3 grid-rows-4 gap-3 overflow"
            id="myForm"
            action="/submit"
            method="POST"
          >
            <div>
              <label htmlFor="Name">Name</label>
              <br />
              <input type="text" id="name" className="border border-gray-400" />
            </div>
            <div>
              <label htmlFor="Roll">Roll No.</label>
              <br />
              <input type="text" id="roll" className="border border-gray-400" />
            </div>
            <div>
              <label htmlFor="Branch">Branch:</label>
              <br />
              <input
                type="text"
                id="Branch"
                className="border border-gray-400"
              />
            </div>
            <div>
              <label htmlFor="Email">Email:</label>
              <br />
              <input
                type="text"
                id="Email"
                className="border border-gray-400"
              />
            </div>
            <div className="grid-row-2 col-span-2 grid gap-0">
              <label htmlFor="Resume Link / Linkedin Profile Link">
                Resume Link / Linkedin Profile Link:
              </label>

              <input
                type="text"
                id="Resume Link / Linkedin Profile Link"
                className="border border-gray-400"
              />
            </div>
            <div className="grid-row-2 col-span-3 grid">
              <label htmlFor="Why do you wish to join the club?">
                Why do you wish to join the club?:
              </label>

              <input
                type="text"
                id="Why do you wish to join the club?"
                className="border border-gray-400"
              />
            </div>
            <div className="grid-row-2 col-span-3 grid">
              <label htmlFor="Other questions / queries if any?">
                Other questions / queries if any?:
              </label>

              <input
                type="text"
                id="Other questions / queries if any?"
                className="col-span-3 border border-gray-400"
              />
            </div>
            <div
              className="bg-[#21b2f2] mt-16 rounded-xl border py-1.5 text-xl font-bold text-white hover:bg-[#0498db] col-span-3 justify-center flex hover:cursor-pointer"
              onClick="document.getElementById('myForm').submit();"
            >
              Join Us
            </div>
          </form>
        </div>
      </div>

      <div className="relative h-screen overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#7dc9fc]">
        <div className="font-roboto absolute z-20 flex h-screen flex-col justify-center text-[#4b4a4a]">
          <h1 className="pl-[100px] text-5xl font-bold">
            BIT Mesra&apos;s Finance Club
          </h1>
          <p className="pl-[100px] pr-[200px] pt-5 text-2xl">
            Unleash the financial tycoon within you. Learn, grow and excel in
            the world of finance.
          </p>
        </div>

        <img src={bg} className="absolute z-10 opacity-30" />
      </div>
    </div>
  );
}

export default Login;
