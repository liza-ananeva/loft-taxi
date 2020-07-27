// export const serverLogin = async (user) => {
//     return fetch(
//         `https://loft-taxi.glitch.me/auth?username=${user.email}&password=${user.password}`
//     ).then(res => res.json()).then(data => data.success);
// }

export const serverLogin = async (user) => {
    let res = await fetch(`https://loft-taxi.glitch.me/auth?username=${user.email}&password=${user.password}`);
    let data = await res.json();
    
    return data.success;
}
