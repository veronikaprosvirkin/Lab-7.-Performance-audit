## Умови вимірювання
- **Пристрій / CPU:** AMD Ryzen 5 5500U with Radeon Graphics
- **ОЗП (RAM):** 16 GB
- **ОС:** Windows 11
- **Браузер:** Google Chrome (версія Incognito)
- **Throttling:** CPU 4x slowdown

## Базова лінія ("До" виправлень)

### Сценарій 1: Завантаження сторінки (Lighthouse Navigation)

| Метрика | Запуск 1 | Запуск 2 | Запуск 3 | Медіана (Базова лінія) |
| :--- | :---: | :---: | :---: | :---: |
| **Performance Score** | 9 | 9 | 9 | **9 / 100** |
| **LCP (Largest Contentful Paint)** | 5.4 s | 5.4 s | 5.4 s | **5.4 s** |
| **TBT (Total Blocking Time)** | 1810 ms | 1750 ms | 1750 ms | **1750 ms** |
| **CLS (Cumulative Layout Shift)** | 0.375 | 0.375 | 0.375 | **0.375** |
| **FCP (First Contentful Paint)** | 4.5 s | 4.5 s | 4.5 s | **4.5 s** |
| **Speed Index** | 7.7 s | 7.7 s | 7.5 s | **7.7 s** |

### Сценарій 2: Введення тексту в пошук (INP / Keyboard Interaction)

| Метрика | Запуск 1 | Запуск 2 | Запуск 3 | Медіана (Базова лінія) |
| :--- | :---: | :---: | :---: | :---: |
| **INP (Interaction to Next Paint)** | 15 199 ms | 16 337 ms | 18 457 ms | **16 337 ms** |
| **Scripting Time** | 13 541 ms | 14 718 ms | 15 183 ms | **14 718 ms** |

### Сценарій 3: Дії зі списком / Клік у «Обране» (INP / Mouse Click)

| Метрика | Запуск 1 | Запуск 2 | Запуск 3 | Медіана (Базова лінія) |
| :--- | :---: | :---: | :---: | :---: |
| **INP (Interaction to Next Paint)** | 6 211 ms | 6 770 ms | 7 366 ms | **6 770 ms** |
| **Scripting Time** | 5 472.0 ms | 5 759.7 ms | 6 038.7 ms | **5 759.7 ms** |
| **Rendering Time** | 3 149.3 ms | 3 566.2 ms | 3 494.1 ms | **3 494.1 ms** |