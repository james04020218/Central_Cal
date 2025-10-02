// Common JavaScript functions for the calculator hub

// Navigation function to open calculators
function openCalculator(calculatorType) {
    const calculatorUrls = {
        'kt': 'calculators/kt_calculator.html',
        'skt': 'calculators/skt_calculator.html',
        'lgu': 'calculators/lgu_calculator.html',
        'kt_skylife': 'calculators/kt_skylife_calculator.html',
        'hello_mobile': 'calculators/hello_mobile_calculator.html',
        'kt_mvno': 'calculators/kt_mvno_calculator.html',
        'skt_mvno': 'calculators/skt_mvno_calculator.html',
        'lgu_mvno': 'calculators/lgu_mvno_calculator.html',
        'cable_tv': 'calculators/cable_tv_calculator.html',
        'satellite_tv': 'calculators/satellite_tv_calculator.html'
    };
    
    if (calculatorUrls[calculatorType]) {
        // Add loading animation
        const button = event.target.closest('button');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>로딩중...';
        button.disabled = true;
        
        // Navigate to calculator
        setTimeout(() => {
            window.location.href = calculatorUrls[calculatorType];
        }, 500);
    } else {
        alert('준비중인 계산기입니다. 곧 서비스 예정입니다.');
    }
}

// Back to hub function
function goBackToHub() {
    window.location.href = '../index.html';
}

// Common utility functions for calculators
const CalculatorUtils = {
    // Format currency (Korean Won)
    formatCurrency: function(amount) {
        return new Intl.NumberFormat('ko-KR').format(Math.round(amount)) + '원';
    },
    
    // Parse currency string to number
    parseCurrency: function(currencyString) {
        return parseInt(currencyString.replace(/[^0-9]/g, '')) || 0;
    },
    
    // Validate form inputs
    validateInput: function(inputElement, min = 0, max = Infinity) {
        const value = parseFloat(inputElement.value) || 0;
        if (value < min || value > max) {
            inputElement.classList.add('border-red-500');
            return false;
        } else {
            inputElement.classList.remove('border-red-500');
            return true;
        }
    },
    
    // Show/hide loading state
    setLoadingState: function(element, isLoading) {
        if (isLoading) {
            element.disabled = true;
            element.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>계산중...';
        } else {
            element.disabled = false;
            element.innerHTML = element.getAttribute('data-original-text') || '계산하기';
        }
    },
    
    // Smooth scroll to element
    scrollToElement: function(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    },
    
    // Mobile detection
    isMobile: function() {
        return window.innerWidth <= 768;
    },
    
    // Show notification
    showNotification: function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 translate-x-full`;
        
        const bgColor = {
            'success': 'bg-green-500',
            'error': 'bg-red-500',
            'warning': 'bg-yellow-500',
            'info': 'bg-blue-500'
        }[type] || 'bg-blue-500';
        
        notification.className += ` ${bgColor} text-white`;
        notification.innerHTML = `
            <div class="flex items-center">
                <span class="mr-2">${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" class="ml-auto">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }
};

// Initialize common functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile-specific touches
    if (CalculatorUtils.isMobile()) {
        document.body.classList.add('mobile-optimized');
    }
    
    // Prevent form submission on Enter key for calculator forms
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') {
            e.preventDefault();
        }
    });
    
    // Add touch feedback for buttons
    document.addEventListener('touchstart', function(e) {
        if (e.target.matches('button, .btn-primary, .btn-secondary')) {
            e.target.style.transform = 'scale(0.98)';
        }
    });
    
    document.addEventListener('touchend', function(e) {
        if (e.target.matches('button, .btn-primary, .btn-secondary')) {
            setTimeout(() => {
                e.target.style.transform = '';
            }, 100);
        }
    });
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CalculatorUtils, openCalculator, goBackToHub };
}
