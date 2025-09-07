// navigation.js - Tab Navigation Handler

document.addEventListener('DOMContentLoaded', function() {
    // Tab Navigation
    const tabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.style.display = 'none';
            });
            
            // WICHTIG: Verstecke Ones to Watch Stadtteil-Properties wenn anderer Tab gewählt wird
            if (targetTab !== 'ones-to-watch') {
                const stadtteilProperties = document.getElementById('stadtteilProperties');
                if (stadtteilProperties) {
                    stadtteilProperties.style.display = 'none';
                }
                const stadtteilList = document.getElementById('stadtteilList');
                if (stadtteilList) {
                    stadtteilList.style.display = 'none';
                }
            }
            
            // Show target tab content
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.style.display = 'block';
                
                // Lade spezifische Inhalte beim Tab-Wechsel
                switch(targetTab) {
                    case 'top-empfehlungen':
                        loadTopEmpfehlungen();
                        break;
                    case 'ones-to-watch':
                        loadOnestoWatch();
                        // Stelle sicher, dass die Liste angezeigt wird
                        const stadtteilList = document.getElementById('stadtteilList');
                        if (stadtteilList) {
                            stadtteilList.style.display = 'block';
                        }
                        break;
                   case 'heat-map':
    // Keine weitere Aktion nötig, iframe lädt automatisch
    break;
                    case 'swipen':
                        loadSwipeCard();
                        break;
                }
            }
        });
    });
});