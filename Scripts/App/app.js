var app = angular.module("apaApp", []); 

app.controller('apaController', apaController);

apaController.$inject = ['$interval', 'states'];

function apaController($interval, states) {

    var vm = this;

    // Functions
    vm.startSearching = startSearching;
    vm.cancelSearch = cancelSearch;
    vm.continueSearch = continueSearch;
    vm.startParking = startParking;
    vm.cancelParking = cancelParking;

    vm.engageBrakes = engageBrakes;
    vm.accelerate = accelerate
    vm.turnSteeringWheel = turnSteeringWheel;

    vm.reset = reset;
    vm.obstacleEvent = obstacleEvent;
    vm.collisionEvent = collisionEvent;
    vm.hardwareEvent = hardwareEvent;
    vm.securityEvent = securityEvent;

    // Variables
    vm.testing = "NOOOOOO!";
    vm.state = {}
    vm.states = states;

    vm.maxSpeed = 10;

    // Activate
    activate();

    function activate() {
        vm.state = states.idle;
        vm.findSpot = undefined;
    }

    function startSearching() {
        //Error Checks
        if(vm.state != states.idle){
            console.log("State error!");
            return;
        }

        vm.state = states.searching;

        vm.searchTime = $interval(findSpot, 3000);
    }

    function cancelSearch() {
        //Error Checks
        if (vm.state != states.searching && vm.state != states.found) {
            console.log("State error!");
            return;
        }

        $interval.cancel(vm.searchTime);

        vm.state = states.idle;
    }

    function continueSearch() {
        //Error Checks
        if (vm.state != states.found) {
            console.log("State error!");
            return;
        }

        vm.state = states.searching;

        vm.searchTime = $interval(findSpot, 3000);
    }

    function findSpot() {
        $interval.cancel(vm.searchTime);
        vm.state = states.found;
    }

    function startParking() {
        //Error Checks
        if (vm.state != states.found) {
            console.log("State error!");
            return;
        }

        vm.state = states.parking;

        vm.parkTime = $interval(parkingSuccess, 3000);
    }

    function cancelParking() {
        //Error Checks
        if (vm.state != states.parking) {
            console.log("State error!");
            return;
        }

        $interval.cancel(vm.parkTime);

        vm.state = states.idle;
    }

    function parkingSuccess() {
        $interval.cancel(vm.parkTime);
        vm.state = states.success;
    }



    function engageBrakes() {
        if (vm.state == states.idle && vm.state.mph > 0) {
            vm.state.mph--;
        }
        else if (vm.state == states.searching) {
            vm.cancelSearch();
        }
        else if(vm.state == states.parking){
            vm.cancelParking();
        }
    }

    function accelerate() {
        if (vm.state == states.idle && vm.state.mph < vm.maxSpeed) {
            vm.state.mph++;
        }
        else if (vm.state == states.searching && vm.state.mph < 5) {
            vm.state.mph++;
        }
        else if (vm.state == states.parking && vm.state.mph < 5) {
            vm.state.mph++;
        }
    }

    function turnSteeringWheel() {
        console.log("Hit turn steering wheel button");
    }




    function reset() {
        vm.state = states.idle;
    }

    function obstacleEvent() {
        if (vm.state == states.searching) {
            vm.cancelSearch();
            vm.state = states.obstacle;
        }
        else if (vm.state == states.parking) {
            vm.cancelParking();
            vm.state = states.obstacle;
        }
    }

    function collisionEvent() {
        if (vm.state == states.searching) {
            vm.cancelSearch();
            vm.state = states.collision;
        }
        else if (vm.state == states.parking) {
            vm.cancelParking();
            vm.state = states.collision;
        } else {
            vm.state = states.collision;
        }
    }

    function hardwareEvent() {
        if (vm.state == states.searching) {
            vm.cancelSearch();
            vm.state = states.failure;
        }
        else if (vm.state == states.parking) {
            vm.cancelParking();
            vm.state = states.failure;
        } else {
            vm.state = states.failure;
        }
    }

    function securityEvent() {
        console.log("Hit security event");
    }
};