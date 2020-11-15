export default function (form) {

    let form = new FormData(e.target);
    let data = [... form];
    let formData = {};
    data.map(val => {
        formData[val[0]] = val[1];
    });
    return formData;

}