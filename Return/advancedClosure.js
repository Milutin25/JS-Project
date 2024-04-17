/*Write a function configureDevice
that takes an idfor a device. 
It should return a function that accepts a command.
 When this function is called with a command, 
 it should return a string combining theid and the command, e.g.,
"Device 001 execute: reboot"*/

function configureDevice(id){
    return function (command){
        return `Device ${id} execute:${command}`;
    }
}

const device1 = configureDevice("001");
const device2 = configureDevice("002");

console.log(device2("reboot"));
