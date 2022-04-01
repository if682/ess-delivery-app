const fs = require("fs");

class DBService {

    constructor(name) {
        this.name = name;
        this.path = __dirname + '/files/' + name + '.json';
        this.read();
    }
    
    read() {
        this.data = JSON.parse(
            fs.readFileSync(this.path, "utf8", (err) => {
                if (err) throw err;
            })
        );
    }

    write() {
        fs.writeFileSync(this.path, JSON.stringify(this.data), (err) => {
            if (err) throw err;
        });
    }

    getData() {
        return this.data[this.name];
    }

    add(data) {
        this.data[this.name].push(data);
        this.write();
    }

    delete(index) {
        this.data[this.name].splice(index, 1);
        this.write();
    }

    update(index, item) {
        this.data[this.name].splice(index, 1, item);
        this.write();
    }
}

exports.DBService = DBService;