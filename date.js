//jshint esversion:6


module.exports.getDate = function(){
    let today = new Date();
    // let day = today.getDay();
    let options =
    {
        weekday:"long",//entire day of that week
        date:"numeric",
        month:"long"
    };
    return today.toLocaleDateString("en-US", options);;
}

module.exports.getDay = function(){
    let today = new Date();
    // let day = today.getDay();
    let options =
    {
        weekday:"long",//entire day of that week
    };
    return today.toLocaleDateString("en-US", options);;
}