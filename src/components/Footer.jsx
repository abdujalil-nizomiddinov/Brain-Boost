function Footer() {
  return (
    <div className="container flex w-full justify-between items-center">
      <h3>Made with ❤️ and 🥑</h3>
      <ul className="flex justify-center h-[100px] items-center gap-5 *:hover:scale-110 *:active:scale-95 *:transition-all *:duration-200 *:ease-out">
        <li className="p">
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p fbbb h-[24px] w-[24px] !flex items-center justify-center"
          >
            <img
              src="../../assets/images/icon-instagram.svg"
              alt="Instagram"
              className="p w-5 h-5"
            />
          </a>
        </li>
        <li className="p">
          <a
            href="http://bluesky.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p fbbb h-[24px] w-[24px] !flex items-center justify-center"
          >
            <img
              src="../../assets/images/icon-bluesky.svg"
              alt="Bluesky"
              className="p w-5 h-5"
            />
          </a>
        </li>
        <li className="p">
          <a
            href="http://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p fbbb h-[24px] w-[24px] !flex items-center justify-center"
          >
            <img
              src="../../assets/images/icon-tiktok.svg"
              alt="TikTok"
              className="p w-5 h-5"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
