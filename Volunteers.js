import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Volunteers = ({ volunteers }) => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Available Volunteers</h2>
      <ul className="list-group">
        {volunteers.map((vol) => {
          if (!vol.mobileNumber) return null;

          const phoneNumber = vol.mobileNumber.replace(/\D/g, '');
          const message = `Hi ${vol.name}, I saw your profile on the Emergency Response site. Can you help me?`;
          const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          const callLink = `tel:${phoneNumber}`;

          return (
            <li
              key={vol._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{vol.name}</strong> | Skills: {vol.skills.join(", ")} | Location: {vol.location} | Available: {vol.availability ? "Yes" : "No"}
              </div>
              <div className="d-flex">
                {/* WhatsApp Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-sm ms-2 d-flex align-items-center"
                >
                  <FaWhatsapp className="me-2" size={18} /> Chat
                </a>
                {/* Call Button */}
                <a
                  href={callLink}
                  className="btn btn-primary btn-sm ms-2 d-flex align-items-center"
                >
                  <FaPhoneAlt className="me-2" size={18} /> Call
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Volunteers;
