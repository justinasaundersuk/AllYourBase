$(document).ready(function () {
    var elem = $('.item');
    i = 0;

    function getSlides() {
        //Loop through elements
        $(elem).each(function (index) {
            var totalSlides = $(elem).length;

            // first item
            if (i == index) {
                //Show active element
                $(this).removeClass("fadeOutDown")
                $(this).addClass("fadeInDown")
                $(this).show();
            }
                // last item
            else if (i == totalSlides) {
                //Show message
                $(this).removeClass("fadeOutDown");
                $(this).addClass("fadeInDown")
                $(this).show();
                //Reset i when first number is reached
                i = 0;
            }
            else {
                // FadeOutDown non active elements
                $(this).addClass("fadeOutDown");
            }
        });
        i++;
    }

    //Run once the first time
    getSlides();

    //Repeat
    window.setInterval(getSlides, 4000);
});


// Live version of ticker using JSON

// Data
//[
//    { "firstName": "Claudio", "siteName": "TestAutomation (Autotest Only)" },
//    { "firstName": "Toni", "siteName": "Automation Test Site 1" },
//    { "firstName": "Asdsa", "siteName": "Automation Test Site 1" },
//    { "firstName": "Asdasd", "siteName": "Automation Test Site 1" },
//    { "firstName": "Asdsa", "siteName": "Automation Test Site 1" },
//    { "firstName": "Dfgd", "siteName": "Automation Test Site 1" },
//    { "firstName": "Dfsdf", "siteName": "Automation Test Site 1" },
//    { "firstName": "Dfgdf", "siteName": "Automation Test Site 1" },
//    { "firstName": "Sdfdsf", "siteName": "Automation Test Site 1" },
//    { "firstName": "Unhosted", "siteName": "Automation Test Site 1" }
//]

//$(document).ready(function () {
//    //Run once the first time with no delay
//    refreshData();

//    window.setInterval(refreshData, 60000);

//    function refreshData() {
//        $.ajax({
//            url: '/api/CollectorSignUp/latest',
//            type: 'GET',
//            success: function (data) {
//                if (data) {
//                    if (data.length < 5) {
//                        $('.collector-signup-ticker').hide();
//                    }
//                    else {
//                        $('.collector-signup-ticker').show();
//                        $('#tickerData').html('');

//                        console.log("-- refreshData --");

//                        for (i = 0; i < data.length; i++) {
//                            var fName = data[i].firstName;
//                            var sName = data[i].siteName;

//                            var div = '<div class="item animated">';
//                            div += fName + ' has just signed up to collect in ' + sName;
//                            div += "</div>"
//                            $(div).appendTo('#tickerData');
//                        }

//                        //Run once the first time with no delay
//                        getSlides();
//                    }
//                }
//                else {
//                    $('.collector-signup-ticker').hide();
//                }
//            }
//        });
//    }

//    i = 0;

//    function getSlides() {
//        var elem = $('.item');

//        //Loop through elements
//        $(elem).each(function (index) {
//            var totalSlides = $(elem).length;

//            // first item
//            if (i == index) {
//                //Show active element
//                $(this).removeClass("fadeOutDown")
//                $(this).addClass("fadeInDown")
//                $(this).show();
//            }
//                // last item
//            else if (i == totalSlides) {
//                //Show message
//                $(this).removeClass("fadeOutDown");
//                $(this).addClass("fadeInDown")
//                $(this).show();
//                //Reset i when first number is reached
//                i = 0;
//            }
//            else {
//                // FadeOutDown non active elements
//                $(this).addClass("fadeOutDown");
//            }
//        });
//        i++;
//    }

//    $('#pauseTicker').click(function (e) {
//        e.preventDefault();
//        toggleTicker();
//    })

//    //Repeat
//    var timer = null;

//    toggleTicker();

//    function toggleTicker() {
//        if (timer == null) {
//            timer = window.setInterval(getSlides, 4000);
//            $('#pauseTicker').removeClass("fa-play").addClass("fa-pause");
//            $('#pauseTicker').html("Pause");
//        }
//        else {
//            clearInterval(timer);
//            timer = null;
//            $('#pauseTicker').removeClass("fa-pause").addClass("fa-play");
//            $('#pauseTicker').html("Play");
//        }
//    }
//});