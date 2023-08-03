import { FaCog, FaShieldAlt, FaRocket } from "react-icons/fa";

export const cardsData = [
  {
    title: "Tokenomics & Treasury",
    subtitle:
      "Empowering Your Project with Robust Tokenomics and Efficient Asset Management",
    image: "./tokenomics.png",
    logo: <FaCog />,
    shadow: "shadow-md shadow-secondary hover:shadow-lg hover:shadow-primary",
    btnText: "Explore",
    flipped: false,
    disable: false,
    backTitle: "Your Strategy & Asset Management Ally",
    textBack: (
      <p>
        Leverage the experience of our blockchain specialists to design an
        in-depth tokenomics model and streamline your digital asset management.
        Our bespoke methodology is rooted in your project's distinctive goals
        and necessities, ensuring a solid, transparent, and adaptable token
        ecosystem.
      </p>
    ),
    services: (
      <p>
        <ul>
          <li>💰 Detailed tokenomics modeling</li>
          <li>💵 Treasury management strategy</li>
          <li>📉 Token valuation analysis</li>
          <li>🔄 Guidance on liquidity sourcing</li>
          <li>🚀 Advisory on exchanges listing</li>
          <li>📊 Token performance auditing</li>
        </ul>
      </p>
    ),
  },
  {
    title: "Development & Deployment",
    subtitle:
      "Providing End-to-End Solutions for Token Development and Deployment",
    image: "./deployment.png",
    logo: <FaRocket />,
    btnText: "Explore",
    shadow: "shadow-md  shadow-secondary hover:shadow-lg hover:shadow-primary",
    flipped: false,
    disable: false,
    backTitle: "Your Development & Deployment Partner",
    textBack: (
      <p>
        Experience a wide spectrum of token creation services! From initial
        concept to the final deployment, we provide tailor-made solutions for
        every unique aspect of your project. Rely on an experienced blockchain
        partner to sculpt your token with unmatched precision, ensuring it
        surpasses industry standards.
      </p>
    ),
    services: (
      <p>
        <ul>
          <li>📝 Token Design & Development</li>
          <li>🖥️ Solidity Contract Programming</li>
          <li>🚀 Token Deployment</li>
          <li>🔄 Exchange Integration</li>
          <li>🛠️ Dapp Development</li>
          <li>🧪 Contract Testing & Auditing</li>
          <li>🔐 Token Security Measures</li>
        </ul>
      </p>
    ),
  },
  {
    title: "Governance & Compliance",
    subtitle:
      "Building Robust Governance and Ensuring Secure Compliance for Your Token",
    image: "./compliance.png",
    logo: <FaShieldAlt />,
    shadow: "shadow-md shadow-secondary hover:shadow-lg hover:shadow-primary",
    btnText: "Explore",
    flipped: false,
    disable: false,
    backTitle: "Your Asset Control Architects",
    textBack: (
      <p>
        We excel at constructing robust, secure control for your digital assets.
        Our services provide resilient governance and regulatory compliance.
        With our expertise, your project aligns with the latest standards,
        fostering success through a strong, flexible asset control model.
      </p>
    ),
    services: (
      <p>
        <ul>
          <li>🏛️ Governance Model Design</li>
          <li>🔒 Token Storage Security</li>
          <li>⚖️ Regulatory Compliance</li>
          <li>🌐 Global Regulatory Guidance</li>
          <li>🤝 Stakeholder Management</li>
          <li>🔄 On-going Compliance Audits</li>
          <li>🛡️ Risk Mitigation</li>
        </ul>
      </p>
    ),
  },
];
