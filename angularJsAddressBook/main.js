var infoForm = document.getElementById("infoForm");
infoForm.className = "hide";

function Entrie(name,phone,address,city,email){
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.city = city;
    this.email = email;
}

var addressBook = angular.module("addressBook", ['ngStorage']);
addressBook.controller("addressBookCtrl", function($scope, $localStorage){
    
    $scope.toggleClassInfoForm = function(){
        if(infoForm.className === "show"){
            infoForm.className = "hide";
        }else{
            infoForm.className = "show";
        }
    };
    
    
    $scope.addressEntries = ($localStorage.saveDate)? $localStorage.saveDate : [];
    
    $scope.addEntrie = function(){
        if($scope.name !== "" && $scope.phone !== "" && $scope.address !== "" && $scope.city !== "" && $scope.email !== ""){
            var obj = new Entrie($scope.name,$scope.phone,$scope.address,$scope.city,
                   $scope.email);
            $scope.addressEntries.push(obj);
            $localStorage.saveDate = $scope.addressEntries;
            
            $scope.name = "";
            $scope.phone = "";
            $scope.address = "";
            $scope.city = "";
            $scope.email = "";
            infoForm.className = "hide";
        }else{
            return;
        }
    };
    
    $scope.removeEntrie = function(idx){
        $scope.addressEntries.splice(idx,1);
    };
    
    $scope.cancelEntrie = function(){
        $scope.name = "";
        $scope.phone = "";
        $scope.address = "";
        $scope.city = "";
        $scope.email = "";
        infoForm.className = "hide";
    };
    
});

