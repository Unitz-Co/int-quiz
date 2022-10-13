import data from './data.json'

const avatarUrl = {
    title: "avatar default",
    url: "https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg",
}
export const status = {
    online: 'online',
    offline: 'offline'
}
export const listUser = data.data.advisorProfileCollection.items;
// add status to listUser;
for(let index in listUser) {
    if(index % 2 === 0) {
        listUser[index].status = status.online
    } else {
        listUser[index].status = status.offline
    } 
}
// add link avart which the user not already upload
for( let index in listUser) {
    if(!listUser[index].avatarUrl) {
        listUser[index].avatarUrl = avatarUrl
    }
}

export function getListCategory() {
    let newValue =[];
    listUser.forEach((user, index) => {
        const tempCateName = user.categoriesCollection.items.map(item=> item.displayName);
        tempCateName.forEach(tem => {
            newValue.push(tem)
        })
    })
    let ii = 0;
   
    let nn = newValue.length;
    // console.log(newValue)
    while(ii < nn) {
        
        const n = newValue.length;
        for(let j = ii + 1; j < n ;j ++) {
                if(newValue[ii]?.toLowerCase()?.trim() == newValue[j]?.toLowerCase()?.trim()){
                  
                    newValue.splice(j, 1);                
                }
        }
        ii ++;   
    }
    newValue.unshift('all')
    newValue.push('more...')
    return newValue;
} 



