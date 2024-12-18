import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="logo">
        <Image src="/images/logo.png" alt="logo" width={145} height={59} />
      </div>
      <div className="right">
        <div className="right-top">
          <a className="item" href="tel:0382226541">
            <PhoneOutlined />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
