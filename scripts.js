document.addEventListener('DOMContentLoaded', function() {
    loadArticles();
    loadVideos();
    loadForums();
    loadProfile();
});

function loadArticles() {
    const articles = [
        { title: 'Efficient Irrigation Techniques', content: 'Learn about drip irrigation and other efficient methods.' },
        { title: 'Rainwater Harvesting', content: 'How to collect and use rainwater effectively.' }
    ];
    const articlesContainer = document.querySelector('#articles .row');
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'col-md-6';
        articleElement.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.content}</p>
                </div>
            </div>
        `;
        articlesContainer.appendChild(articleElement);
    });
}

function loadVideos() {
    const videos = [
        { title: 'Water-Saving Tips', url: 'waterSavingTips.webm' },
        { title: 'Efficient Water Use', url: 'waterSavingTips.webm' }
    ];
    const videosContainer = document.querySelector('#videos .row');
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'col-md-6';
        videoElement.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${video.title}</h5>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="${video.url}" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        `;
        videosContainer.appendChild(videoElement);
    });
}

function loadForums() {
    const forums = [
        { title: 'Local Water-Saving Tips', content: 'Share your local knowledge on water-saving techniques.' },
        { title: 'Community Projects', content: 'Discuss community projects focused on water conservation.' }
    ];
    const forumsContainer = document.querySelector('#forums .row');
    forums.forEach(forum => {
        const forumElement = document.createElement('div');
        forumElement.className = 'col-md-6';
        forumElement.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${forum.title}</h5>
                    <p class="card-text">${forum.content}</p>
                </div>
            </div>
        `;
        forumsContainer.appendChild(forumElement);
    });
}

function calculateSavings() {
    const waterUsage = document.getElementById('waterUsage').value;
    const savings = waterUsage * 0.1; // Example calculation
    document.getElementById('savingsResult').innerText = `You can save ${savings} liters of water per day!`;
}

function loadProfile() {
    fetch('/profile', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('email').value = data.email || '';
        document.getElementById('bio').value = data.bio || '';
        document.getElementById('avatar').value = data.avatar || '';
    })
    .catch(error => console.error('Error:', error));
}

function updateProfile() {
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;
    const avatar = document.getElementById('avatar').value;

    fetch('/profile', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ email, bio, avatar })
    })
    .then(response => response.json())
    .then(data => {
        alert('Profile updated successfully!');
    })
    .catch(error => console.error('Error:', error));
}
