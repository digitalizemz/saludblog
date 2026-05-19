const tips = [
  "Beber agua con regularidad ayuda a mantener tu energía y concentración durante el día.",
  "Caminar al menos 30 minutos diarios es una práctica simple y respaldada científicamente.",
  "Dormir entre 7 y 9 horas cada noche favorece la memoria y la recuperación física.",
  "Una dieta rica en frutas, verduras y fibra contribuye al bienestar digestivo.",
  "Tomar descansos breves durante el trabajo protege la postura y reduce el estrés.",
  "Practicar respiración profunda mejora la calma y reduce la sensación de ansiedad.",
  "Limitar el consumo de azúcares y ultraprocesados ayuda a estabilizar el estado de ánimo.",
  "Mantener relaciones sociales sanas es importante para la salud mental y emocional."
];

function mostrarTipDelDia() {
  const index = Math.floor(Math.random() * tips.length);
  const tipElement = document.getElementById("daily-tip");
  if (tipElement) {
    tipElement.textContent = tips[index];
  }
}

function init() {
  mostrarTipDelDia();
  const btn = document.getElementById("refresh-tip");
  if (btn) {
    btn.addEventListener("click", mostrarTipDelDia);
  }
}

window.addEventListener("DOMContentLoaded", init);
