# Changelog

Журнал изменений между этапами проекта.

## 2026-06-27 — v2: архитектурная основа

### Добавлено

- Создана ветка `v2`.
- Добавлена документация проекта:
  - `docs/PROJECT_VISION.md`;
  - `docs/ARCHITECTURE.md`;
  - `docs/ROADMAP.md`.
- Создан тип `Practice`.
- Создан файл данных `src/data/practices.ts`.
- Текущие аудиопрактики описаны как объекты данных.
- Добавлены компоненты:
  - `Header`;
  - `Footer`;
  - `ContextSelector`;
  - `SearchBar`;
  - `PracticeCard`;
  - `PracticeList`;
  - `PracticePlayer`.
- Добавлен сервисный слой `src/services/practice.service.ts`.

### Изменено

- Главная страница стала короче и теперь собирается из компонентов.
- `page.tsx` получает данные через `practiceService`.
- Плеер перенесен из `src/app/PracticePlayer.tsx` в `src/components/PracticePlayer`.
- Интерфейс больше не зависит напрямую от файла данных.

### Удалено

- Удален старый `src/app/PracticePlayer.tsx`.

### Проверено

- `npm run lint` проходит успешно.
- `npm run build` проходит успешно.

## 2026-06-28 — продуктовая документация

### Добавлено

- `docs/DECISIONS.md` — журнал архитектурных решений.
- `docs/BACKLOG.md` — список будущих идей и задач.
- `docs/CHANGELOG.md` — журнал изменений между этапами.

### Не изменялось

- Код приложения.
- Модель данных.
- Зависимости.
- Админка.
- Авторизация.
- Supabase-подключение.
