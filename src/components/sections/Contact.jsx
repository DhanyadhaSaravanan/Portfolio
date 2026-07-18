import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/profile";
import SectionWrapper from "../layout/SectionWrapper";
import Button from "../ui/Button";

const initialForm = { name: "", email: "", subject: "", message: "" };

function validateField(name, value) {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      return "";
    case "email": {
      if (!value.trim()) return "Email is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email";
      return "";
    }
    case "subject":
      if (!value.trim()) return "Subject is required";
      return "";
    case "message":
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 10)
        return "Message must be at least 10 characters";
      return "";
    default:
      return "";
  }
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
      setTouched({});
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: profile.social.github, label: "GitHub" },
    { icon: FaLinkedin, href: profile.social.linkedin, label: "LinkedIn" },
    { icon: FaEnvelope, href: profile.social.email, label: "Email" },
  ];

  const inputClasses = (field) =>
    `w-full rounded-lg border px-4 py-3 text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
      touched[field] && errors[field]
        ? "border-red-400 focus:ring-red-400"
        : "border-slate-300"
    }`;

  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Have a project in mind? Let's talk!"
      alternate
    >
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {submitted && (
            <div
              role="alert"
              className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
            >
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-secondary">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClasses("name")}
              placeholder="Your name"
            />
            {touched.name && errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-secondary">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClasses("email")}
              placeholder="your@email.com"
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="mb-1 block text-sm font-medium text-secondary">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClasses("subject")}
              placeholder="What's this about?"
            />
            {touched.subject && errors.subject && (
              <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-secondary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputClasses("message")} resize-none`}
              placeholder="Your message..."
            />
            {touched.message && errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full sm:w-auto">
            Send Message
          </Button>
        </form>

        {/* Social & Info */}
        <div className="flex flex-col justify-center">
          <h3 className="mb-4 text-xl font-semibold text-secondary">
            Connect with me
          </h3>
          <p className="mb-8 leading-relaxed text-muted">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            through the form or connect via social media.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-muted shadow-sm transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={label}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
