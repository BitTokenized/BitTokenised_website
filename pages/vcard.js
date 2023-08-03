import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaAddressCard,
  FaWhatsapp,
} from "react-icons/fa";

const vcard = () => {
  const btnClass = "btn btn-ghost hover:bg-transparent";
  const iconClass = "w-8 h-8 text-white hover:text-primary";

  const contactInfo = {
    firstName: "Cyril",
    lastName: "Alvarez Adriaansen",
    email: "Cyril@BitTokenized.com",
    mobile: "+351966468938",
    company: "BitTokenized",
    website: "https://www.bittokenized.com",
    linkedin: "https://linkedin.com/in/BitTokenized",
    github: "https://github.com/BitTokenized",
    twitter: "https://twitter.com/BitTokenized",
    whatsapp: "https://wa.link/i4eo9h",
  };

  const downloadVCard = () => {
    const element = document.createElement("a");
    const file = new Blob(
      [
        `
        BEGIN:VCARD
        VERSION:3.0
        N:${contactInfo.lastName};${contactInfo.firstName};;;
        FN:${contactInfo.firstName} ${contactInfo.lastName}
        ORG:${contactInfo.company}
        EMAIL:${contactInfo.email}
        TEL;TYPE=cell:${contactInfo.mobile}
        URL:${contactInfo.website}
        X-SOCIALPROFILE;TYPE=twitter:${contactInfo.twitter}
        X-SOCIALPROFILE;TYPE=github:${contactInfo.github}
        X-SOCIALPROFILE;TYPE=linkedin:${contactInfo.linkedin}
        X-SOCIALPROFILE;TYPE=whatsapp:${contactInfo.whatsapp}
        END:VCARD
    `,
      ],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "myContact.vcf";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="h-screen w-full">
      <div className="min-w-min animate__animated animate__zoomInUp">
        <div className="bg-neutral shadow-lg shadow-secondary hover:shadow-sm hover:shadow-secondary rounded-lg py-3">
          <div>
            <img
              className="w-28 h-28 rounded-full mx-auto"
              src="images/logo.png"
              alt={contactInfo.company}
            />
          </div>
          <div className="p-3">
            <h3 className="text-center text-2xl text-secondary font-bold">
              {contactInfo.firstName} {contactInfo.lastName}
            </h3>
            <div className="text-center text-white italic font-Kotta text-2xl">
              <span className="text-primary">Bit</span>
              Tokenized
            </div>
            <div className="m-3">
              <button className={btnClass}>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className={iconClass} />
                </a>
              </button>
              <button className={btnClass}>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className={iconClass} />
                </a>
              </button>
              <button className={btnClass}>
                <a
                  href={contactInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className={iconClass} />
                </a>
              </button>
              <button className={btnClass}>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className={iconClass} />
                </a>
              </button>
            </div>

            <div className="text-center mt-4">
              <button
                onClick={downloadVCard}
                className="btn btn-md btn-outline btn-primary"
              >
                <FaAddressCard className="mr-2 w-9 h-9" />
                Vcard
              </button>
            </div>
          </div>
          <div className="text-center m-1">
            <a
              className="text-sm text-white italic hover:underline hover:text-secondary font-medium"
              href="/"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default vcard;
