
import { createClient } from "@supabase/supabase-js";



export const mybase = createClient("https://pqfiwahrarbivadfpoix.supabase.co", process.env.REACT_APP_API_KEY);


export const myUrl = "https://solutrend.com/";

export function saveToken(token) {
    return localStorage.setItem('my-token', JSON.stringify(token));
}


export function getToken() {
    return JSON.parse(localStorage.getItem('my-token'));
}




export function maxString(str) {
    if (str.length > 20) {
        // Truncate the string to the first 10 characters
        str = str.substring(0, 10);

        // Add an ellipsis at the end of the truncated string
        str += "..";
    }
    return str;
}


export function truncateString(str) {
    if (str.length > 9) {
        // Truncate the string to the first 10 characters
        str = str.substring(0, 10);

        // Add an ellipsis at the end of the truncated string
        str += "..";
    }
    return str;
}

export function removeToken() {
    return localStorage.removeItem('my-token')
}



export function metaTitle(str) {
    if (str.length > 64) {
        // Truncate the string to the first 10 characters
        str = str.substring(0, 64);
    }
    return str;
}



export function metaDescription(str) {
    if (str.length > 160) {
        // Truncate the string to the first 10 characters
        str = str.substring(0, 160);
    }
    return str;
}







export function shareOnTwitter(url, text, image) {
    let twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    if (image) {
        twitterUrl += `&related=${encodeURIComponent(image)}`;
    }
    window.open(twitterUrl, '_blank');
}


export function shareOnFacebook(url) {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
}

export function shareFacebook(url, title, description) {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
    window.open(facebookUrl, '_blank');
}
export function shareOnLinkedIn(url, title, summary) {
    const linkedInUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`;
    window.open(linkedInUrl, '_blank');
}



export function dateFormat(tstamp) {
    const date = new Date(tstamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return (date.toLocaleDateString('en-US', options));

}

export function appStatus(status) {

    switch (status) {

        case 1:
            return "approved";
        case 0:
            return "under review";
        case -1:
            return "refused";
        default:
            return "under review";

    }

}

export function statusColor(status) {

    switch (status) {

        case 1:
            return "green";
        case 0:
            return "gray";
        case -1:
            return "red";
        default:
            return "gray";

    }

}





//export const pwiki = PiwikPro.initialize('cd7f47f3-8c06-4787-bf21-49f9c95546fd', 'https://solutrend.containers.piwik.pro');
