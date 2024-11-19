document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы
    document.getElementById('successMessage').classList.remove('hidden'); // Показываем сообщение об успехе
    this.reset(); // Сбрасываем поля формы
  });
