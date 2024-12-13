// Initialize Chart.js
let focusChart = null;

// Store user data
let userData = {
    username: '',
    sessions: [],
    currentSession: null
};

// Load user data from localStorage
function loadUserData() {
    const savedData = localStorage.getItem('studyTimerUserData');
    if (savedData) {
        userData = JSON.parse(savedData);
        document.getElementById('username-input').value = userData.username || '';
        updateReport();
    }
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('studyTimerUserData', JSON.stringify(userData));
}

// Handle username input
document.getElementById('username-input').addEventListener('input', (e) => {
    userData.username = e.target.value;
    saveUserData();
});

// Start a new session
function startSession() {
    userData.currentSession = {
        startTime: new Date().toISOString(),
        duration: 0,
        type: currentMode
    };
}

// End current session
function endSession() {
    if (userData.currentSession) {
        userData.currentSession.duration = totalTimeInMinutes;
        userData.sessions.push(userData.currentSession);
        userData.currentSession = null;
        saveUserData();
        updateReport();
    }
}

// Update report statistics
function updateReport() {
    const period = document.querySelector('.date-btn.active').dataset.period;
    const filteredSessions = filterSessionsByPeriod(period);
    
    // Update stats
    updateStats(filteredSessions);
    
    // Update chart
    updateChart(filteredSessions);
    
    // Update history
    updateHistory(filteredSessions);
}

// Filter sessions by time period
function filterSessionsByPeriod(period) {
    const now = new Date();
    const sessions = userData.sessions;
    
    switch(period) {
        case 'day':
            return sessions.filter(session => {
                const sessionDate = new Date(session.startTime);
                return sessionDate.toDateString() === now.toDateString();
            });
        case 'week':
            const weekAgo = new Date(now.setDate(now.getDate() - 7));
            return sessions.filter(session => new Date(session.startTime) >= weekAgo);
        case 'month':
            const monthAgo = new Date(now.setMonth(now.getMonth() - 1));
            return sessions.filter(session => new Date(session.startTime) >= monthAgo);
        default:
            return sessions;
    }
}

// Update statistics cards
function updateStats(sessions) {
    const totalMinutes = sessions.reduce((sum, session) => sum + session.duration, 0);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    
    document.getElementById('total-focus-time').textContent = `${hours}h ${minutes}m`;
    document.getElementById('total-sessions').textContent = sessions.length;
    document.getElementById('average-focus').textContent = 
        sessions.length ? `${Math.round(totalMinutes / sessions.length)}m` : '0m';
}

// Update chart
function updateChart(sessions) {
    const ctx = document.getElementById('focus-chart').getContext('2d');
    
    // Group sessions by date
    const dailyData = {};
    sessions.forEach(session => {
        const date = new Date(session.startTime).toLocaleDateString();
        dailyData[date] = (dailyData[date] || 0) + session.duration;
    });
    
    const data = {
        labels: Object.keys(dailyData),
        datasets: [{
            label: 'Focus Minutes',
            data: Object.values(dailyData),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };
    
    if (focusChart) {
        focusChart.destroy();
    }
    
    focusChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Minutes'
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Update history list
function updateHistory(sessions) {
    const historyList = document.getElementById('focus-history-list');
    historyList.innerHTML = '';
    
    sessions.sort((a, b) => new Date(b.startTime) - new Date(a.startTime))
        .slice(0, 10)  // Show only last 10 sessions
        .forEach(session => {
            const date = new Date(session.startTime).toLocaleDateString();
            const item = document.createElement('div');
            item.className = 'history-item';
            item.innerHTML = `
                <span>${date} - ${session.type}</span>
                <span>${session.duration} minutes</span>
            `;
            historyList.appendChild(item);
        });
}

// Handle date filter buttons
document.querySelectorAll('.date-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.date-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        updateReport();
    });
});

// Load user data on page load
document.addEventListener('DOMContentLoaded', loadUserData);

// Add event listeners for timer start/stop to track sessions
document.addEventListener('timerStart', startSession);
document.addEventListener('timerComplete', endSession);
