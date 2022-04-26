var key = "";

function city(sehir) {
    var sehir =$("#search").val();
    $.ajax({
        url: 'https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city='+sehir,
        type: 'GET',
        dataType: 'json',
        headers: {
            authorization: key,
        },

        success: function (data) {
            text2 = data["result"][0]["date"];
            text3 = data["result"][0]["day"];
            text4 = data["result"][0]["description"];
            text5 = data["result"][0]["icon"];
            text6 = data["result"][0]["max"];
            text7 = data["result"][0]["min"];

            $("body .city").append("<div id='creative' class='card'>" + "<h3>" + data.city + "</h3>" + "<img src=" + text5 + " id='img' class='card-img-top'>" +
                "<div class='card-body'>" + "<p class='card-text'>" + text3 + "-" + text2 + "</br>" + text6 + "/" + text7 + "&nbsp" + "°C" + "</br>" + "<span id='desc'>" + text4 + "</span>" + "</p>" + "</div>" + "</div>)");
                var jsonData = JSON.stringify(data);
                var convert = JSON.parse(jsonData);
            for (i = 1; i < convert.result.length; i++) {
                console.log(data);
                text2 = data["result"][i]["date"];
                text3 = data["result"][i]["day"];
                text4 = data["result"][i]["description"];
                text5 = data["result"][i]["icon"];
                text6 = data["result"][i]["max"];
                text7 = data["result"][i]["min"];

                $(".table tbody").append("<tr>" + "<td>" + text3 + "</td>" + "<td>" + text2 + "</td>" + "<td>" + text6 + "/" + text7 + "°C" + "</td>" + "<td>" +
                    "<img id='img1' src=" + text5 + ">" + "<span id='desc'>" + text4 + "</span>" + "</td>" + "</tr>" + "<br/>");

            }
        },
        error: function (response) {
            alert(response);
        }
    });
};
$(document).ready(function () {
    var data = $.getJSON("key.json", function () {
        key = data.responseJSON.copy
    });
    $(document).on("click", "#btn", function () {
            $(".table tbody").empty();
            $(".city").empty();
            city();
    });
});

