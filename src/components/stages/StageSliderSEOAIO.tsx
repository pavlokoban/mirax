"use client";

import React from 'react';
import Slider from 'react-slick';
import styles from './StageSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const stages = [
  { number: 1, title: 'Аудит ниши', result: 'Как Яндекс и Алиса отвечают на запросыи какие сайты они используют как источники.' },
  { number: 2, title: 'Аудит сайта', result: 'Проверяем архитектуру сайта, контент, навигацию и готовность к ИИ-оптимизации.' },
  { number: 3, title: 'Контент', result: 'Формируем контент, который отвечает на реальные вопросы пользователей, а не просто содержит ключевые слова.' },
  { number: 4, title: 'Внедрения', result: 'Используем schema.org и сущности, чтобы ИИ мог корректно извлекать факты с сайта.' },
  { number: 5, title: 'Усиление E-E-A-T', result: 'Работаем с экспертностью, авторством, доверительными сигналами и прозрачностью сайта.' },
  { number: 6, title: 'Мониторинг и рост', result: 'Отслеживаем появление сайта в ИИ-ответах, рекомендациях Алисы и органической выдаче.' },
  { number: 7, title: 'Поддержка', result: 'Поддерживание и усиливаем эффект, внедряем последние рекомденации и всегда остаемся на передовой' },
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

const StageSliderSEOAIO = () => {
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
        <p className={styles.resultTextR}>Работы:</p>
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

export default StageSliderSEOAIO;
