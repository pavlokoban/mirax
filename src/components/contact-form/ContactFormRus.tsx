'use client';
import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from "@emailjs/browser";
import PhoneInput from 'react-phone-input-2';
import CircularText from '../CircularText';
import Link from 'next/link';

const ContactFormRus: React.FC = () => {
  const [formData, setFormData] = useState<{
    services: string[],
    budget: string,
    task: string,
    name: string,
    email: string,
    message: string,
    phone: string,
  }>({
    services: [],
    budget: '',
    task: '',
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;

    // 🕵️‍♂️ Honeypot-поле
    const honeypot = (form.elements.namedItem("company_website") as HTMLInputElement)?.value;
    if (honeypot) {
      console.warn("Spam detected via honeypot.");
      setModalMessage("Обнаружен спам. Заявка отклонена.");
      setShowModal(true);
      setIsLoading(false);
      return;
    }

    // 🧠 Проверка бессмысленного текста
    const looksLikeSpam = (text: string) =>
      /^[a-zA-Z0-9]{8,}$/.test(text) && !/\s/.test(text);

    if (
      looksLikeSpam(formData.message) ||
      looksLikeSpam(formData.task)
    ) {
      console.warn("Spam detected via content analysis.");
      setModalMessage("Ваше сообщение похоже на спам и было заблокировано.");
      setShowModal(true);
      setIsLoading(false);
      return;
    }

    // 🕒 Искусственная задержка для замедления ботов
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const templateParams = {
      from_name: formData.email,
      to_name: "WebMachine team",
      message: formData.message,
      budget: formData.budget,
      services: formData.services.join(', '),
      phone: formData.phone,
      name: formData.name,
      task: formData.task,
      email: formData.email,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      );

      if (response.status === 200) {
        setShowModal(true);
        setModalMessage('Спасибо! Ваш запрос получен. Мы свяжемся с вами в ближайшее время.');
        setFormData({
          services: [],
          budget: '',
          task: '',
          name: '',
          email: '',
          message: '',
          phone: '',
        });
      } else {
        setShowModal(true);
        setModalMessage('Ошибка при отправке формы.');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setShowModal(true);
      setModalMessage('Ошибка при отправке формы.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
         <h2 className="text-5xl md:text-6xl font-bold mb-10 max-w-4xl text-black tracking-tight">
       Оставить заявку
        </h2>
        <p className="py-4">
          Расскажите нам о своём проекте, и мы воплотим его в жизнь. Заполните форму и отправьте письмо на адрес:{' '}
          <Link className={'a-anim-email'} href="mailto:hello@mirax.ru">
            hello@mirax.ru
          </Link>
        </p>

        {/* 🔒 Honeypot-поле */}
        <input
          type="text"
          name="company_website"
          autoComplete="off"
          tabIndex={-1}
          style={{ display: "none" }}
        />

        <h3 className='text-2xl md:text-2xl font-bold'>Услуги</h3>
        <div className={styles.options}>
          {['разработка сайта', 'дизайн', 'SEO', 'реклама', 'прочее'].map((service) => (
            <label key={service} className={`${styles.option} ${formData.services.includes(service) ? styles.selected : ''}`}>
              <input
                type="checkbox"
                name="services"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleChange}
              />
              <span>{service}</span>
            </label>
          ))}
        </div>

        <h3 className='text-2xl md:text-2xl font-bold'>Бюджет</h3>
        <div className={styles.options}>
          {['меньше $1k', '$1k-3k', '$3k-7k', '$7k-10k', '$10k+'].map((budget) => (
            <label key={budget} className={`${styles.option} ${formData.budget === budget ? styles.selected : ''}`}>
              <input
                type="radio"
                name="budget"
                value={budget}
                checked={formData.budget === budget}
                onChange={handleChange}
              />
              <span>{budget}</span>
            </label>
          ))}
        </div>

        <h3 className='text-2xl md:text-2xl font-bold'>Задача</h3>
        <textarea
          className={styles.textarea}
          name="task"
          placeholder="Описание задачи (необязательно)"
          value={formData.task}
          onChange={handleChange}
        />

        <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'}>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
              pattern="^[A-Za-zА-Яа-яЁё\s]{3,12}$"
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Ваш Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="text"
              name="message"
              placeholder="Сообщение"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
          <PhoneInput
  country="ru"
  value={formData.phone}
  onChange={(phone: string) =>
    setFormData((prev) => ({ ...prev, phone }))
  }
  inputClass={styles.input}
  containerClass={styles.phoneInputContainer}
  placeholder="Номер телефона"
  specialLabel="" 
  inputProps={{
    name: 'phone',
    required: true,
    autoComplete: 'tel',
  }}
/>

          </div>
        </div>

        {/* <button type="submit" className={`${styles.submitButton}`} disabled={isLoading}>
          <span className={styles.buttonText}>{isLoading ? 'Отправка...' : 'Отправить'}</span>
          <span className={styles.buttonWaves}></span>
        </button> */}

    <CircularText
      text="ОСТАВИТЬ*ЗАЯВКУ*НА*ОЦЕНКУ*"
      spinDuration={8}
      onHover="slowDown"
      disabled={isLoading}
      isLoading={isLoading}

    />

        <p className={styles.privacyText}>
          Отправляя этот запрос, Вы соглашаетесь, что Ваши данные будут <Link className={'a-anim-email'} href="/personal-data-consent">храниться и обрабатываться сайтом</Link>.
          Для получения дополнительной информации ознакомьтесь с нашей <Link className={'a-anim-email'} href="/privacy-policy">Политикой конфиденциальности</Link>.
        </p>
      </form>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{modalMessage.includes('Спасибо') ? 'Спасибо!' : 'Сообщение'}</h2>
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactFormRus;