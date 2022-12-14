# JavaScript_website_Korenskiy_Lawyer_functional 
 
 
##### Реализация данного сайта через библиотеку React
[React_website_Korenskiy_Lawyer](https://github.com/AntonioMikhailov/React_website_Korenskiy_Lawyer 'React_website_Korenskiy_Lawyer')



![alt text](https://github.com/AntonioMikhailov/AntonioMikhailov/blob/main/assets/korenskiy-small.png)
## Задача
 1.	Создать лендинг на тему: адвокатская контора
2.	Дизайн сайта выполнить на основе шаблона Figma
3.	Реализовать 100% адаптивность для каждой секции во всем диапазоне ширин современных экранов
4.	Реализовать функциональность (интерактивность) с юзером по средством модулей:  аккордеоны, слайдеры, плавный скролл наверх страницы , карты Яндекс API

&nbsp;
## Используемые языки, технологии, пакеты:
- JavaScript, HTML, CSS
- GULP (WebPack)


&nbsp;
## Реализация функционала и логики
 
- Разработка сайта осуществляется на основе функционального подхода ( есть вариант на React App) 
- Устанавливаем и настраиваем GULP
- Создаем список задач для GULP:  копирование файлов, конвертация шрифтов в woff, конвертация изображений в webp, подключаем Babel,  архивация сборки в zip файл
- Создаем структуру CSS и HTML файлов
- Реализуем функциональность отдельных секций на основе ТЗ
- **Особенности реализации проекта:**
        - в секции Примеры наших дел  применена компенсация вертикального сдвига аккордеона при открытии
    - плавный скролл по кнопке наверх реализован через метод RequestAnimationFrame с возможность изменять скорость скролла
    - при переходах между секциями меняется Title