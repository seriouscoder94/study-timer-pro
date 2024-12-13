// Timer functionality
class Timer {
    constructor() {
        this.timeLeft = 25 * 60; // 25 minutes in seconds
        this.isRunning = false;
        this.interval = null;
        
        // Timer elements
        this.timerDisplay = document.getElementById('timer');
        this.startBtn = document.getElementById('start-btn');
        this.pauseBtn = document.getElementById('pause-btn');
        this.resetBtn = document.getElementById('reset-btn');
        this.workDurationInput = document.getElementById('work-duration');
        this.breakDurationInput = document.getElementById('break-duration');
        
        // Initialize timer controls
        this.initializeControls();
        this.updateDisplay();
    }

    initializeControls() {
        this.startBtn.addEventListener('click', () => this.start());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.resetBtn.addEventListener('click', () => this.reset());
        
        this.workDurationInput.addEventListener('change', () => {
            if (!this.isRunning) {
                this.timeLeft = this.workDurationInput.value * 60;
                this.updateDisplay();
            }
        });
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.startBtn.style.display = 'none';
            this.pauseBtn.style.display = 'inline-block';
            
            // Dispatch timer start event
            document.dispatchEvent(new Event('timerStart'));
            
            this.interval = setInterval(() => {
                this.timeLeft--;
                this.updateDisplay();
                
                if (this.timeLeft <= 0) {
                    clearInterval(this.interval);
                    this.isRunning = false;
                    this.startBtn.style.display = 'inline-block';
                    this.pauseBtn.style.display = 'none';
                    
                    // Dispatch timer complete event
                    document.dispatchEvent(new Event('timerComplete'));
                    
                    this.playAlarm();
                }
            }, 1000);
        }
    }

    pause() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.interval);
            this.startBtn.style.display = 'inline-block';
            this.pauseBtn.style.display = 'none';
        }
    }

    reset() {
        this.pause();
        this.timeLeft = this.workDurationInput.value * 60;
        this.updateDisplay();
    }

    updateDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        this.timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    playAlarm() {
        // Play a notification sound when timer ends
        const audio = new Audio('https://cdn.pixabay.com/download/audio/2021/08/04/audio_12b0c7443c.mp3');
        audio.play();
    }
}

// Tab Management
class TabManager {
    constructor() {
        this.tabs = document.querySelectorAll('.tab-btn');
        this.tabPanes = document.querySelectorAll('.tab-pane');
        this.initializeTabs();
    }

    initializeTabs() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and panes
                this.tabs.forEach(t => t.classList.remove('active'));
                this.tabPanes.forEach(p => p.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding pane
                tab.classList.add('active');
                const pane = document.getElementById(tab.dataset.tab);
                if (pane) {
                    pane.classList.add('active');
                }
            });
        });
    }
}

// Task Management
class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.taskInput = document.getElementById('task-input');
        this.addTaskBtn = document.getElementById('add-task-btn');
        this.taskList = document.getElementById('task-list');
        
        this.initializeTaskHandlers();
        this.renderTasks();
    }

    initializeTaskHandlers() {
        this.addTaskBtn.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTask();
            }
        });
    }

    addTask() {
        const taskText = this.taskInput.value.trim();
        if (taskText) {
            const task = {
                id: Date.now(),
                text: taskText,
                completed: false
            };
            this.tasks.push(task);
            this.saveTasks();
            this.renderTasks();
            this.taskInput.value = '';
        }
    }

    toggleTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.renderTasks();
        }
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
        this.saveTasks();
        this.renderTasks();
    }

    renderTasks() {
        this.taskList.innerHTML = '';
        this.tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskElement.innerHTML = `
                <input type="checkbox" ${task.completed ? 'checked' : ''}>
                <span class="task-text">${task.text}</span>
                <button class="delete-task"><i class="fas fa-trash"></i></button>
            `;
            
            const checkbox = taskElement.querySelector('input');
            checkbox.addEventListener('change', () => this.toggleTask(task.id));
            
            const deleteBtn = taskElement.querySelector('.delete-task');
            deleteBtn.addEventListener('click', () => this.deleteTask(task.id));
            
            this.taskList.appendChild(taskElement);
        });
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}

// Minimize functionality
const minimizeBtn = document.getElementById('minimize-btn');
const timerContent = document.querySelector('.timer-content');
let isMinimized = false;

minimizeBtn.addEventListener('click', () => {
    isMinimized = !isMinimized;
    timerContent.classList.toggle('minimized');
    minimizeBtn.textContent = isMinimized ? '➕' : '➖';
});

// Minimize middle section functionality
const minimizeMiddleBtn = document.getElementById('minimize-middle-btn');
const middleContent = document.querySelector('.middle-content');
let isMiddleMinimized = false;

minimizeMiddleBtn.addEventListener('click', () => {
    isMiddleMinimized = !isMiddleMinimized;
    middleContent.classList.toggle('minimized');
    minimizeMiddleBtn.textContent = isMiddleMinimized ? '➕' : '➖';
});

// Minimize functionality for themes and tasks
const minimizeThemesBtn = document.getElementById('minimize-themes-btn');
const minimizeTasksBtn = document.getElementById('minimize-tasks-btn');
const themesContent = document.querySelector('.themes-content');
const tasksContent = document.querySelector('.tasks-content');
let isThemesMinimized = false;
let isTasksMinimized = false;

minimizeThemesBtn.addEventListener('click', () => {
    isThemesMinimized = !isThemesMinimized;
    themesContent.classList.toggle('minimized');
    minimizeThemesBtn.textContent = isThemesMinimized ? '➕' : '➖';
});

minimizeTasksBtn.addEventListener('click', () => {
    isTasksMinimized = !isTasksMinimized;
    tasksContent.classList.toggle('minimized');
    minimizeTasksBtn.textContent = isTasksMinimized ? '➕' : '➖';
});

// Minimize content section functionality
const minimizeContentBtn = document.getElementById('minimize-content-btn');
const contentSection = document.querySelector('.content-section');
let isContentMinimized = false;

minimizeContentBtn.addEventListener('click', () => {
    isContentMinimized = !isContentMinimized;
    contentSection.classList.toggle('minimized');
    minimizeContentBtn.textContent = isContentMinimized ? '➕' : '➖';
});

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
    const timer = new Timer();
    const tabManager = new TabManager();
    const taskManager = new TaskManager();
});
