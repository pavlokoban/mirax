"use client";

import React from 'react';
import Slider from 'react-slick';
import styles from './StageSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const stages = [
  { number: 1, title: 'Аудит', result: 'Изучаем, как Яндекс и Алиса отвечают на запросы в вашей тематике и какие сайты они используют как источники.' },
  { number: 2, title: 'Структура', result: 'Проверяем архитектуру сайта, контент, навигацию и готовность к ИИ-оптимизации.' },
  { number: 3, title: 'Контент', result: 'Формируем контент, который отвечает на реальные вопросы пользователей, а не просто содержит ключевые слова.' },
  { number: 4, title: 'Микроразметка', result: 'Используем schema.org и сущности, чтобы ИИ мог корректно извлекать факты с сайта.' },
  { number: 5, title: 'E-E-A-T', result: 'Работаем с экспертностью, авторством, доверительными сигналами и прозрачностью сайта.' },
  { number: 6, title: 'Рост', result: 'Отслеживаем появление сайта в ИИ-ответах, рекомендациях Алисы и органической выдаче.' },
  { number: 7, title: 'Техподдержка', result: 'Закрепление результатов, дальнейшее развитие сайта.' },
];

const Arrow = ({ className, style, onClick }: any) => {
  return (
    <button
      className={className}
      style={{ ...style, display: 'block', color: '#000', fontSize: '32px', right: '0'}}
      onClick={onClick}
    >
      {className.includes('slick-prev') ? '❮' : '❯'}
    </button>
  );
};

const StageSliderSeoRu = () => {
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
            <div className="inline-flex-desc">
              <div className="desc-33-mob-100">
                <div className={styles.stageNumber}>{stage.number}</div>
              </div>

              <div className="desc-67-mob-100">
                <div className={styles.stageContent}>
                  <div className="inline-flex-desc">
                    <div className={styles.stageTitle}>{stage.title}</div>
                    <div className={styles.slideCounter}>{index + 1}/{stages.length}</div>
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

export default StageSliderSeoRu;
