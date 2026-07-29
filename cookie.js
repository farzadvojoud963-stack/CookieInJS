class Cookie{
    static setCookie(cname, cvalue, exday){
        let d = new Date();
        d.setTime(d.getTime() + (exday * 24 * 60 * 60 * 1000));
        let exdate = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + exdate + ";path=/";
    }
    
    static getCookie(cname){
        let deCodeCookie = decodeURIComponent(document.cookie);
        let dc = deCodeCookie.split(';');
        for(let a of dc){
            if(a.includes(cname)){
                var target = a.split('=');
                return target[1];
            }
        }
        
        return "";
    }

    static deleteCookie(cname){
        let d = new Date();
        d.setDate(d.getDate() - 10000);
        let exdate = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + "" + ";" + exdate + ";path=/";
    }
}