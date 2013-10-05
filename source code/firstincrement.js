var glLat;
var glLang;
var map;

    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
        position.coords.longitude);
        glLat = position.coords.latitude;
        glLong = position.coords.longitude;
        document.getElementById("demo1").innerHTML = glLat;
    });
}
$("#signin").on("click",function(){
    if($("#username").val()=="myname" &&$("#password").val()=="mypassword")
        alert("username and password correct");
   else
   alert("username and password incorrect");
       });
$("#StoreButton").on("click", function()
{    
window.open("http://maps.google.com/?q=food&data="+glLat+","+glLong+"","blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400");
});