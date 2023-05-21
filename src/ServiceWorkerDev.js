export default function serviceWorkerDev(){
    let serviceWorkerUrl = `${process.env.PUBLIC_URL}/service-worker.js`
    navigator.serviceWorker.register(serviceWorkerUrl).then((response)=>{
        console.warn(response);
    });
}