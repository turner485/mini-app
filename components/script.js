// API Fetch
const url = "https://wookie.codesubmit.io/time-tracking";

const options = {
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
    }
}

const fetchUrl = fetch(url, options)
    .then(res => {return res.json();})
    .then(data => {return data;
});

// Declare globals
const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');
const recentTime = document.querySelectorAll('.client-modules__data__recent-time-text');
/* --- */

// on load show weekly stats
async function defaultApp() {
    let data = await fetchUrl;
    for (let a = 0; a < data.length; a++) {
        const weeklyCurrent = document.querySelectorAll('.client-modules__data__time');
        weeklyCurrent[a].innerHTML = data[a].timeframes.weekly.current + "hrs"
        const weeklyPrev = document.querySelectorAll('.client-modules__data__recent-time');
        weeklyPrev[a].innerHTML = data[a].timeframes.weekly.previous + "hrs"
        recentTime[a].innerHTML = "Last Week -";
    }
    dailyStats()
    weeklyStats()
    monthlyStats()
}

// daily cta click show daily stats
async function dailyStats() {
    let data = await fetchUrl;
    daily.addEventListener('click', function handleClick() {
        for (let a = 0; a < data.length; a++) {
            const dailyCurrent = document.querySelectorAll('.client-modules__data__time');
            dailyCurrent[a].innerHTML = data[a].timeframes.daily.current + "hrs"
            const dailyPrev = document.querySelectorAll('.client-modules__data__recent-time');
            dailyPrev[a].innerHTML = data[a].timeframes.daily.previous + "hrs"
            recentTime[a].innerHTML = "Yesterday -";
        }
        ctaActiveRemove()
        daily.classList.add('active');
    })
}

// daily cta click show weekly stats
function weeklyStats() {
    weekly.addEventListener('click', function handleClick() {
        defaultApp()
    })
    ctaActiveRemove()
    weekly.classList.add('active');
}

// monthly cta click show monthly stats
async function monthlyStats() {
    let data = await fetchUrl;
    monthly.addEventListener('click', function handleClick() {
        for (let a = 0; a < data.length; a++) {
            const monthlyCurrent = document.querySelectorAll('.client-modules__data__time');
            monthlyCurrent[a].innerHTML = data[a].timeframes.monthly.current + "hrs"
            const monthlyPrev = document.querySelectorAll('.client-modules__data__recent-time');
            monthlyPrev[a].innerHTML = data[a].timeframes.monthly.previous + "hrs"
            recentTime[a].innerHTML = "Last Month -";
        }
        ctaActiveRemove()
        monthly.classList.add('active');
    })
}

function ctaActiveRemove() {
    removeActive = document.querySelectorAll('.client-card__frequency p');
    removeActive.forEach(cta => {
        cta.classList.remove('active')
    });
}

//Call func
defaultApp()