import  MessageCircle  from "@/assets/whatsapp.png";

const WhatsAppOverlay = () => {
  const phoneNumber = "+2348026721258"; 
  const message = encodeURIComponent(
    "Hello, I would like to make an enquiry."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-2xl transition-all duration-300 animate-bounce">
        <img src={MessageCircle} alt="WhatsApp" width={48} height={48} />
        <span className="font-semibold hidden sm:block">
          Chat with us
        </span>
      </div>
    </a>
  );
};

export default WhatsAppOverlay;