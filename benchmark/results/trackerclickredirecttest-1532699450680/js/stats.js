var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30000",
        "ok": "30000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3312",
        "ok": "3312",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "337",
        "ok": "337",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "533",
        "ok": "533",
        "ko": "-"
    },
    "percentiles1": {
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "percentiles2": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1640",
        "ok": "1640",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2518",
        "ok": "2518",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 25765,
        "percentage": 86
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1217,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3018,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "491.803",
        "ok": "491.803",
        "ko": "-"
    }
},
contents: {
"req_click-redirect-39c92": {
        type: "REQUEST",
        name: "Click Redirect",
path: "Click Redirect",
pathFormatted: "req_click-redirect-39c92",
stats: {
    "name": "Click Redirect",
    "numberOfRequests": {
        "total": "30000",
        "ok": "30000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3312",
        "ok": "3312",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "337",
        "ok": "337",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "533",
        "ok": "533",
        "ko": "-"
    },
    "percentiles1": {
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "percentiles2": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1640",
        "ok": "1640",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2518",
        "ok": "2518",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 25765,
        "percentage": 86
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1217,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3018,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "491.803",
        "ok": "491.803",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
