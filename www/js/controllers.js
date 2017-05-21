angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.user_id=34;
  $scope.firstname="Ali";


    $scope.ygs1=200;
    $scope.ygs2=240;
    $scope.ygs3=230;
    $scope.ygs4=225;
    $scope.ygs5=205;
    $scope.mat=0;
    $scope.fen=0;
    $scope.sos=0;
    $scope.tur=0;
    $scope.net = function(mat,fen,sos,tur) {

      $scope.ygs1=200+mat*0.3+fen*0.2+sos*0.1+tur*0.1;
      $scope.ygs2=240+mat*0.4+fen*0.2+sos*0.2+tur*0.1;
      $scope.ygs3=230+mat*0.2+fen*0.4+sos*0.3+tur*0.2;
      $scope.ygs4=225+mat*0.4+fen*0.3+sos*0.3+tur*0.3;
      $scope.ygs5=205+mat*0.2+fen*0.4+sos*0.5+tur*0.1;

      $scope.w1=($scope.ygs1-200)*100/28;
      $scope.w2=($scope.ygs2-240)*100/36;
      $scope.w3=($scope.ygs3-230)*100/44;
      $scope.w4=($scope.ygs4-225)*100/52;
      $scope.w5=($scope.ygs5-205)*100/48;

  };


  $scope.cikis = function() {
    $scope.user_id=null;
    $scope.loginData.username=null;
    $scope.loginData.password=null;
    console.log("Çıkış işlemi yapılıyor...")
  };

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

     $scope.user_id=34;
    $scope.firstname=$scope.loginData.username;

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('PlaylistsCtrl', function($scope,$rootScope) {
$scope.adet=355;
$scope.durum=0;
  $scope.tikla = function () {
    console.log("Bana tıklayın");
    if($scope.durum==0){
      $scope.adet=$scope.adet+1;
      $scope.durum=1;
    }else{
      $scope.adet=$scope.adet-1;
      $scope.durum=0;
    }
  };


  $rootScope.firmalar = [
    { adi: 'Akbank',kategori:'Banka',logo:'http://www.indirpop.com/wp-content/uploads/2016/05/akbank.png',tel:'4440444', detay:'Bankamız 1945 yılında ilk faaliyetlerine başlamıştır. Şu anda 1500 üzeri şube sayısına ulaştık.' , id: 0 },
    { adi: 'Vakıf Bank',kategori:'Banka',logo:'http://logovector.org/wp-content/uploads/logos/png/v/vakifbank_logo.png',tel:'4440444', detay:'Bankamız 1935 yılında Devlet Bankası olarak kurulmuştur. Şu anda 3000 üzerinde şubem,z vardır.' , id: 1 },
    { adi: 'Garanti',kategori:'Banka',logo:'https://seeklogo.com/images/G/garanti-logo-8B9D874353-seeklogo.com.gif',tel:'4440444', detay:'Bankamız 1960 yılında ilk faaliyetlerine başlamıştır. Şu anda özel bankalar arasında lider bankalardan biri ve 3500 üzerinde şubesi vardır.' , id: 2 },
    { adi: 'Yıldız Teknik',kategori:'Üniversite',logo:'http://www.bologna.yildiz.edu.tr/images/designV2/logo_ytu.png',tel:'4440444', detay:'Okulumuz 1911 yılında Yıldız semtinde kurulmuş bulunmaktadır. Şu anda Davutpaşa Yıldız ve Maçka olmak üzere 3 adet kampüste eğitim hayatına devam etmektedir.' , id: 3 },
    { adi: 'Jandarma', kategori:'Acil',logo:'http://orig06.deviantart.net/d72b/f/2007/290/b/2/jandarma_logosu_by_emrahman.jpg' , tel:'4440444', detay:'Jandarma olarak polis teşkilatının hizmeti dışında olan yerlede asayişi sağlıyoruz.' ,  id: 4 },
    { adi: 'Elektrik Arıza', kategori:'Acil' , logo:'http://www.urfadabugun.com/files/uploads/news/default/444-8-086-alo-dicle-elektrik-ariza-cagri-merkezi-hizmete-girdi80cb10f7ee26576e01e0.jpg' , tel:'4440444', detay:'Elektrik kaçağı ve olası elektrikle ilgili problemler için çalışan devlet kurumuyuz.' , id: 5 }
  ];



})

.controller('PlaylistCtrl', function($scope, $stateParams , $rootScope) {


  $scope.firmadetay=$rootScope.firmalar[$stateParams.playlistId]
});
