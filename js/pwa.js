// PWA Handler
class PWAHandler {
    constructor() {
<<<<<<< HEAD
        this.deferredPrompt = true;
=======
        this.deferredPrompt = null;
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        this.init();
    }

    init() {
        this.setupInstallPrompt();
        this.setupPWAInstall();
        this.setupOnlineOffline();
    }

    setupInstallPrompt() {
<<<<<<< HEAD
=======
        // PWA Install Prompt
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        const pwaPrompt = document.getElementById('pwaPrompt');
        const installPWA = document.getElementById('installPWA');
        const dismissPWA = document.getElementById('dismissPWA');
        const closePWA = document.getElementById('closePWA');
        
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            
<<<<<<< HEAD
=======
            // Show prompt after 10 seconds
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
            setTimeout(() => {
                if (pwaPrompt && !localStorage.getItem('pwaPromptDismissed')) {
                    pwaPrompt.classList.add('show');
                }
            }, 10000);
        });
        
        if (installPWA) {
            installPWA.addEventListener('click', () => {
                if (this.deferredPrompt) {
                    this.deferredPrompt.prompt();
                    this.deferredPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('User installed PWA');
                        }
                        this.deferredPrompt = null;
                    });
                }
                if (pwaPrompt) {
                    pwaPrompt.classList.remove('show');
                }
            });
        }
        
        if (dismissPWA) {
            dismissPWA.addEventListener('click', () => {
                if (pwaPrompt) {
                    pwaPrompt.classList.remove('show');
                    localStorage.setItem('pwaPromptDismissed', 'true');
                }
            });
        }
        
        if (closePWA) {
            closePWA.addEventListener('click', () => {
                if (pwaPrompt) {
                    pwaPrompt.classList.remove('show');
                    localStorage.setItem('pwaPromptDismissed', 'true');
                }
            });
        }
    }

    setupPWAInstall() {
        const installBtn = document.getElementById('installBtn');
        
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            
            if (installBtn) {
                installBtn.style.display = 'flex';
                
                installBtn.addEventListener('click', () => {
                    installBtn.style.display = 'none';
                    if (this.deferredPrompt) {
                        this.deferredPrompt.prompt();
                        this.deferredPrompt.userChoice.then((choiceResult) => {
                            if (choiceResult.outcome === 'accepted') {
                                console.log('User installed PWA');
                            }
                            this.deferredPrompt = null;
                        });
                    }
                });
            }
        });
        
        window.addEventListener('appinstalled', () => {
            console.log('PWA installed successfully');
            if (installBtn) {
                installBtn.style.display = 'none';
            }
            const pwaPrompt = document.getElementById('pwaPrompt');
            if (pwaPrompt) {
                pwaPrompt.classList.remove('show');
            }
        });
    }

    setupOnlineOffline() {
<<<<<<< HEAD
=======
        // Update UI based on network status
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        const updateStatus = () => {
            const isOnline = navigator.onLine;
            const offlineIndicator = document.getElementById('offlineIndicator');
            
            if (offlineIndicator) {
                if (!isOnline) {
                    offlineIndicator.classList.add('show');
                } else {
                    offlineIndicator.classList.remove('show');
                }
            }
        };

        window.addEventListener('online', updateStatus);
        window.addEventListener('offline', updateStatus);
        
<<<<<<< HEAD
=======
        // Initial status
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        updateStatus();
    }
}

<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    window.pwaHandler = new PWAHandler();
});
=======
// Initialize PWA handler
document.addEventListener('DOMContentLoaded', () => {
    window.pwaHandler = new PWAHandler();
});
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
