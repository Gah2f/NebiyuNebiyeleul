import { mySocials } from "../constants";

function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space ">
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full " />
      <div className="flex gap-2">
        <p>Terms and conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a target="_blank" href={social.href} key={index}>
            <img src={social.icon} alt="Social media icons" className="w-5 h-5"/>
          </a>
        ))}
      </div> 
      <p> &copy; 2025 Nebiyu . All rights reserved.</p>
    </footer>
  );
}

export default Footer;
