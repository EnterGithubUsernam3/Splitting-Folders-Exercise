export class Disk {
    constructor(id) {
        this.id = id;
        this.totalDiskSpace = 10 ** 6;
        this.folders = [];

    };
    getFreeSpace() {
        console.log(`The free space of this disk is ${this.totalDiskSpace - this.folders.reduce((a, b) => a + b, 0)}  MB`);
    }
}


