'use strict';

/**
 * @ngdoc function
 * @name portfolio.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolio
 */
angular.module('portfolio')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.currentDate = new Date();
    var nextWeekDate = new Date();
    // var clock = $scope.clock;

    var nextWeek = function (date) {
        date.setDate(date.getDate() + (1 - date.getDay() + 7) % 7 + 1);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
    };

    $scope.nextWeekDate = nextWeek(nextWeekDate);
    // var deadline = nextWeek(new Date());

    var getTimeRemaining = function (startTime, endTime) {
        var t = Date.parse(endTime) - Date.parse(startTime);
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    $scope.remainingTime = getTimeRemaining($scope.currentDate, $scope.nextWeekDate);

    // var initializeClock = function (endtime, clock) {
    //     var daysSpan = clock.querySelector('.days');
    //     var hoursSpan = clock.querySelector('.hours');
    //     var minutesSpan = clock.querySelector('.minutes');
    //     var secondsSpan = clock.querySelector('.seconds');

    //     var format = $scope.format ? $scope.format : 'dhms';
    //     format = format.toLowerCase();

    //     function updateClock() {
    //         var t = getTimeRemaining(endtime);

    //         daysSpan.innerHTML = t.days;
    //         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    //         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    //         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    //         if ($scope.simple) {
    //             daysSpan.innerHTML += '  days ';
    //             hoursSpan.innerHTML += '  hours ';
    //             minutesSpan.innerHTML += '  min ';
    //             secondsSpan.innerHTML += '  sec ';
    //         }

    //         if (t.total <= 0) {
    //             clearInterval(timeinterval);
    //         }
    //     }

    //     updateClock();
    //     var timeinterval = $interval(updateClock, 1000);
    // };

    // initializeClock(deadline, clock);
    
    
    // $scope.hex = 'derp';
    
    // var nextBatch = function (date) {
    //     var ret = new Date(date||new Date());
    //     ret.setDate(ret.getDate() + (1 - ret.getDay() + 7) % 7 + 1 );
    //     return ret;
    // }

    // var holidayCheck = function(date) {
    //     var currentDate = date.getMonth + "/" + date.getDay;
    //     var exclusionDates = ['11/25'];
    //     if ( exclusionDates.indexOf(currentDate) > 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    
    // $scope.time = nextBatch("2015-12-03T22:00:00.208Z");
    // $scope.isHoliday = holidayCheck(new Date());

    // $scope.cmykToRGB = function(c,m,y,k) {

    //     function padZero(str) {
    //         return '000000'.substr(str.length)+str;
    //     }

    //     var cyan = (c * 255 * (1-k)) << 16;
    //     var magenta = (m * 255 * (1-k)) << 8;
    //     var yellow = (y * 255 * (1-k)) >> 0;

    //     var black = 255 * (1-k);
    //     var white = black | black << 8 | black << 16;

    //     var color = white - (cyan | magenta | yellow );

    //     $scope.hex = '#'+padZero(color.toString(16));
    // };
  });
