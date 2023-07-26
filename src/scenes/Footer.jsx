import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-60 bg-lighter-blue pt-5">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">Jonathan Tsai</p>
          <p className="font-playfair text-md text-yellow">2023 © modopo</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;