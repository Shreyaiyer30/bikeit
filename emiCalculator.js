function calculateEMI() {
    const price = parseFloat(document.getElementById('price').value);
    const downPayment = parseFloat(document.getElementById('downpayment').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const months = parseInt(document.getElementById('months').value);

    const loanAmount = price - downPayment;
    const monthlyInterestRate = rate / (12 * 100);
    const emi = (loanAmount * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), months)) / (Math.pow((1 + monthlyInterestRate), months) - 1);

    document.getElementById('emi-result').innerText = `Your Monthly EMI: $${emi.toFixed(2)}`;
}
