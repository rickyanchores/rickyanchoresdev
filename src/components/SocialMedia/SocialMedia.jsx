import { Link } from "react-router-dom";

const SocialMedia = () => {
  const socialLinks = [
    {
      id: "soc1",
      name: "Instagram",
      href: {
        pathname: "https://instagram.com/"
      }
    },
    {
      id: "soc2",
      name: "GitHub",
      href: {
        pathname: ""
      }
    },
    {
      id: "soc3",
      name: "Facebook",
      href: {
        pathname:
          ""
      }
    }
  ];

  return (
    <div className="SocialMedia">
      {socialLinks.map((link) => {
        return (
          <Link className="socLink" to={link.href} target="_blank">
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;