'use client';

import { FaFacebookF, FaLinkedinIn, FaLink } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialShareLinks = ({ title, slug }) => {
  const baseUrl = "https://www.azanmovers.com"; // Replace with your actual base URL
  const shareUrl = `${baseUrl}/blogs/${slug.current}`;

  const socialConfig = [
    {
      Icon: FaXTwitter,
      color: '#000000',
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      label: 'Twitter'
    },
    {
      Icon: FaFacebookF,
      color: '#1877F2',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      label: 'Facebook'
    },
    {
      Icon: FaLinkedinIn,
      color: '#0A66C2',
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`,
      label: 'LinkedIn'
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-semibold uppercase text-gray-700">Share:</span>
      {socialConfig.map(({ Icon, color, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 text-lg transition-transform duration-200 hover:scale-110"
          style={{ color }}
          aria-label={`Share on ${label}`}
        >
          <Icon />
        </a>
      ))}
      <button
        onClick={handleCopy}
        className="p-3 text-lg text-[#ED3F27] transition-transform duration-200 hover:scale-110"
        aria-label="Copy link"
      >
        <FaLink />
      </button>
    </div>
  );
};

export default SocialShareLinks;