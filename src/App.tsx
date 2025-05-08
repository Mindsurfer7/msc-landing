import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-4 py-3 border-b border-zinc-100 bg-white sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-[8px] bg-[#ffe869] flex items-center justify-center border border-[#ffe869] mr-2">
            <img src="/logo.png" alt="Mindsurfing Club Logo" className="w-8 h-8" />
          </div>
          <span className="font-medium text-xs text-zinc-700 tracking-tight">MINDSURFING CLUB</span>
        </div>
        <nav className="flex-1 flex items-center justify-end gap-6">
          <a href="#" className="text-xs text-zinc-500 hover:text-zinc-700 transition">О клубе</a>
          <a href="#" className="text-xs text-zinc-500 hover:text-zinc-700 transition">Тарифы и оплата</a>
          <a href="#" className="text-xs text-zinc-500 hover:text-zinc-700 transition">Контакты</a>
          <a href="#" className="text-xs text-zinc-500 hover:text-zinc-700 transition">Отзывы</a>
          <a href="#" className="ml-2 px-3 py-1.5 bg-yellow-300 text-xs rounded-md font-semibold text-zinc-800 shadow-sm hover:bg-yellow-200 transition">Начать бесплатно</a>
        </nav>
      </header>
      {/* Hero Section */}
      <main className="w-full flex flex-col items-center mt-8 px-4">
        <div className='flex'>

       <div> <h1 className="text-xl md:text-2xl text-zinc-800 font-semibold mb-2 max-w-2xl text-center">
          Порядок в мыслях. Прогресс в жизни
        </h1>
        <h2>(прототип лендинга)</h2>
        <p className="text-xs text-zinc-500 mb-2 text-center max-w-lg">
          Дайте отпуск мыслям, создав порядок в голове.<br />
          Если вы застряли, испытываете тревогу о будущем, не уверены в решении — Mindsurfing Club поможет узнать себя, собрать мысли в порядок и действовать с уверенностью.
        </p>
        <button className="mt-2 mb-4 px-4 py-2 bg-yellow-300 text-xs rounded-md font-semibold shadow hover:bg-yellow-200 transition">
          Получить бесплатно
        </button></div>

<div>
<div className="flex items-center gap-2 mb-2">
          {/* <button aria-label="play" className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
            <svg width="12" height="14" fill="currentColor" viewBox="0 0 14 14">
              <polygon points="2,2 12,7 2,12"/>
            </svg>
          </button>
          <button aria-label="pause" className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
            <svg width="8" height="14" fill="currentColor" viewBox="0 0 8 14">
              <rect x="0" y="0" width="3" height="14"/>
              <rect x="5" y="0" width="3" height="14"/>
            </svg>
          </button> */}
        </div>
        <div className="flex items-center gap-4">
          <span className="font-handwritten text-3xl text-red-300" style={{ fontFamily: 'Indie Flower, cursive' }}>24/7</span>
          <div className="w-[340px] h-28 bg-zinc-100 rounded-md flex items-center justify-center">{/* placeholder for image/content */}</div>
        </div>
</div>

        </div>
       
   
      </main>
      {/* Begin Wavy Section with Tag Cloud and Feature Cards */}
      <section className="relative w-full mt-8">
        {/* Wavy background top */}
        <div className="absolute top-0 left-0 w-full -z-10">
          <svg viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-40">
            <path d="M0,32 Q360,80 720,40 Q1080,0 1440,48 L1440,160 L0,160Z" fill="#CFF3F4" />
          </svg>
        </div>
        <div className="bg-[#CFF3F4] pt-10 pb-16 flex flex-col items-center">
          {/* Feature Tag Cloud */}
          <div className="mb-4 w-full max-w-2xl flex flex-col items-center">
            <p className="text-xs text-zinc-600 text-center mb-2 max-w-lg">
              Чувствуете, что тревога и прокрастинация мешают вам двигаться вперёд?<br />
              Сомнения, внутренний хаос, страх будущего, недостаток мотивации – все эти чувства обычны и решаемы.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              <span className="rounded-full bg-purple-300/60 text-xs text-zinc-700 px-3 py-1">внутренний диалог</span>
              <span className="rounded-full bg-yellow-300/60 text-xs text-zinc-700 px-3 py-1">страх неопределённости</span>
              <span className="rounded-full bg-orange-200/60 text-xs text-zinc-700 px-3 py-1">откладываете решения</span>
              <span className="rounded-full bg-purple-200/70 text-xs text-zinc-700 px-3 py-1">эмоциональные качели</span>
              <span className="rounded-full bg-yellow-200/90 text-xs text-zinc-700 px-3 py-1">апатия</span>
              <span className="rounded-full bg-orange-300/60 text-xs text-zinc-700 px-3 py-1">тревога о будущем</span>
              <span className="rounded-full bg-blue-200/50 text-xs text-zinc-700 px-3 py-1">хаос в мыслях</span>
              <span className="rounded-full bg-purple-100/80 text-xs text-zinc-700 px-3 py-1">неэффективная организация времени</span>
            </div>
          </div>
          {/* Three Feature Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl px-2">
            <div className="bg-white rounded-xl drop-shadow-sm px-5 py-6 flex flex-col items-center border border-white h-36">
              <span className="mb-2 font-semibold text-sm text-zinc-800">ИП–оценка</span>
              <p className="text-xs text-zinc-500 text-center">Выявляем причины и решаем узкие проблемы, а не только внешний хаос.</p>
            </div>
            <div className="bg-white rounded-xl drop-shadow-sm px-5 py-6 flex flex-col items-center border border-white h-36">
              <span className="mb-2 font-semibold text-sm text-zinc-800">Конструктор треков</span>
              <p className="text-xs text-zinc-500 text-center">Индивидуальный путь преодоления тревожности и обретения уверенности.</p>
            </div>
            <div className="bg-white rounded-xl drop-shadow-sm px-5 py-6 flex flex-col items-center border border-white h-36">
              <span className="mb-2 font-semibold text-sm text-zinc-800">Драйвер треков</span>
              <p className="text-xs text-zinc-500 text-center">Пошаговый драйвер привычек и поддержка на каждом этапе развития.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Как MindSurfing Club меняет вашу жизнь */}
      <section className="w-full flex flex-col items-center bg-white py-12">
        <h2 className="text-lg text-zinc-800 font-semibold mb-2">Как MindSurfing Club меняет вашу жизнь</h2>
        <div className="flex flex-col md:flex-row md:gap-4 items-center justify-center mt-3">
          <div className="flex flex-col gap-3">
            <div className="rounded-full bg-[#b6f0ed]/80 text-zinc-700 text-xs px-6 py-2 mb-1 shadow-sm border border-[#cbeeee] whitespace-nowrap">Вы видите причины реальных «затыков», а не только поверхности</div>
            <div className="rounded-full bg-[#cbeeee]/80 text-zinc-700 text-xs px-6 py-2 mb-1 shadow-sm border border-[#b6f0ed] whitespace-nowrap">Получаете персональные рекомендации для прогресса </div>
          </div>
          <div className="flex flex-col gap-3 mt-4 md:mt-0">
            <div className="rounded-full bg-[#e7fafa]/80 text-zinc-700 text-xs px-6 py-2 mb-1 shadow-sm border border-[#cbeeee] whitespace-nowrap">Прокачиваете уверенность: больше действий и смелых внутренних решений</div>
            <div className="rounded-full bg-[#cbeeee]/80 text-zinc-700 text-xs px-6 py-2 mb-1 shadow-sm border border-[#e7fafa] whitespace-nowrap">Снижаете уровень тревоги через работу с мышлением</div>
            <div className="rounded-full bg-[#e7fafa]/80 text-zinc-700 text-xs px-6 py-2 mb-1 shadow-sm border border-[#cbeeee] whitespace-nowrap">С каждым разом чувствуете больше стабильности и уверенности</div>
          </div>
        </div>
      </section>
      {/* От тревоги к уверенности в себе (история Эммы) */}
      <section className="w-full flex flex-col items-center bg-transparent py-12">
        <h2 className="text-lg text-zinc-800 font-semibold mb-3">От тревоги к уверенности в себе</h2>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl items-stretch px-2">
          {/* История Эммы */}
          <div className="flex-1 flex flex-col justify-center max-w-md">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-zinc-100 text-xs text-zinc-700 mb-3">
              <span className="block font-bold text-sm text-zinc-800 mb-2">Эмма:</span>
              Я всегда откладывала важные решения и тревожилась, что упускаю возможности. Когда начала работать с треками и вопросами MindSurfing Club, я стала лучше понимать себя и делать шаги вперёд без лишней тревоги. Теперь чувствую в себе уверенность и спокойствие.
            </div>
          </div>
          {/* Слайды до/после */}
          <div className="flex-[2] flex flex-col gap-5 justify-center w-full">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* До */}
              <div className="flex-1 bg-[#ffe4e6]/60 border border-[#ffe4e6] rounded-xl p-5 text-center text-xs text-zinc-700 shadow-sm min-w-[150px]">
                <div className="font-bold mb-1 text-zinc-800">Было</div>
                • Откладывала решения<br />
                • Часто тревожилась о будущем<br />
                • Боялась ошибиться
              </div>
              {/* После */}
              <div className="flex-1 bg-[#e7f6e7]/60 border border-[#b9ebb9] rounded-xl p-5 text-center text-xs text-zinc-700 shadow-sm min-w-[150px]">
                <div className="font-bold mb-1 text-zinc-800">Стало</div>
                • Уверенно принимаю решения<br />
                • Спокойно отношусь к переменам<br />
                • Действую осознанно
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Q&A — Вопросы и ответы */}
      <section className="w-full py-14 flex flex-col items-center bg-white">
        <h2 className="text-lg text-zinc-800 font-semibold mb-4">Часто задаваемые вопросы</h2>
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
          <details className="bg-[#f6fbfb] border border-[#cff3f4] rounded-xl p-4 group" open>
            <summary className="cursor-pointer font-medium text-sm text-zinc-700 group-open:text-blue-600 transition">Я никогда раньше не пробовал трекеры мыслей и трекеры привычек. Мне будет сложно?</summary>
            <div className="mt-3 text-xs text-zinc-500">В Mindsurfing Club всё сделано пошагово и максимально понятно. Даже если вы раньше не вели никаких дневников — адаптируетесь быстро, а поддержка всегда под рукой.</div>
          </details>
          <details className="bg-[#f6fbfb] border border-[#cff3f4] rounded-xl p-4 group">
            <summary className="cursor-pointer font-medium text-sm text-zinc-700 group-open:text-blue-600 transition">На сколько хватает подписки? Я смогу отменить?</summary>
            <div className="mt-3 text-xs text-zinc-500">Подписка оформляется помесячно, её можно отменить в любой момент. Все данные сохранятся.</div>
          </details>
          <details className="bg-[#f6fbfb] border border-[#cff3f4] rounded-xl p-4 group">
            <summary className="cursor-pointer font-medium text-sm text-zinc-700 group-open:text-blue-600 transition">Подходит ли Club, если у меня давно проблемы с тревожностью?</summary>
            <div className="mt-3 text-xs text-zinc-500">Да. Практика треков и работа с мыслями подходят для людей с разным опытом. Здесь нет осуждения — только поддержка и индивидуальные треки под вашу ситуацию.</div>
          </details>
          <details className="bg-[#f6fbfb] border border-[#cff3f4] rounded-xl p-4 group">
            <summary className="cursor-pointer font-medium text-sm text-zinc-700 group-open:text-blue-600 transition">Club — это психотерапия?</summary>
            <div className="mt-3 text-xs text-zinc-500">Нет, Mindsurfing Club — инструмент для самостоятельной работы с мышлением и привычками. Это не замена профессиональной помощи, а поддержка в ежедневных мыслях.</div>
          </details>
        </div>
      </section>
      {/* Попробуйте Mindsurfing Club и сделайте первый шаг к изменениям */}
      <section className="w-full flex flex-col items-center bg-white py-14 px-2">
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="flex-1 flex flex-col items-start mb-6 md:mb-0">
            <h2 className="text-lg md:text-xl text-zinc-900 font-semibold mb-2 leading-tight max-w-md">Попробуйте Mindsurfing Club и сделайте первый шаг к изменениям</h2>
            <p className="text-xs text-zinc-500 mb-3 max-w-sm">Начните бесплатно. Порядок в мыслях — путь к качественным переменам в жизни.</p>
            <button className="px-4 py-2 bg-yellow-300 hover:bg-yellow-200 text-xs rounded-lg font-semibold text-zinc-800 shadow transition mb-2">Получить бесплатно</button>
            <span className="mt-1 text-xs text-zinc-400">Без карты и обязательств</span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full max-w-[340px] h-32 bg-zinc-100 rounded-lg flex items-center justify-center border border-zinc-200">
              {/* Иллюстрация-плейсхолдер */}
              <svg width="80" height="80" fill="#acebe2" viewBox="0 0 80 80"><circle cx="40" cy="40" r="38" fill="#acebe2" /><circle cx="40" cy="40" r="28" fill="#fff" opacity=".5" /><circle cx="40" cy="40" r="24" fill="#acebe2" opacity=".7" /></svg>
            </div>
          </div>
        </div>
      </section>
      {/* Слайдер с историями пользователей */}
      <section className="w-full bg-[#CFF3F4] py-14 flex flex-col items-center">
        <h2 className="text-lg text-zinc-800 font-semibold mb-5">Вот еще несколько историй наших пользователей</h2>
        {/* Очень простой слайдер-карусель через horizontal scroll для 3-4 карточек */}
        <div className="w-full max-w-3xl overflow-x-auto flex gap-4 pb-2 snap-x">
          {/* Карточка 1 */}
          <div className="bg-white rounded-xl min-w-[260px] max-w-[280px] p-5 flex flex-col shadow border border-[#e3f7f6] snap-center">
            <span className="text-xs text-zinc-700 mb-3">Я стала высыпаться быстрее: заметила тревожные мысли вечером и смогла их отпустить до сна. Теперь заряд на утро чувствуется иначе! <br /><span className="block mt-2 text-zinc-400 font-medium">— Наташа, 32</span></span>
          </div>
          {/* Карточка 2 */}
          <div className="bg-white rounded-xl min-w-[260px] max-w-[280px] p-5 flex flex-col shadow border border-[#e3f7f6] snap-center">
            <span className="text-xs text-zinc-700 mb-3">Поняла, где «теряю» мотивацию, и смогла пересобрать свой день. Посмотрела на тревоги под новым углом! <br /><span className="block mt-2 text-zinc-400 font-medium">— Мария, 28</span></span>
          </div>
          {/* Карточка 3 */}
          <div className="bg-white rounded-xl min-w-[260px] max-w-[280px] p-5 flex flex-col shadow border border-[#e3f7f6] snap-center">
            <span className="text-xs text-zinc-700 mb-3">Треки помогают чувствовать себя увереннее на работе: стала чаще выступать и открыто говорить о своих проектах.<br /><span className="block mt-2 text-zinc-400 font-medium">— Дина, 35</span></span>
          </div>
          {/* Карточка 4 */}
          <div className="bg-white rounded-xl min-w-[260px] max-w-[280px] p-5 flex flex-col shadow border border-[#e3f7f6] snap-center">
            <span className="text-xs text-zinc-700 mb-3">Теперь мне легче возвращаться к своим целям, если что-то не получилось: нет ощущения вины или давления.<br /><span className="block mt-2 text-zinc-400 font-medium">— Евгения, 29</span></span>
          </div>
        </div>
      </section>
      {/* Footer Wavy Divider */}
      <div className="w-full -mb-1">
        <svg viewBox="0 0 1440 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-28 rotate-180">
          <path d="M0,32 Q360,80 720,40 Q1080,0 1440,48 L1440,110 L0,110Z" fill="#CFF3F4" />
        </svg>
      </div>
      {/* Footer */}
      <footer className="w-full bg-white border-t border-zinc-100 pt-6 pb-2 px-4 flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <img src="/logo.png" alt="Mindsurfing Club Logo" className="w-6 h-6" />
          <span className="font-medium text-xs text-zinc-700 tracking-tight">MINDSURFING CLUB</span>
        </div>
        <div className="text-xs text-zinc-400 text-center mb-2 md:mb-0">© {new Date().getFullYear()} Mindsurfing Club</div>
        <div className="flex gap-3">
          <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 transition">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" fill="#ebebeb"/>
              <path d="M8 4.25A3.75 3.75 0 1 0 8 11.75A3.75 3.75 0 1 0 8 4.25Z" fill="#58a6ff"/>
            </svg>
          </a>
          <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 transition">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" fill="#ebebeb"/>
              <path d="M6.5 6.5h3l-.5 3.5h-2z" fill="#49b6b6"/>
            </svg>
          </a>
          <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 transition">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" fill="#ebebeb"/>
              <rect x="6" y="6" width="4" height="4" fill="#7c6ce0"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
