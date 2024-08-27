// Function to show modal
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Function to close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Add event listeners to buttons
document.getElementById('sendMoneyBtn').addEventListener('click', function() {
    showModal('paymentModal');
});

document.getElementById('receiveMoneyBtn').addEventListener('click', function() {
    showModal('paymentModal');
});

document.getElementById('transactionHistoryBtn').addEventListener('click', function() {
    showModal('historyModal');
});

document.getElementById('scanQRBtn').addEventListener('click', function() {
    showModal('panhandlerModal');
});

document.getElementById('homeBtn').addEventListener('click', function() {
    // No modal for home, just reload or reset the home screen
    location.reload();
});

document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', function() {
        closeModal(this.closest('.modal').id);
    });
});

document.getElementById('customizationModalBtn').addEventListener('click', function() {
    showModal('customizationModal');
});

document.getElementById('topUpModalBtn').addEventListener('click', function() {
    showModal('topUpModal');
});
