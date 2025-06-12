function Footer() {
   return (
      <footer className="bg-zinc-900 text-zinc-400 px-6 py-10 text-center mt-20">
         <div className="flex justify-center gap-4 mb-6">
         <a
            href="/"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-500 transition duration-300 hover:shadow-md hover:shadow-white/30"
         >
            <img src="/icons/home.svg" alt="home" className="w-5 h-5 invert" />
         </a>
         <a
            href="mailto:lsodiogo@gmail.com"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-500 transition duration-300 hover:shadow-md hover:shadow-white/30"
         >
            <img src="/icons/email.svg" alt="email" className="w-5 h-5 invert" />
         </a>
         <a
            href="https://www.linkedin.com/in/diogooslima/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-500 transition duration-300 hover:shadow-md hover:shadow-white/30"
         >
            <img src="/icons/linkedin.svg" alt="linkedin" className="w-5 h-5 invert" />
         </a>
         <a
            href="https://github.com/lsodiogo/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-500 transition duration-300 hover:shadow-md hover:shadow-white/30"
         >
            <img src="/icons/github.svg" alt="github" className="w-5 h-5 invert" />
         </a>
         </div>

         <p className="text-sm text-zinc-500">
            Diogo Lima © 2025
         </p>
      </footer>
   );
};

export default Footer;