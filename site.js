const ru = {
  navFilm:"Видео",navWorlds:"Миры",navGallery:"Галерея",navProject:"Проект",navSupport:"Поддержка",
  heroKicker:"ОРИГИНАЛЬНАЯ ИГРА ДЛЯ IPHONE",
  heroLead:"Уклоняйтесь от препятствий и продержитесь как можно дольше. Каждый новый метр — шанс побить личный рекорд в этой аркадной игре на Unity.",
  joinTestFlight:"Тестировать в TestFlight",testflightNote:"Открытое тестирование на iPhone через Apple TestFlight.",testflightLink:"TestFlight",
  watchFilm:"Смотреть игру",exploreFrames:"Смотреть кадры",heroVisual:"EXTERIOR / КАДР ИЗ ИГРЫ",
  introStatement:"Цель — продержаться как можно дольше. Читайте трассу, проходите между препятствиями и продвигайте личный рекорд всё глубже в бездну.",
  filmTitle:"Увидеть в движении.",filmAside:"Настоящая запись игры · Interior и Exterior · 29 секунд",
  filmCaption:"Записано в игре. Нажмите Play, чтобы загрузить видео.",downloadFilm:"Скачать видео ↗",
  worldsTitle:"Одна трасса. Два взгляда.",worldsAside:"Белая броня ощущается по-другому, когда мир выворачивается наружу.",
  interiorTitle:"Внутри механизма",interiorText:"Полёт сквозь огромный сотовый тоннель. Четырёхлопастные вентиляторы, аметисты и переменчивый свет превращают каждый проход в решение.",
  interiorTag:"БЕЛЫЙ / ФИОЛЕТОВЫЙ / ГРАФИТ",
  exteriorTitle:"По внешней стороне",exteriorText:"Скользите по наружной поверхности трассы на фоне звёзд. Изгибы, орбитальные механизмы и поля аметистов меняют восприятие пути впереди.",
  exteriorTag:"БРОНЯ / КОСМОС / АМЕТИСТ",
  galleryTitle:"Кадры из бездны.",galleryAside:"Семь настоящих игровых кадров. Откройте любой, чтобы увидеть его целиком.",
  projectTitle:"Игру лучше почувствовать.",projectText:"WHITEFALL — независимая аркада о полёте, созданная Андреем Бояркой под брендом Hulio Studio. Её визуальный язык соединяет белую и графитовую сотовую броню, фиолетовые механизмы и аметистовые препятствия. Игра создаётся в Unity для iPhone, с авторскими 3D-моделями и процедурно продолжающейся трассой.",
  factWorlds:"разных мира",factRuns:"повторяемых забегов",factGoal:"цель: лететь дальше",
  projectFootnote:"Бесплатная игра без рекламы и покупок. Личные рекорды и необязательные таблицы Game Center. Релиз для iPhone готовится.",
  footerLine:"Мир, по которому хочется лететь.",privacy:"Конфиденциальность",contact:"Контакты"
};
const original = Object.fromEntries([...document.querySelectorAll("[data-i18n]")].map(el=>[el.dataset.i18n,el.textContent]));
const languageButton = document.getElementById("language");
let language = "en";
languageButton?.addEventListener("click",()=>{
  language = language === "en" ? "ru" : "en";
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=(language==="ru"?ru:original)[el.dataset.i18n] ?? el.textContent);
  languageButton.textContent=language==="en"?"RU":"EN";
  languageButton.setAttribute("aria-label",language==="en"?"Switch to Russian":"Switch to English");
});
document.getElementById("year").textContent=new Date().getFullYear();
const lightbox=document.getElementById("lightbox");
const lightboxImage=lightbox.querySelector("img");
const closeLightbox=()=>{
  lightbox.close();
  lightboxImage.removeAttribute("src");
};
document.querySelectorAll(".gallery-item").forEach(item=>item.addEventListener("click",()=>{
  lightboxImage.src=item.dataset.full;
  lightboxImage.alt=item.querySelector("img").alt;
  lightbox.querySelector("figcaption").textContent=item.dataset.caption;
  lightbox.showModal();
}));
lightbox.querySelector(".lightbox-close").addEventListener("click",closeLightbox);
lightbox.addEventListener("click",event=>{if(event.target===lightbox)closeLightbox()});
lightbox.addEventListener("close",()=>lightboxImage.removeAttribute("src"));
