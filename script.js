const teamStatsData = [
    { teamId: 'Arizona Cardinals', wins: 7, losses: 3 },
    { teamId: 'Houston Texans', wins: 5, losses: 4 },
    { teamId: 'Detroit Lions', wins: 5, losses: 6 },
];

const userBetsData = [
    { betId: 1, amount: 50, status: 'Active' },
    { betId: 2, amount: 30, status: 'Completed' },
    { betId: 3, amount: 20, status: 'Pending' },
];

const liveEventsData = [
    { eventId: 101, name: 'Football Match', status: 'In Progress' },
    { eventId: 102, name: 'Basketball Game', status: 'Scheduled' },
    { eventId: 103, name: 'Tennis Tournament', status: 'Completed' },
];

const userProfileData = [
    { userId: 1, username: 'samkeusen', email: 'skeusen@maryville.edu' }
];

const playerMetricsData = [
    { player: 'PlayerOne', score: 50, percentage: 60 },
    { player: 'PlayerTwo', score: 70, percentage: 80 },
    { player: 'PlayerThree', score: 90, percentage: 100 },
];

// Function to populate the table with data
function populateTable(tableId, data) {
    const table = document.getElementById(tableId);
    const tbody = table.querySelector('tbody');

    // Clear existing rows
    tbody.innerHTML = '';

    // Populate the table with data
    data.forEach(item => {
        const row = document.createElement('tr');
row.style.transition = 'background-color 0.3s ease';
row.onmouseover = function() {
    this.style.backgroundColor = '#ff7f50';
}
row.onmouseout = function() {
    this.style.backgroundColor = '';
}
        Object.values(item).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
}

// Call the function to populate User Bets and Live Events tables
populateTable('teamStatsTable', teamStatsData);
populateTable('userBetsTable', userBetsData);
populateTable('liveEventsTable', liveEventsData);
populateTable('userProfileTable', userProfileData);
populateTable('playerMetricsTable', playerMetricsData);
populatePlayerMetricsTable();