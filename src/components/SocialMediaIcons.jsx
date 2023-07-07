import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png"

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/jonatsai/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedin} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/modopo"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={github} />
      </a>
    </div>
  )
}

export default SocialMediaIcons;