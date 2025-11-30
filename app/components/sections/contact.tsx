import ContactForm from "../reusable/contact-form";

const Contact = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-black mb-16">
          Get in touch, or sign up to the <br /> email list
        </h2>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;