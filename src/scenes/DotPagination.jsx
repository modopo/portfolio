import AnchorLink from "react-anchor-link-smooth-scroll";

const DotPagination = ({ selectedPage, setSelectedPage }) => {
  const selectedStyle = `relative bg-yellow before:absolute before:w-6 before:h-6
    before:rounded-full before:border-2 before:border-yellow before:left-[-50%]
    before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${selectedPage === 'home' ? selectedStyle : "bg-dark-grey"}
          w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage('home')}
      />
      <AnchorLink
        className={`${selectedPage === 'skills' ? selectedStyle : "bg-dark-grey"}
          w-3 h-3 rounded-full`}
        href="#skills"
        onClick={() => setSelectedPage('home')}
      />
      <AnchorLink
        className={`${selectedPage === 'projects' ? selectedStyle : "bg-dark-grey"}
          w-3 h-3 rounded-full`}
        href="#projects"
        onClick={() => setSelectedPage('home')}
      />
      <AnchorLink
        className={`${selectedPage === 'experience' ? selectedStyle : "bg-dark-grey"}
          w-3 h-3 rounded-full`}
        href="#projects"
        onClick={() => setSelectedPage('home')}
      />
      <AnchorLink
        className={`${selectedPage === 'contact' ? selectedStyle : "bg-dark-grey"}
          w-3 h-3 rounded-full`}
        href="#contacts"
        onClick={() => setSelectedPage('home')}
      />
    </div>
  )
}

export default DotPagination;