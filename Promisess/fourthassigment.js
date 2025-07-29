
function startTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task A completed");

    }, 1000);
  });
}

function processTask(prevResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Task B processed: ${prevResult}`);
     
    }, 1500);
  });
}


function finalizeTask(prevResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Final result: ${prevResult}`);
 
    }, 500);
  });
}

startTask()
  .then(resultA => {
    console.log(resultA);
    return processTask(resultA);
  })
  .then(resultB => {
    console.log(resultB);
    return finalizeTask(resultB);
  })
  .then(finalResult => {
    console.log(finalResult);
  })
  .catch(error => {
    console.error("Error:", error);
  });
