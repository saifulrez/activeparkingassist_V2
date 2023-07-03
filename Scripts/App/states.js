(function () {
    'use strict';

    angular
        .module('apaApp')
        .factory('states', states);

    //states.$inject = ['$http'];

    function states() {

        var idle = {
            name: "Default",
            description: "The system is awaiting input, and the user can start the system if the vehicle is going under 5 mph. The system is also monitoring for any external events, such as a collision or a failure.",
            mph: 5,
            accelerator: {
                input: "Yes",
                functional: "Yes",
                active: "Yes"
            },
            brakes: {
                input: "Yes",
                functional: "Yes",
                active: "Yes"
            },
            steeringWheel: {
                input: "Yes",
                functional: "Yes",
                active: "Yes"
            },
            ultrasonic: {
                input: "N/A",
                functional: "Yes",
                active: "No"
            },
            camera: {
                input: "N/A",
                functional: "Yes",
                active: "No"
            }
        };

        var searching = {
            name: "Searching",
            description: "The system is looking for either a parallel or perpendicular parking spot, and the user can cancel the system through the HMI or by braking. The system continues to monitor for events.",
            mph: 5,
            accelerator: {
                input: "Yes (< 5mph)",
                functional: "Yes",
                active: "Yes"
            },
            brakes: {
                input: "Yes (cancels search)",
                functional: "Yes",
                active: "Yes"
            },
            steeringWheel: {
                input: "no",
                functional: "Yes",
                active: "Yes"
            },
            ultrasonic: {
                input: "N/A",
                functional: "Yes",
                active: "Yes"
            },
            camera: {
                input: "N/A",
                functional: "Yes",
                active: "No"
            }
        };

        var found = {
            name: "Found",
            description: "The system has found a suitable parking spot, and notifies the user to verify the selection. The user can deny the selection, and the system will search for another. The user can cancel the system through the HMI or by braking. The system continues to monitor for events.",
            mph: 0,
            accelerator: {
                input: "Yes (cancels search)",
                functional: "Yes",
                active: "Yes"
            },
            brakes: {
                input: "No",
                functional: "Yes",
                active: "Yes"
            },
            steeringWheel: {
                input: "no",
                functional: "Yes",
                active: "No"
            },
            ultrasonic: {
                input: "N/A",
                functional: "Yes",
                active: "Yes"
            },
            camera: {
                input: "N/A",
                functional: "Yes",
                active: "No"
            }
        };

        var noMoreSpots = {
            name: "No More Spots",
            description: "The system has run out of suitable parking spots and notifies the user of this event. The system then exits back to the default state. The system continues to monitor for events.",
            mph: 0,
            accelerator: {
                input: "Yes",
                functional: "Yes",
                active: "No"
            },
            brakes: {
                input: "Yes",
                functional: "Yes",
                active: "Yes"
            },
            steeringWheel: {
                input: "Yes",
                functional: "Yes",
                active: "No"
            },
            ultrasonic: {
                input: "N/A",
                functional: "Yes",
                active: "No"
            },
            camera: {
                input: "N/A",
                functional: "Yes",
                active: "No"
            }
        };

        var parking = {
            name: "Parking",
            description: "The system has found a suitable parking spot, and the user has selected a spot. The system now takes control of the vehicle. The system displays a camera feed. The user can cancel the system through the HMI or by braking. The system continues to monitor for events.",
            mph: 2,
            accelerator: {
                input: "Yes (< 5 mph)",
                functional: "Yes",
                active: "Yes"
            },
            brakes: {
                input: "Yes (cancels parking)",
                functional: "Yes",
                active: "No"
            },
            steeringWheel: {
                input: "no",
                functional: "Yes",
                active: "Yes"
            },
            ultrasonic: {
                input: "N/A",
                functional: "Yes",
                active: "Yes"
            },
            camera: {
                input: "N/A",
                functional: "Yes",
                active: "Yes"
            }
        };

        var success = {
            name: "Success",
            description: "The system has parked with no errors. The user may acknowledge the success or simply turn off the vehicle. The system continues to monitor for events.",
            mph: 0,
            accelerator: {
                input: "Yes",
                functional: "Yes",
                active: "No"
            },
            brakes: {
                input: "Yes",
                functional: "Yes",
                active: "No"
            },
            steeringWheel: {
                input: "Yes",
                functional: "Yes",
                active: "No"
            },
            ultrasonic: {
                input: "N/A",
                functional: "Yes",
                active: "No"
            },
            camera: {
                input: "N/A",
                functional: "Yes",
                active: "No"
            }
        };

        var collision = {
            name: "Collision Detected",
            description: "The system detects a collision during parking, brakes, and disables the system.",
            mph: 0,
            accelerator: {
                input: "Yes",
                functional: "Yes",
                active: "No"
            },
            brakes: {
                input: "Yes",
                functional: "Yes",
                active: "No"
            },
            steeringWheel: {
                input: "Yes",
                functional: "Yes",
                active: "No"
            },
            ultrasonic: {
                input: "N/A",
                functional: "Yes",
                active: "No"
            },
            camera: {
                input: "N/A",
                functional: "Yes",
                active: "No"
            }
        };

        var failure = {
            name: "Failure Detected",
            description: "The system detects a hardware or software failure, and either logs the event, notifies the user, disables the system, or some combination of the above depending on the severity of the event. The system continues to monitor for events.",
            mph: 0,
            accelerator: {
                input: "Yes",
                functional: "Yes",
                active: "No"
            },
            brakes: {
                input: "Yes",
                functional: "Yes",
                active: "No"
            },
            steeringWheel: {
                input: "Yes",
                functional: "Yes",
                active: "No"
            },
            ultrasonic: {
                input: "N/A",
                functional: "No",
                active: "No"
            },
            camera: {
                input: "N/A",
                functional: "No",
                active: "No"
            }
        };

        var obstacle = {
            name: "Obstacle Detected",
            description: "The system detects an obstacle during parking, brakes, and disables the system. The system continues to monitor for events.",
            mph: 0,
            accelerator: {
                input: "Yes",
                functional: "Yes",
                active: "No"
            },
            brakes: {
                input: "Yes",
                functional: "Yes",
                active: "No"
            },
            steeringWheel: {
                input: "Yes",
                functional: "Yes",
                active: "No"
            },
            ultrasonic: {
                input: "N/A",
                functional: "Yes",
                active: "No"
            },
            camera: {
                input: "N/A",
                functional: "Yes",
                active: "No"
            }
        };

        var service = {
            idle: idle,
            searching: searching,
            found: found,
            noMoreSpots: noMoreSpots,
            parking: parking,
            success: success,
            collision: collision,
            failure: failure,
            obstacle: obstacle

        };

        return service;

    }
})();