document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('asset-calculator');
    const inputs = form.querySelectorAll('input[type="number"]');

    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) {
                this.value = 0;
            }
        });
        input.addEventListener('input', calculateAll);
    });

    function calculateAll() {
        calculateNonInvestedAssets();
        calculateInvestedAssets();
        calculateTotalAssets();
    }

    function calculateNonInvestedAssets() {
        const bankAssets = parseFloat(document.getElementById('bank-assets').value) || 0;
        const otherNonInvestedAssets = parseFloat(document.getElementById('other-non-invested-assets').value) || 0;
        const totalNonInvested = bankAssets + otherNonInvestedAssets;
        document.getElementById('total-non-invested').textContent = totalNonInvested.toFixed(1);
    }

    function calculateInvestedAssets() {
        const securitiesAssets = parseFloat(document.getElementById('securities-assets').value) || 0;
        const insuranceAssets = parseFloat(document.getElementById('insurance-assets').value) || 0;
        const otherInvestedAssets = parseFloat(document.getElementById('other-invested-assets').value) || 0;
        const totalInvested = securitiesAssets + insuranceAssets + otherInvestedAssets;
        document.getElementById('total-invested').textContent = totalInvested.toFixed(1);
    }

    function calculateTotalAssets() {
        const totalNonInvested = parseFloat(document.getElementById('total-non-invested').textContent) || 0;
        const totalInvested = parseFloat(document.getElementById('total-invested').textContent) || 0;
        const totalAssets = totalNonInvested + totalInvested;
        document.getElementById('total-assets').textContent = totalAssets.toFixed(1);
    }

    // 初期計算
    calculateAll();
});