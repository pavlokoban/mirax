"use client";

import React from 'react';
import Slider from 'react-slick';
import styles from './StageSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const stages = [
  { number: 1, title: 'Архитектура', result: 'Концепция проекта: идея, структура' },
  { number: 2, title: 'Проектирование', result: 'Проект и его техническая спецификация' },
  { number: 3, title: 'Прототипирование', result: 'Интерактивные прототипы для десктопа и мобильных устройств' },
  { number: 4, title: 'Дизайн', result: 'Готовые к верстке макеты всех типовых разделов' },
  { number: 5, title: 'Верстка', result: 'Полное соответствие вида страниц сайта их дизайну' },
  { number: 6, title: 'Программирование', result: 'Чистый код, к которому не нужны спецификации' },
  { number: 7, title: 'Контент', result: 'Целостный проект: единство формы и смысла' },
];

const Arrow = ({ className, style, onClick }: any) => {
  return (
    <button
      className={className}
      style={{ ...style, display: 'block', color: '#000', fontSize: '32px', marginLeft: '12px', right: '12px'}}
      // style={{ ...style, display: 'block', color: '#000', fontSize: '32px' }}
      onClick={onClick}
    >
      {className.includes('slick-prev') ? '❮' : '❯'}
    </button>
  );
};

const StageSliderDevRu = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow className={`${styles.slickArrow} ${styles.slickPrev}`} />,
    nextArrow: <Arrow className={`${styles.slickArrow} ${styles.slickNext}`} />,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {stages.map((stage, index) => (
          <div key={stage.number} className={styles.slide}>
<div className="flex flex-col lg:flex-row items-stretch">

  {/* ЛЕВАЯ ЧАСТЬ — 1/3 */}
  <div className="w-full lg:w-1/3 flex justify-center">
    <div className={styles.stageNumber}>
      {stage.number}
    </div>
  </div>

  {/* ПРАВАЯ ЧАСТЬ — 2/3 */}
  <div className="w-full lg:w-2/3">
    <div className={styles.stageContent}>
      <div className="flex items-start">
        <div className={styles.stageTitle}>{stage.title}</div>
        <div className={styles.slideCounter}>
          {index + 1}/{stages.length}
        </div>
      </div>

      <div className={styles.resultText}>
        <p className={styles.resultTextR}>Результат:</p>
        <p className={styles.resultTextP}>{stage.result}</p>
      </div>
    </div>
  </div>

</div>


          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StageSliderDevRu;
