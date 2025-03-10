"use strict";

document.addEventListener('DOMContentLoaded', function () {
    // Получаем элементы с классом accordion_filter и добавляем обработчик события click
    let accsFilter = document.querySelectorAll('.accordion_filter');
    accsFilter.forEach(function (acc) {
        acc.addEventListener('click', function () {
            let self = this;
            toggleAccordion(self);

            // Перестраиваем высоту панели в мобильном режиме
            updateMobilePanelHeight();
        });
    });

    // Получаем элементы с классом accordion__mobile и добавляем обработчик события click
    let accsMobile = document.querySelectorAll('.accordion__mobile');
    accsMobile.forEach(function (acc) {
        acc.addEventListener('click', function () {
            let self = this;
            toggleMobileAccordion(self);
        });
    });
});

// Функция для переключения активного состояния и высоты панели в десктопном режиме
function toggleAccordion(element) {
    element.classList.toggle('active');
    let panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }

    // Обновляем состояние мобильных панелей
    let panelsToUpdate = document.querySelectorAll('.panel__mobile');
    panelsToUpdate.forEach(function (panel) {
        if (!panel.parentNode.classList.contains('active')) {
            panel.style.maxHeight = null;
        }
    });
}

// Функция для переключения активного состояния и высоты панели в мобильном режиме
function toggleMobileAccordion(element) {
    element.classList.toggle('active__mobile');
    let panel__mobile = element.nextElementSibling;
    if (panel__mobile.style.maxHeight) {
        panel__mobile.style.maxHeight = null;
    } else {
        panel__mobile.style.maxHeight = panel__mobile.scrollHeight + 'px';
    }
}

// Функция для обновления высоты панели в мобильном режиме
function updateMobilePanelHeight() {
    let mobilePanels = document.querySelectorAll('.accordion__mobile + .panel__mobile');
    mobilePanels.forEach(function (panel) {
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = 200 + panel.scrollHeight + 'px';
        }
    });
}

let acc2 = document.querySelectorAll('.accordion_category');

acc2.forEach(item => {
    item.addEventListener('click', e => {
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
            return;
        }
        acc2.forEach(e => e.classList.remove('active'));
        e.target.classList.add('active');
    });
});