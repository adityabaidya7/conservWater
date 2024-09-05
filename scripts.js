document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('#articles-container')) {
        loadArticles();
    }
    if (document.querySelector('#videos-container')) {
        loadVideos();
    }
    if (document.querySelector('#forums')) {
        loadForums();
    }
    if (document.querySelector('#complaints')) {
        setupComplaintsForm();
    }
});

function loadArticles() {
    const articles = [
        { title: 'World Water Day', content: "World Water Day is an annual United Nations (UN) observance day held on the 22nd of March that highlights the importance of fresh water. The day is used to advocate for the sustainable management of freshwater resources. The theme of each year focuses on topics relevant to clean water, sanitation and hygiene (WASH), which is in line with the targets of Sustainable Development Goal 6. The UN World Water Development Report (WWDR) is released each year around World Water Day.UN-Water is the convener for World Water Day and selects the theme for each year in consultation with UN organizations that share an interest in that year's focus. The theme for 2021 was \"Valuing Water\" and the public campaign invited people to join a global conversation on social media to \"tell us your stories, thoughts and feelings about water\".In 2020, the theme was \"Water and Climate Change\". Previous themes for the years 2016 to 2019 were \"Water and Jobs'\", \"Why waste water?\" \"Nature for Water\", and \"Leaving no one behind\". World Water Day is celebrated around the world with a variety of events. These can be theatrical, musical or lobbying in nature. The day can also include campaigns to raise money for water projects. The first World Water Day, designated by the United Nations, was in 1993." },
        { title: 'Water scarcity in India', content: " Water scarcity in India is an ongoing water crisis that affects nearly hundreds of million of people each year. In addition to affecting the huge rural and urban population, the water scarcity in India also extensively affects the ecosystem and agriculture. India has only 4% of the world's fresh water resources despite a population of over 1.4 billion people. In addition to the disproportionate availability of freshwater, water scarcity in India also results from drying up of rivers and their reservoirs in the summer months, right before the onset of the monsoons throughout the country. The crisis has especially worsened in the recent years due to climate change which results in delayed monsoons, consequently drying out reservoirs in several regions. Other factors attributed to the shortage of water in India are a lack of proper infrastructure and government oversight and unchecked water pollution.Several large cities of India have experienced water shortages in recent years, with Chennai being the most prominent in 2019. The shortage of water affected the entire city of 9 million people and resulted in the closure of several hotels, restaurants and businesses.The acute shortage of water for daily needs has prompted many government and non government organizations to take stringent measures to combat the problem." },
        { title: 'Water efficiency', content: "Water efficiency is the practice of reducing water consumption  by measuring the amount of water required for a particular purpose and is proportionate to the amount of essential water used. Water efficiency differs from water conservation in that it focuses on reducing waste, not restricting use. Solutions for water efficiency not only focus on reducing the amount of potable water used but also on reducing the use of non-potable water where appropriate (e.g. flushing toilet, watering landscape, etc.). It also emphasizes the influence consumers can have on water efficiency by making small behavioral changes to reduce water wastage, and by choosing more water-efficient products. According to the UN World Water Development Report, over the past 100 years, global water use has increased by a factor of six. Annually, the rate steadily increases at an estimated amount of one percent as a result of population increase, economic development and changing consumption patterns." },
        { title: 'Groundwater recharge', content: 'Groundwater recharge or deep drainage or deep percolation is a hydrologic process, where water moves downward from surface water to groundwater. Recharge is the primary method through which water enters an aquifer. This process usually occurs in the vadose zone below plant roots and is often expressed as a flux to the water table surface. Groundwater recharge also encompasses water moving away from the water table farther into the saturated zone. Recharge occurs both naturally (through the water cycle) and through anthropogenic processes (i.e., "artificial groundwater recharge"), where rainwater and/or reclaimed water is routed to the subsurface.The most common methods to estimate recharge rates are: chloride mass balance (CMB); soil physics methods; environmental and isotopic tracers; groundwater-level fluctuation methods; water balance (WB) methods (including groundwater models (GMs)); and the estimation of baseflow (BF) to rivers.' },
        { title: 'Sustainable water management', content: "Water resources are natural resources of water that are potentially useful for humans, for example as a source of drinking water supply or irrigation water. These resources can be either freshwater from natural sources, or water produced artificially from other sources, such as from reclaimed water (wastewater) or desalinated water (seawater). 97% of the water on Earth is salt water and only three percent is fresh water; slightly over two-thirds of this is frozen in glaciers and polar ice caps. The remaining unfrozen freshwater is found mainly as groundwater, with only a small fraction present above ground or in the air. Natural sources of fresh water include surface water, under river flow, groundwater and frozen water. People use water resources for agricultural, industrial and household activities.Water resources are under threat from multiple issues. There is water scarcity, water pollution, water conflict and climate change. Fresh water is in principle a renewable resource. However, the world's supply of groundwater is steadily decreasing. Groundwater depletion (or overdrafting) is occurring for example in Asia, South America and North America." },
        { title: 'Water crisis', content: "Water scarcity (closely related to water stress or water crisis) is the lack of fresh water resources to meet the standard water demand. There are two type of water scarcity. One is physical. The other is economic water scarcity.: 560  Physical water scarcity is where there is not enough water to meet all demands. This includes water needed for ecosystems to function. Regions with a desert climate often face physical water scarcity. Central Asia, West Asia, and North Africa are examples of arid areas. Economic water scarcity results from a lack of investment in infrastructure or technology to draw water from rivers, aquifers, or other water sources. It also results from weak human capacity to meet water demand. Many people in Sub-Saharan Africa are living with economic water scarcity. There is enough freshwater available globally and averaged over the year to meet demand. As such, water scarcity is caused by a mismatch between when and where people need water, and when and where it is available. One of the main causes of the increase in global water demand is the increase in the number of people. Others are the rise in living conditions, changing diets (to more animal products), and expansion of irrigated agriculture." }
    ];
    const articlesContainer = document.querySelector('#articles-container');
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
        { title: 'Water-Saving Tips', url: 'videoplayback5.webm' },
        { title: 'Efficient Water Use', url: 'videoplayback4.webm' },
        { title: 'Water Conservation in Agriculture', url: 'videoplayback2.mp4' },
        { title: 'Urban Water Management Strategies', url: 'videoplayback3.mp4' }
    ];
    const videosContainer = document.querySelector('#videos-container');
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'col-md-6';
        videoElement.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${video.title}</h5>
                    <video controls class="video-element" preload="auto">
                        <source src="${video.url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        `;
        videosContainer.appendChild(videoElement);
    });
}

