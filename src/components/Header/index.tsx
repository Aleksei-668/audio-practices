export default function Header() {
  return (
    <section className="mb-5 rounded-3xl bg-white p-5 shadow-sm sm:mb-6 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9b7050]">
          Audio Practices
        </p>
        <span className="rounded-full bg-[#eadfce] px-3 py-1 text-sm font-medium text-[#5f4938]">
          Закрытая тестовая версия
        </span>
      </div>

      <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
        Аудиопрактики для внимания к телу
      </h1>

      <p className="max-w-2xl text-base leading-7 text-[#65594e]">
        Небольшая библиотека мягких практик для прогулки, работы сидя,
        короткой паузы или спокойного восстановления. Выберите практику и
        нажмите Play.
      </p>
    </section>
  );
}
