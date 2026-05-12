"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Mail, Phone, Send, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser'
import SectionTitle from "../ui/SectionTitle";
import NeoButton from "../ui/NeoButton";
import { useLang } from "@/context/LangContext";
import { content } from "@/lib/i18n";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const { lang } = useLang();
  const t = content.contact;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    console.log('ENV check:', {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? 'OK' : 'MISSING',
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? 'OK' : 'MISSING',
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'OK' : 'MISSING',
    });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setIsSubmitted(true);
      setSubmitStatus('success');
      reset();
      setTimeout(() => {
        setIsSubmitted(false);
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t.location[lang],
      value: content.about.location[lang],
      color: "#EF476F",
    },
    {
      icon: Mail,
      label: "Email",
      value: "andikadwisatrio08@gmail.com",
      color: "#00B4D8",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 821 3750 7006",
      color: "#FFD166",
    },
  ];

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#0077B6' }} suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <SectionTitle text={t.sectionTitle[lang]} bgColor="white" textColor="black" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg mb-8 text-white">
              {lang === 'ID' 
                ? 'Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui form atau kontak di bawah ini.'
                : 'Interested in collaborating or have questions? Feel free to contact me through the form or contact details below.'
              }
            </p>

            {contactInfo.map((info) => (
              <motion.div
                key={info.label}
                className="flex items-center gap-4 bg-white border-2 border-neo-black neo-shadow p-4"
                whileHover={{ x: 6, boxShadow: "6px 6px 0px #0A0A0A" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className="p-3 border-2 border-neo-black"
                  style={{ backgroundColor: info.color }}
                  whileHover={{ rotate: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <p className="font-bold text-sm uppercase text-gray-500">
                    {info.label}
                  </p>
                  <p className="font-bold">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white border-2 border-neo-black neo-shadow-lg p-6"
            >
              {isSubmitted && submitStatus === 'success' && (
                <motion.div 
                  className="border-2 border-neo-black p-4 mb-6"
                  style={{ backgroundColor: '#06D6A0' }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <p className="font-bold text-center">
                    {lang === 'ID' 
                      ? '✓ Pesan berhasil dikirim! Saya akan segera menghubungi Anda.'
                      : '✓ Message sent successfully! I will contact you soon.'
                    }
                  </p>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div 
                  className="border-2 border-neo-black p-4 mb-6"
                  style={{ backgroundColor: '#EF476F' }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <p className="font-bold text-center text-white">
                    {lang === 'ID' 
                      ? '✗ Gagal mengirim pesan. Coba lagi nanti.'
                      : '✗ Failed to send message. Please try again later.'
                    }
                  </p>
                </motion.div>
              )}

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="font-bold text-sm uppercase mb-1 block">
                    {t.name[lang]} *
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: lang === 'ID' ? "Nama wajib diisi" : "Name is required" })}
                    className="w-full px-4 py-3 border-2 border-neo-black bg-white focus:outline-none transition-shadow focus:shadow-[4px_4px_0px_#00B4D8]"
                    placeholder={t.name[lang]}
                  />
                  {errors.name && (
                    <p className="text-neo-accent-pink text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="font-bold text-sm uppercase mb-1 block">
                    {t.email[lang]} *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: lang === 'ID' ? "Email wajib diisi" : "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: lang === 'ID' ? "Email tidak valid" : "Invalid email",
                      },
                    })}
                    className="w-full px-4 py-3 border-2 border-neo-black bg-white focus:outline-none transition-shadow focus:shadow-[4px_4px_0px_#00B4D8]"
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <p className="text-neo-accent-pink text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="font-bold text-sm uppercase mb-1 block">
                    {t.subject[lang]} *
                  </label>
                  <input
                    type="text"
                    {...register("subject", { required: lang === 'ID' ? "Subjek wajib diisi" : "Subject is required" })}
                    className="w-full px-4 py-3 border-2 border-neo-black bg-white focus:outline-none transition-shadow focus:shadow-[4px_4px_0px_#00B4D8]"
                    placeholder={lang === 'ID' ? "Subjek pesan" : "Message subject"}
                  />
                  {errors.subject && (
                    <p className="text-neo-accent-pink text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="font-bold text-sm uppercase mb-1 block">
                    {t.message[lang]} *
                  </label>
                  <textarea
                    {...register("message", { required: lang === 'ID' ? "Pesan wajib diisi" : "Message is required" })}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-neo-black bg-white focus:outline-none transition-shadow focus:shadow-[4px_4px_0px_#00B4D8] resize-none"
                    placeholder={lang === 'ID' ? "Tulis pesan Anda di sini..." : "Write your message here..."}
                  />
                  {errors.message && (
                    <p className="text-neo-accent-pink text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <NeoButton
                    type="submit"
                    variant="black"
                    size="lg"
                    className="w-full"
                    icon={
                      isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )
                    }
                    disabled={isSubmitting}
                  >
                    {isSubmitting 
                      ? (lang === 'ID' ? "MENGIRIM..." : "SENDING...")
                      : t.send[lang]
                    }
                  </NeoButton>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
