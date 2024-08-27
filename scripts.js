// Utility function to open modals
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Utility function to close modals
function closeModal(modal) {
    modal.style.display = 'none';
}

// Event Listeners for Opening Modals
document.getElementById('scanQRBtn').addEventListener('click', () => openModal('scanQRModal'));
document.getElementById('showQRBtn').addEventListener('click', () => openModal('showQRModal'));
document.getElementById('sendMoneyBtn').addEventListener('click', () => openModal('sendMoneyModal'));
document.getElementById('receiveMoneyBtn').addEventListener('click', () => openModal('receiveMoneyModal'));
document.getElementById('transactionHistoryBtn').addEventListener('click', () => openModal('transactionHistoryModal'));
document.getElementById('moreDetailsBtn').addEventListener('click', () => openModal('moreDetailsModal'));
document.getElementById('generateInvoiceBtn').addEventListener('click', generateInvoice);
document.getElementById('resetInvoiceBtn').addEventListener('click', resetInvoice);
document.getElementById('topUpBtn').addEventListener('click', () => openModal('topUpModal'));
document.getElementById('customizationBtn').addEventListener('click', () => openModal('customizationModal'));
document.getElementById('notificationsBtn').addEventListener('click', () => openModal('notificationsModal'));
document.getElementById('donateBtn').addEventListener('click', () => openModal('sendMoneyModal'));
document.getElementById('tipServiceWorkerBtn').addEventListener('click', () => openModal('sendMoneyModal'));
document.getElementById('sendToContactBtn').addEventListener('click', () => openModal('sendMoneyModal'));
document.getElementById('payAtStoreBtn').addEventListener('click', () => openModal('scanQRModal'));

// Event Listener for Closing Modals
document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => closeModal(button.parentElement.parentElement));
});

// Invoice Generation Logic
function generateInvoice() {
    let totalAmount = 0;
    const items = document.querySelectorAll('.items-list .item');
    items.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').innerText);
        const price = parseFloat(item.querySelector('span').innerText.split('$')[1]);
        totalAmount += quantity * price;
    });
    document.getElementById('invoiceAmount').innerText = `$${totalAmount.toFixed(2)}`;
    openModal('invoiceModal');
}

// Reset Invoice Logic
function resetInvoice() {
    const items = document.querySelectorAll('.items-list .item');
    items.forEach(item => {
        item.querySelector('.quantity').innerText = '0';
    });
}

// Quantity Control Buttons Logic
document.querySelectorAll('.increase-btn').forEach(button => {
    button.addEventListener('click', () => {
        const quantityElem = button.previousElementSibling;
        let quantity = parseInt(quantityElem.innerText);
        quantityElem.innerText = ++quantity;
    });
});

document.querySelectorAll('.decrease-btn').forEach(button => {
    button.addEventListener('click', () => {
        const quantityElem = button.nextElementSibling;
        let quantity = parseInt(quantityElem.innerText);
        if (quantity > 0) {
            quantityElem.innerText = --quantity;
        }
    });
});

// Form Submission Handlers
document.getElementById('sendMoneyForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Implement send money logic here
    alert('Money Sent Successfully!');
    closeModal(document.getElementById('sendMoneyModal'));
});

document.getElementById('receiveMoneyForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Implement receive money logic here
    alert('Money Request Sent!');
    closeModal(document.getElementById('receiveMoneyModal'));
});

document.getElementById('topUpForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Implement top-up logic here
    alert('Balance Topped Up Successfully!');
    closeModal(document.getElementById('topUpModal'));
});

document.getElementById('customizationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedRole = document.getElementById('roleSelect').value;
    const selectedTheme = document.getElementById('themeSelect').value;
    // Implement customization logic here
    alert(`Role set to ${selectedRole} with ${selectedTheme} theme.`);
    closeModal(document.getElementById('customizationModal'));
});

// Close modal when clicking outside modal content
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});
