const Footer = () => {
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-[20px] text-[#FF0984] font-bold">
          Abdel Hakim Coder 
        </span>
        <span className="text-[#FF0984] font-bold tracking-tight flex gap-2">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
