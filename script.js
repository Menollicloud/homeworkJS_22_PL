finArr = [];

const dataFunc = (fileData, keyData, ArrPush) => {
    let data = JSON.parse(fileData);
            for(let key in data){
                if(key === keyData){
                    for(let i=0;i<data[key].length;i++){
                        ArrPush.push(data[key][i])
                    };
                };
            };
}

const getFile = (file, callback = (f) => f) => {
	let xhr = new XMLHttpRequest();
	xhr.open(`GET`,file);
    xhr.onload = () => {
        dataFunc(xhr.responseText, "children", finArr);
            callback();
    }
	xhr.send();
};

getFile("data.json", ()=>{
    getFile("data2.json", () => console.log(finArr));
});