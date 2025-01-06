document.addEventListener("DOMContentLoaded",()=>{
    //let tg = window.Telegram.WebApp;
    //tg.sendData("some string that we need to send"); 
    const data = { key: 'value' }; // Ваши данные
    window.Telegram.WebApp.sendData(JSON.stringify(data));
});