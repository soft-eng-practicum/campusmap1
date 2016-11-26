'use strict';

angular.module('myApp.view1', ['ngRoute', 'ui.bootstrap'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html'
        })
    }])
    .controller('View1Ctrl', ['$scope', '$http', '$uibModal', function ($scope, $http, $uibModal) {
        $('#campusmap').imageMapResize();
        $scope.hasPictures = false;
        $scope.showPicModal = false;
        $scope.morethantwo = false;
        $scope.show = false;
        $scope.loaded = true;
        $scope.sideEvents = [];
        $scope.selectedBuilding = {};
        $scope.columnHeaders = [];
        $scope.current = moment();

        $(document).ready(function () {
            var trigger = $('.hamburger'),
                overlay = $('.overlay'),
                isClosed = false;
            trigger.click(function () {
                hamburger_cross();
            });

            function hamburger_cross() {
                if (isClosed == true) {
                    overlay.hide();
                    trigger.removeClass('is-open');
                    trigger.addClass('is-closed');
                    isClosed = false;
                } else {
                    overlay.show();
                    trigger.removeClass('is-closed');
                    trigger.addClass('is-open');
                    isClosed = true;
                }
            }
        });

        $scope.open = function () {
            $('#wrapper').toggleClass('toggled');
        }

        $scope.getBuildings = function () {
            var getUrl = window.location;
            var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname;
            return $http.get(baseUrl + '/buildings.json').then(function (response) {
                $scope.buildings = response.data.buildings;
            });
        }

        $scope.getBuildings().then(function () {
            var buildingA = $scope.buildings[0];
            var buildingB = $scope.buildings[1];
            var buildingC = $scope.buildings[2];
            var buildingD = $scope.buildings[3];
            var buildingE = $scope.buildings[4];
            var buildingF = $scope.buildings[5];
            var buildingG = $scope.buildings[6];
            var buildingH = $scope.buildings[7];
            var buildingI = $scope.buildings[8];
            var buildingL = $scope.buildings[9];
            var buildingP = $scope.buildings[10];
            $('#buildinga').click(function () {
                $scope.selectedBuilding = buildingA;
                $scope.showModal();
            });
            $('#buildingb').click(function () {
                $scope.selectedBuilding = buildingB;
                $scope.showModal();
            });
            $('#buildingc').click(function () {
                $scope.selectedBuilding = buildingC;
                $scope.showModal();
            });
            $('#buildingd').click(function () {
                $scope.selectedBuilding = buildingD;
                $scope.showModal();
            });
            $('#buildinge').click(function () {
                $scope.selectedBuilding = buildingE;
                $scope.showModal();
            });
            $('#buildingf').click(function () {
                $scope.selectedBuilding = buildingF;
                $scope.showModal();
            });
            $('#buildingg').click(function () {
                $scope.selectedBuilding = buildingG;
                $scope.showModal();
            });
            $('#buildingh').click(function () {
                $scope.selectedBuilding = buildingH;
                $scope.showModal();
            });
            $('#buildingi').click(function () {
                $scope.selectedBuilding = buildingI;
                $scope.showModal();
            });
            $('#buildingl').click(function () {
                $scope.selectedBuilding = buildingL;
                $scope.showModal();
            });
            $('#buildingp').click(function () {
                $scope.selectedBuilding = buildingP;
                $scope.showModal();
            });

            $scope.getExcelValues = function (values) {
                $scope.excelValues = values;
                var checkTime;
                angular.forEach($scope.values, function (value) {
                	if(value[3] != "" && value[3] != "Date") {
                	checkTime = moment(value[3], "MM-DD-YYYY");
                		if($scope.current.isBefore(checkTime)) {
                			$scope.sideEvents.push(value);
                			if (angular.equals("A", value[2])) {
		                        buildingA.events.push(value);
		                        buildingA.numEvents++;
		                    } else if (angular.equals("B", value[2])) {
		                        buildingB.events.push(value);
		                        buildingB.numEvents++;
		                    } else if (angular.equals("C", value[2])) {
		                        buildingC.events.push(value);
		                        buildingC.numEvents++;
		                    } else if (angular.equals("D", value[2])) {
		                        buildingD.events.push(value);
		                        buildingD.numEvents++;
		                    } else if (angular.equals("E", value[2])) {
		                        buildingE.events.push(value);
		                        buildingE.numEvents++;
		                    } else if (angular.equals("F", value[2])) {
		                        buildingF.events.push(value);
		                        buildingF.numEvents++;
		                    } else if (angular.equals("G", value[2])) {
		                        buildingG.events.push(value);
		                        buildingG.numEvents++;
		                    } else if (angular.equals("H", value[2])) {
		                        buildingH.events.push(value);
		                        buildingH.numEvents++;
		                    } else if (angular.equals("I", value[2])) {
		                        buildingI.events.push(value);
		                        buildingI.numEvents++;
		                    } else if (angular.equals("L", value[2])) {
		                        buildingL.events.push(value);
		                        buildingL.numEvents++;
		                    } else if (angular.equals("P", value[2])) {
		                        buildingP.events.push(value);
		                        buildingP.numEvents++;
		                    }
                		}
                	}
                    console.log($scope.sideEvents);
                });
                $scope.loaded = false;
                $scope.$apply();
            };
        });

        $('#picModal').click(function () {
            $scope.picModal();
        });

        $scope.showModal = function () {
            $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                animation: true,
                templateUrl: 'modal.html',
                controller: 'ModalInstanceCtrl',
                scope: $scope,
                size: 'lg'
            });
        }
    }])
    .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
        $scope.selectedPicture = "";
        $scope.active = 0;
        $scope.noWrapSlides = false;
        $scope.myInterval = 1000;
        var slides = $scope.slides = [];
        var currIndex = 0;

        if ($scope.selectedBuilding.pictures.length != 0) {
            $scope.hasPictures = true;
        }

        $scope.addSlide = function () {
            slides.push({
                'src': $scope.selectedBuilding.pictures[currIndex].src,
                caption: $scope.selectedBuilding.pictures[currIndex].caption,
                id: currIndex++
            });
        }

        $scope.selectedClick = function (index) {
            $scope.pictureCoords = [];
            var picture = $scope.selectedBuilding.pictures[index];
            $scope.selectedPicture = picture;
            $scope.showPicModal = true;
        }

        $scope.options = {
            sourceProp: 'src',
            visible: 5,
            perspective: 35,
            startSlide: 0,
            border: 3,
            width: 250,
            height: 160,
            space: 220,
            autoRotationSpeed: 0,
            loop: true,
            clicking: true,
            controls: true
        }

        $scope.selectedBuilding.pictures.forEach(function (picture) {
            $scope.addSlide();
        });

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        }

        $scope.showPic = function (picture) {
            $scope.selectedPicture = picture;
            $scope.showPicModal = true;
        }

        if ($scope.selectedBuilding.pictures.length > 2) {
            $scope.morethantwo = true;
        }

        $scope.numAdministrativeServices = $scope.selectedBuilding.administrativeServices.length;
        $scope.numFoodServices = $scope.selectedBuilding.foodServices.length;
        $scope.numAdditionalServices = $scope.selectedBuilding.additionalServices.length;
    }]);
