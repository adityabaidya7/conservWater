document.getElementById('calculator-btn').addEventListener('click', function () {
    const calculator = document.getElementById('calculator');
    calculator.style.display = calculator.style.display === 'none' ? 'block' : 'none';
});

function calculateSavings() {
    const usage = document.getElementById('waterUsage').value;
    const savings = usage * 0.2; // Assume a 20% reduction with water-saving techniques
    document.getElementById('savingsResult').textContent = `You can save approximately ${savings} liters of water per day.`;
}
