import PremiumSlider from "../components/ivan/premiumSlider/PremiumSlider";

import ForMeditationPng from "../assets/for-meditation.png";

function PremiumPage() {
  return (
    <div className="premiumPage">
      <div class="price">
        <div class="container">
          <h2 class="price__title title">
            <span class="title__premium">Premium </span>
            версия
          </h2>
          <ul class="price__list">
            <li class="price__item banner">
              <div class="banner__duration">1 месяц</div>
              <div class="banner__price">1 месяц/500 с</div>
              <ul class="banner__list">
                <li class="banner__item">
                  В соответствии с пользовательским соглашением при покупке
                  подписки не предоставляется возможность оформления возврата
                  средств.
                </li>
                <li class="banner__item">
                  Оформляя подписку вы разрешаете ежемесячно взимать с вашей карты
                  стоимость подписки
                </li>
                <li class="banner__item">
                  Подписку можно отменить в любой момент
                </li>
              </ul>
              <button class="banner__button btn">Купить</button>
            </li>
            <li class="price__item banner">
              <div class="banner__duration">3 месяц</div>
              <div class="banner__price">3 месяц/1250 с</div>
              <ul class="banner__list">
                <li class="banner__item">
                  В соответствии с пользовательским соглашением при покупке
                  подписки не предоставляется возможность оформления возврата
                  средств.
                </li>
                <li class="banner__item">
                  Оформляя подписку вы разрешаете ежемесячно взимать с вашей карты
                  стоимость подписки
                </li>
                <li class="banner__item">
                  Подписку можно отменить в любой момент
                </li>
              </ul>
              <button class="banner__button btn">Купить</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="includes">
        <div class="container">
          <h3 class="includes__title title">
            Что входит в
            <span class="title__premium"> Premium?</span>
          </h3>
          <div class="includes__content">
            <h4 class="includes__subtitle">Больше категорий</h4>
            <PremiumSlider />
          </div>
        </div>
      </div>
      <div class="important">
        <div class="container">
          <h3 class="important__title title">
            И самое важное у нас есть
            <div class="title__premium">Медитация</div>
          </h3>
          <img
            src={ForMeditationPng}
            alt="Девушка медитирует, сидя на берегу среди камней"
            class="important__image"
          />
        </div>
      </div>
    </div>
  );
}

export default PremiumPage;
