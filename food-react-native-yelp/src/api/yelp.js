import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer fWyIepqN0TSLVb1-jLZHrnjbbX0Xr8HvrqGqcp4cayxHFYhnGovo87N7cYGCYBzhua-_v2EAcigWWMtZDsLkp7uUaWM2BSvfRMrCWbyiyyKgBa3NBRJXrTQiPPoyXnYx"
    }
});



