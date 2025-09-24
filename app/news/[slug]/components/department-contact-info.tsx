import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

interface DepartmentContactInfoProps {
  department: string;
  email: string;
  phone: string;
  socials?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    pinterest?: string;
    youtube?: string;
  };
}

const DepartmentContactInfo: React.FC<DepartmentContactInfoProps> = ({
  department,
  email,
  phone,
  socials,
}) => {
  return (
    <div className="bg-[#1e1e1e] text-white p-6 ">
      {/* Department Title */}
      <h5 className="text-lg font-semibold mb-2">Department Contact Info</h5>
      <p className="text-sm">{department}</p>

      {/* Contact Info */}
      <div className="mt-8 mb-12">
        <h5 className="text-xl font-semibold mb-2">Contact:</h5>
        <a
          href={`mailto:${email}`}
          className="block text-white hover:underline"
        >
          {email}
        </a>
        <a href={`tel:${phone}`} className="block text-white hover:underline">
          {phone}
        </a>
      </div>

      {/* Social Info */}
      <div>
        <h5 className="text-xl font-semibold mb-2">Social Info:</h5>
        <div className="flex gap-5">
          {socials?.facebook && (
            <a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-white/80 transition"
            >
              <FaFacebookF />
            </a>
          )}
          {socials?.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-white/80 transition"
            >
              <FaInstagram />
            </a>
          )}
          {socials?.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-white/80 transition"
            >
              <FaLinkedinIn />
            </a>
          )}
          {socials?.pinterest && (
            <a
              href={socials.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-white/80 transition"
            >
              <FaPinterestP />
            </a>
          )}
          {socials?.youtube && (
            <a
              href={socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-white/80 transition"
            >
              <FaYoutube />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentContactInfo;
