const Footer = () => {
  return (
    <footer className="border-t border-[#E4E1EA] bg-[#FFFBFE]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="text-sm text-[#706B78]">© 2026 Repository Explorer</p>

          <p className="mt-1 text-sm text-[#706B78]">
            Designed &amp; built by Sohel Khan.
          </p>
        </div>

        <a
          href="https://github.com/sohelkhan-07"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#656D76] transition-colors hover:text-[#25232A]"
        >
          My GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
