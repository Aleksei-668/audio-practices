"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] px-6 py-8 text-[#2f2a24]">
      <div className="mx-auto max-w-4xl">
        <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#9b7050]">
            Audio Practices
          </p>

          <h1 className="mb-4 text-5xl font-bold">
            Сканирование тела
          </h1>

          <p className="text-lg text-[#65594e]">
            Практика осознанного внимания к телу для расслабления,
            восстановления контакта с собой и снижения напряжения.
          </p>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="mb-6">
            <div className="inline-flex rounded-full bg-[#eadfce] px-4 py-2 text-sm font-medium">
              Телесная практика
            </div>
          </div>

          <audio controls className="w-full">
            <source src="/audio/body-scan.m4a" type="audio/mp4" />
            Ваш браузер не поддерживает аудио.
          </audio>
        </section>
      </div>
    </main>
  );
}
