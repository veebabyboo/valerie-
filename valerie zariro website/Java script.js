document.addEventListener('DOMContentLoaded', () => {
    // 1. Table Row Highlighting
    const table = document.getElementById('scheduleTable');
    if (table) {
        table.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            if (row && row.parentNode.tagName === 'TBODY') {
                row.classList.toggle('highlight');
            }
        });
    }

    // 2. Dynamic Greeting
    const hour = new Date().getHours();
    console.log('Current hour:',hour);
    const heroTitle = document.getElementById('hero-title');

    //Determine the greeting
    let greeting;
    if (hour >= 0 && hour <12) {
        greeting="Good Morning!";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon!";
    } else  {
        greeting = "Good Evening!";
    }
    
    
     {   const welcome = document.createElement('p');
     welcome.innerText =`${greeting}   Welcome to our Platform.`;
        welcome.style.color = "#004a99";
        welcome.style.fontWeight ="bold"; 
        welcome.style.padding ="10px 0";
        welcome.style.margin ="10px 0";
        heroTitle.after(welcome);
    }
});
 