function loadForums() {
    const forums = [
        { title: 'General Discussion', description: 'Talk about anything related to water efficiency.' },
        { title: 'Technical Support', description: 'Get help with technical issues.' }
    ];
    const forumsContainer = document.querySelector('#forums .row');
    forums.forEach(forum => {
        const forumElement = document.createElement('div');
        forumElement.className = 'col-md-6';
        forumElement.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${forum.title}</h5>
                    <p class="card-text">${forum.description}</p>
                </div>
            </div>
        `;
        forumsContainer.appendChild(forumElement);
    });
}

function setupComplaintsForm() {
    const form = document.querySelector('#complaints form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const complaint = document.querySelector('#complaint').value;
        alert('Complaint submitted: ' + complaint);
    });
}

function redirectToSignUp() {
    window.location.href = 'signup.html';
}

function redirectToSignIn() {
    window.location.href = 'signin.html';
}

document.getElementById('bodForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dissolvedOxygenInitial = parseFloat(document.getElementById('dissolvedOxygenInitial').value);
    const dissolvedOxygenFinal = parseFloat(document.getElementById('dissolvedOxygenFinal').value);

    // Ensure initial DO is greater than final DO
    if (dissolvedOxygenInitial < dissolvedOxygenFinal) {
        alert("Initial dissolved oxygen must be greater than final dissolved oxygen.");
        return;
    }

    // Calculate BOD: BOD = DO_initial - DO_final
    const bod = dissolvedOxygenInitial - dissolvedOxygenFinal;

    let resultMessage = `BOD of the water sample is ${bod.toFixed(2)} mg/L.`;
    const resultElement = document.getElementById('result');
    resultElement.classList.remove('clean-water', 'moderately-polluted', 'highly-polluted'); // Remove any previous color class

    if (bod > 5) {
        resultMessage += " The water is highly polluted.";
        resultElement.classList.add('highly-polluted'); // Dark red
    } else if (bod > 3) {
        resultMessage += " The water is moderately polluted.";
        resultElement.classList.add('moderately-polluted'); // Light red
    } else {
        resultMessage += " The water is clean.";
        resultElement.classList.add('clean-water'); // Green
    }

    resultElement.innerText = resultMessage;
});

// Dark/Light mode toggle
const toggleButton = document.getElementById('toggleMode');
const body = document.body;
const container = document.querySelector('.container');

toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerText = 'Switch to Light Mode';
    } else {
        toggleButton.innerText = 'Switch to Dark Mode';
    }
});





