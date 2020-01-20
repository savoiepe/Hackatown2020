/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  setInterval(
    function (){
      const response = `worker response to ${data}`;
      postMessage(response);},
    150)
});
