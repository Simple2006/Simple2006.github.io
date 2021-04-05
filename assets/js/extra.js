function gitredirect() {
    window.open("https://github.com/Simple2006/libmaths", "_blank")
}

function pypiredirect() {
    window.open("https://pypi.org/project/libmaths/", "_blank")
}

function armvisionredirect() {
    window.open("https://github.com/Simple2006/armvision", "_blank")
}

function voicenotesredirect() {
    window.open("https://github.com/Simple2006/voicenotes", "_blank")
}

function covidredirect() {
    window.open("https://github.com/Simple2006/covidtracker", "_blank")
}

function covidsiteredirect() {
    window.open("https://simple2006.github.io/covidtracker", "_blank")
}

function fetchocgn() {
    const symbol = "OCGN";
    const apikey = "c1hbkav48v6t9ghtre6g";

    const options = {
        method: 'GET',
        url: `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apikey}`
    };

    axios.request(options).then(function (response) {
        //console.log(response.data["c"]);
        alert("$OCGN Stock Price Is: $" + response.data["c"]);
    }).catch(function (error) {
        console.error(error);
    });
}

function fetchepwcf() {
    const symbol = "EPWCF";
    const apikey = "c1hbkav48v6t9ghtre6g";

    const options = {
        method: 'GET',
        url: `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apikey}`
    };

    axios.request(options).then(function (response) {
        //console.log(response.data["c"]);
        alert("$EPWCF Stock Price Is: $" + response.data["c"]);
    }).catch(function (error) {
        console.error(error);
    });
}

function fetchzom() {
    const symbol = "ZOM";
    const apikey = "c1hbkav48v6t9ghtre6g";

    const options = {
        method: 'GET',
        url: `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apikey}`
    };

    axios.request(options).then(function (response) {
        //console.log(response.data["c"]);
        alert("$ZOM Stock Price Is: $" + response.data["c"]);
    }).catch(function (error) {
        console.error(error);
    });
}