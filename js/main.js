document.addEventListener("DOMContentLoaded",()=>{
    //let tg = window.Telegram.WebApp;
    //tg.sendData("some string that we need to send"); 
    const data = {
        userId: 123,
        action: "register",
        additionalInfo: "Some info"
    };
    window.Telegram.WebApp.sendData(JSON.stringify(data));
});